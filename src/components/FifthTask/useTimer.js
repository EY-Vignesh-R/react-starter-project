import { useCallback, useEffect, useState } from "react";

const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const [time, setTime] = useState();
  const [limit, setLimit] = useState(0);
  const startTimer = useCallback((limit) => {
    setLimit(limit);
    setTime(
      setInterval(() => {
        setTimer((t) => t + 1);
      }, 1000)
    );
  }, []);
  useEffect(() => {
    if (timer >= limit) {
      return clearInterval(time);
    }
  }, [limit, timer, time]);
  return { timer, startTimer };
};

export default useTimer;
