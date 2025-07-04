import type { DurationType } from "../../../config/defaultDurations"
import { formatMinutesOnly } from "../../../utils/formatTime"
import { modeLabels } from "../../../config/modeLabels"
import type { Tabs } from "../../../types/tabs"

interface ModeProps {
  mode: Tabs
  value: number
  setTempDurations: React.Dispatch<React.SetStateAction<DurationType>>
}

export default function Mode({ mode, value, setTempDurations }: ModeProps) {
  const handleIncrement = () => {
    setTempDurations((prev) => (prev[mode] >= 60 ? { ...prev, [mode]: prev[mode] + 60 } : prev))
  }

  const handleDecrement = () => {
    setTempDurations((prev) => (prev[mode] > 60 ? { ...prev, [mode]: prev[mode] - 60 } : prev))
  }

  return (
    <div className="flex justify-between items-center md:flex-col md:items-start md:gap-2">
      <div className="opacity-40 text-[#1E213F] font-bold text-xs">{modeLabels[mode]}</div>
      <div className="flex items-center justify-between gap-2 bg-[#EFF1FA] w-[140px] h-[40px] rounded-lg px-4">
        <div className="font-bold text-sm">{formatMinutesOnly(value)}</div>
        <div className="flex flex-col items-center justify-center gap-2">
          <button type="button" onClick={handleIncrement} className="cursor-pointer hover:text-[#1E213F] text-[#1E213F]/25 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7" viewBox="0 0 14 7" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 6l6-4 6 4" />
            </svg>
          </button>
          <button type="button" onClick={handleDecrement} className="cursor-pointer hover:text-[#1E213F] text-[#1E213F]/25 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7" viewBox="0 0 14 7" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 1l6 4 6-4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
