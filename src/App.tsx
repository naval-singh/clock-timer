import { FC, useState } from "react";
import Button from "./component/Button";

const App: FC = () => {
  const [timerId, setTimerId] = useState<number | undefined>(undefined);
  const [timer, setTimer] = useState<number>(0);

  const startTimer = () => {
    if (!timerId) {
      let id = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      setTimerId(id);
    }
  };

  const stopTimer = (action: "STOP" | "PAUSE") => {
    clearInterval(timerId);
    setTimerId(undefined);
    action === "STOP" && setTimer(0)
  };

  const formatAsTime = () => {
    let hours = 0
    let minutes = 0
    let seconds = 0
    if(timer > 59){
      minutes = Math.trunc(timer/60)
      seconds = timer%60
    }else{
      seconds = timer
    }
    if(minutes > 59){
      hours = Math.trunc(minutes/60)
      minutes = minutes%60
    }
    let HH = hours > 9 ? `${hours}` : `0${hours}`
    let MM = minutes > 9 ? `${minutes}` : `0${minutes}`
    let SS = seconds > 9 ? `${seconds}` : `0${seconds}`

    return `${HH}:${MM}:${SS}`
  }

  return (
    <div className="w-full h-lvh flex flex-col justify-center items-center">
      <div className="text-5xl font-medium">{formatAsTime()}</div>
      <div className="flex gap-5 mt-10">
        <Button 
          label={timer === 0 ? "Start" : !timerId ? "Resume" : "Pause"} 
          onClick={() => {
            if(timer === 0){
              startTimer()
            }else{
              if(!timerId){
                startTimer()
              }else{
                stopTimer("PAUSE")
              }
            }
          }}
        />
        <Button label="Reset" onClick={() => stopTimer("STOP")} />
      </div>
    </div>
  );
};

export default App;
