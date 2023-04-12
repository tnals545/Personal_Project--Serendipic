import styled from "styled-components";
import { useSelector } from "react-redux";
import { Alert, Space } from "antd";

import { RootState } from "@/store";

const StatusBasedAlert = () => {
  const alertStatus = useSelector((state: RootState) => state.alert.status);

  const createAlert = () => {
    if (alertStatus === "warning")
      return (
        <Alert
          message="한글을 지원하지 않습니다. 영문으로 입력해주세요."
          type="warning"
          showIcon
        />
      );
    if (alertStatus === 404)
      return (
        <Alert
          message="유효하지 않은 키워드 입니다. (Invalid keyword)"
          type="error"
          showIcon
        />
      );
  };

  return <AlertContainer direction="vertical">{createAlert()}</AlertContainer>;
};

const AlertContainer = styled(Space)`
  position: fixed;
  right: 5rem;
  bottom: -5rem;

  animation: alert 4s ease-in-out 1 alternate;

  @keyframes alert {
    0% {
      bottom: -5rem;
    }
    25% {
      bottom: 5rem;
    }
    75% {
      bottom: 5rem;
    }
    100% {
      bottom: -5rem;
    }
  }
`;

export default StatusBasedAlert;
