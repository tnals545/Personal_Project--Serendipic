import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import makeColor from "@/common/makeColor";
import { getImgInfo } from "@/api/main";
import { alertStatus } from "@/store/slice/alertSlice";
import { addColor, addKeyword } from "@/store/slice/keywordDataSlice";
import { useAppSelector } from "@/common/hooks/useAppSelector";

const ImageSearch = () => {
  const keywordInputRef = useRef<HTMLInputElement>(null);

  const keywordList = useAppSelector((state) => state.keyword?.keywordList);
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = new RegExp(/[ㄱ-ㅎㅏ-ㅣ가-힣]/);

    if (regex.test(e.target.value)) {
      dispatch(alertStatus("warning"));
    } else {
      dispatch(alertStatus(null));
    }

    e.target.value = e.target.value.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/, "");
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const randomColor = makeColor();

    dispatch(addColor(randomColor));

    if (keywordInputRef.current) {
      const { value } = keywordInputRef.current;

      if (!value) return;

      dispatch(addKeyword(value));

      keywordInputRef.current.value = "";
    }
  };

  useEffect(() => {
    keywordInputRef.current?.focus();

    const timeoutImg = setTimeout(async () => {
      await getImgInfo(keywordList[0]).catch((err) => {
        if (err.response.status === 404) {
          dispatch(alertStatus(err.response.status));
        }
      });
    }, 500);

    return () => {
      clearTimeout(timeoutImg);
    };
  }, [keywordList, dispatch]);

  return (
    <form onSubmit={handleOnSubmit}>
      <KeywordSearchBar
        ref={keywordInputRef}
        onChange={handleOnChange}
        type="text"
        placeholder="Give me a keyword to search for!"
      />
    </form>
  );
};

const KeywordSearchBar = styled.input`
  width: 70rem;

  color: #ffffff;
  font-size: 5vmin;
  font-weight: 500;
  background-color: transparent;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ::placeholder {
    color: #ffffff;
    border: none;
  }

  animation: delay 8s;

  @keyframes delay {
    0% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default ImageSearch;
