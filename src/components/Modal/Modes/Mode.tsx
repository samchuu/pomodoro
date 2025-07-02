import type { DurationType } from "../../../config/defaultDurations"
import { formatMinutesOnly } from "../../../utils/formatTime"
import increment from "../../../assets/icon-arrow-up.svg"
import decrement from "../../../assets/icon-arrow-down.svg"

interface ModeProps {
  mode: keyof DurationType
  value: number
  setTempDurations: React.Dispatch<React.SetStateAction<DurationType>>
}

export default function Mode({ mode, value, setTempDurations }: ModeProps) {
  const handleIncrement = () => {
    setTempDurations((prev) => (prev[mode] > 60 ? { ...prev, [mode]: prev[mode] + 60 } : prev))
  }

  const handleDecrement = () => {
    setTempDurations((prev) => (prev[mode] > 60 ? { ...prev, [mode]: prev[mode] - 60 } : prev))
  }
  return (
    <div className="flex justify-between items-center md:flex-col md:items-start md:gap-2">
      <div className="opacity-40 text-[#1E213F] font-bold text-xs">{mode}</div>
      <div className="flex items-center justify-between gap-2 bg-[#EFF1FA] w-[140px] h-[40px] rounded-lg px-4">
        <div className="font-bold text-sm">{formatMinutesOnly(value)}</div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={increment} alt="increment" className="cursor-pointer" onClick={handleIncrement} />
          <img src={decrement} alt="decrement" className="cursor-pointer" onClick={handleDecrement} />
        </div>
      </div>
    </div>
  )
}
