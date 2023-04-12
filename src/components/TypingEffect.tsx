import { useMemo, useState } from "react";
import styled from "styled-components";

import useInterval from "@/common/hooks/useInterval";

const TypingEffect = () => {
  const [landingTitle, setLandingTitle] = useState("");
  const [count, setCount] = useState(0);

  const completedTitle = useMemo(() => {
    return "What is your keyword?";
  }, []);

  useInterval(() => {
    if (count >= completedTitle.length) return;

    setLandingTitle((prev) => {
      let result = prev ? prev + completedTitle[count] : completedTitle[0];

      setCount((prev) => prev + 1);

      return result;
    });
  }, 150);

  return <TypingEffectHeader>{landingTitle}</TypingEffectHeader>;
};

const TypingEffectHeader = styled.h1`
  width: auto;

  color: #ffffff;
  text-align: center;
  font-size: 9vmin;
  font-weight: 700;

  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);

  ::after {
    content: "";
    margin-left: 0.5rem;
    border-right: 0.25px solid #ffffff;
    opacity: 0;
    animation: cursor 1.2s 5 steps(1);
  }

  @keyframes cursor {
    50% {
      opacity: 1;
    }
  }
`;

export default TypingEffect;
