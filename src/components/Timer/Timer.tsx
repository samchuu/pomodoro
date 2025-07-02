import useTimer from "../../hooks/useTimer"
import { themeClassMap, type Theme } from "../../types/theme"
import { formatTime } from "../../utils/formatTime"
import TimerControlButton from "./TimerControlButton"
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

interface TimerProps {
  selectedTheme: Theme
  duration: Record<string, number>
  activeTab: string
}

export default function Timer({ selectedTheme, duration, activeTab }: TimerProps) {
  const { seconds, isActive, startTimer, pauseTimer, resetTimer } = useTimer(duration, activeTab)

  const totalTime = duration[activeTab]
  const progressValue = (seconds / totalTime) * 100

  let name, onClick

  switch (true) {
    case seconds === 0:
      name = "Restart"
      onClick = resetTimer
      break
    case isActive === true:
      name = "Pause"
      onClick = pauseTimer
      break
    default:
      name = "Start"
      onClick = startTimer
      break
  }

  return (
    <div className="px-9 mt-14">
      <div
        className="rounded-full p-5 md:w-[410px]"
        style={{ background: "linear-gradient(315deg, #2e325a 0%, #0e112a 100%)", boxShadow: "-50px -50px 100px #272c5a, 50px 50px 100px #121530" }}
      >
        <CircularProgressbarWithChildren
          value={progressValue}
          background
          backgroundPadding={4}
          strokeWidth={4}
          styles={buildStyles({
            pathColor: `var(--${themeClassMap[selectedTheme]})`,
            trailColor: "transparent",
            backgroundColor: "#161932",
          })}
        >
          <p className="text-[#D7E0FF] max-[375px]:text-[60px] text-[74px] md:text-[100px] font-bold tracking-[-4px] md:tracking-[-5px]">
            {formatTime(seconds)}
          </p>
          <TimerControlButton name={name} onClick={onClick} />
        </CircularProgressbarWithChildren>
      </div>
    </div>
  )
}
