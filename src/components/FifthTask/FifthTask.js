import useTimer from "./useTimer";
import { useState } from "react";
const FifthTask = () => {
  let limit = 10;
  const { timer, startTimer } = useTimer();
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <h1>Timer Limit Upto : {limit}</h1>
      {display && <p>{timer}</p>}
      <button
        onClick={() => {
          startTimer(limit);
          setDisplay(true);
        }}
      >
        ShowTimer
      </button>
    </div>
  );
};
export default FifthTask;
