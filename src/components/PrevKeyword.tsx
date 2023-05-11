import styled from "styled-components";
import { useDispatch } from "react-redux";

import { useGetImageByKeywordQuery } from "@/api/serendipicApi";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { KeywordImageType } from "@/components/KeywordImage";
import { updateSearchKeyword } from "@/store/slice/keywordDataSlice";
import { alertStatus } from "@/store/slice/alertSlice";

const PrevKeyword = () => {
  const keywordList = useAppSelector((state) => state.keyword?.keywordList);
  const colorList = useAppSelector((state) => state.keyword?.colorList);
  const nowKeyword = useAppSelector((state) => state.keyword.searchKeyword);

  const dispatch = useDispatch();

  const { error } = useGetImageByKeywordQuery(nowKeyword) as KeywordImageType;

  const handlePrevKeywordClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    dispatch(updateSearchKeyword(value));

    if (error?.status === 404) {
      dispatch(alertStatus(error.status));
    }
  };

  return (
    <PrevKeywordContainer className="prev_keyword">
      {keywordList.map((keyword, idx) => (
        <PrevKeywordTag
          onClick={handlePrevKeywordClick}
          key={keyword}
          type="submit"
          value={keyword}
          randomColor={colorList[idx]}
        >
          {keyword}
        </PrevKeywordTag>
      ))}
    </PrevKeywordContainer>
  );
};

const PrevKeywordContainer = styled.div`
  text-align: center;
  margin-top: 5rem;

  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PrevKeywordTag = styled.button<{ randomColor: string }>`
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;

  color: #ffffff;
  font-size: 2.5vmin;

  background-color: ${(props) => props.randomColor};
  border-radius: 0.5rem;

  transition: all 0.3s ease-in-out;

  :hover {
    outline-style: solid #ffffff;
    box-shadow: 0 0 0 0.4rem #ffffff;
  }
`;

export default PrevKeyword;
