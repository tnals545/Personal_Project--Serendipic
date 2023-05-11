import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useGetImageByKeywordQuery } from "@/api/serendipicApi";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { alertStatus } from "@/store/slice/alertSlice";
import styled from "styled-components";

export interface KeywordImageType {
  data?: {
    urls: {
      raw: string;
    };
  };
  error?: {
    status: number;
  };
  isLoading?: boolean;
}

const KeywordImage = () => {
  const nowKeyword = useAppSelector((state) => state.keyword.searchKeyword);

  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetImageByKeywordQuery(
    nowKeyword
  ) as KeywordImageType;

  useEffect(() => {
    const timeoutImg = setTimeout(() => {
      if (error?.status === 404) {
        dispatch(alertStatus(error.status));
      }
    }, 500);

    return () => {
      clearTimeout(timeoutImg);
    };
  }, [error, dispatch]);

  return (
    <ImageContainer>
      {data && (
        <Image
          className="bg-img"
          src={data.urls.raw}
          alt={nowKeyword}
          fill
          priority
        />
      )}
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export default KeywordImage;
