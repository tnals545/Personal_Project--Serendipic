import { useEffect, useRef } from "react";

interface IUseInterval {
  (callback: () => void, interval: number): void;
}

const useInterval: IUseInterval = (callback, interval) => {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    // 1초 delay 설정
    const wait = setTimeout(() => {
      let id = setInterval(tick, interval);
      return () => clearInterval(id);
    }, 1000);

    return () => clearTimeout(wait);
  }, [interval]);
};

export default useInterval;
