import styled from "styled-components";
import { useDispatch } from "react-redux";

import { getImgInfo } from "@/api/main";
import { alertStatus } from "@/store/slice/alertSlice";
import { useAppSelector } from "@/common/hooks/useAppSelector";

const PrevKeyword = () => {
  const keywordList = useAppSelector((state) => state.keyword?.keywordList);
  const colorList = useAppSelector((state) => state.keyword?.colorList);

  const dispatch = useDispatch();

  const handlePrevKeywordClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const { value } = e.currentTarget;

    await getImgInfo(value).catch((err) => {
      if (err.response.status === 404) {
        dispatch(alertStatus(err.response.status));
      }
    });
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
