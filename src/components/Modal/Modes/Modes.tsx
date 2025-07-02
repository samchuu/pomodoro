import type { DurationType } from "../../../config/defaultDurations"
import Mode from "./Mode"

interface ModesProps {
  tempDurations: DurationType
  setTempDurations: React.Dispatch<React.SetStateAction<DurationType>>
}

export default function Modes({ tempDurations, setTempDurations }: ModesProps) {
  return (
    <div className="px-6 md:px-10 text-[#161932]">
      <div className="font-bold mt-6 mb-4 text-xs text-center md:text-left tracking-[4px]">TIME (MINUTES)</div>
      <div className="flex flex-col gap-2 md:flex-row md:justify-center md:gap-5">
        {Object.entries(tempDurations).map(([mode, value]) => {
          return <Mode mode={mode as keyof DurationType} value={value} key={mode} setTempDurations={setTempDurations} />
        })}
      </div>
    </div>
  )
}
