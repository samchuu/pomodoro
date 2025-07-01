import type { DurationType } from "../../config/defaultDurations"
import close from "../../assets/icon-close.svg"
import Modes from "./Modes"
import { useState } from "react"

interface ModalProps {
  duration: DurationType
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  setDuration: React.Dispatch<React.SetStateAction<DurationType>>
}

export default function Modal({ duration, setDuration, setShowModal }: ModalProps) {
  const [tempDurations, setTempDurations] = useState(duration)

  const handleApply = () => {
    setDuration(tempDurations)
    setShowModal(false)
  }

  return (
    <div className="z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-kumbh-sans w-full max-w-[327px] min-h-[575px] md:max-w-[540px] md:min-h-[464px] bg-white rounded-xl">
      <div className="flex justify-between items-center p-6 border-b-1 border-[#E3E1E1]">
        <div className="font-bold text-xl">Settings</div>
        <img src={close} alt="close" className="cursor-pointer" onClick={() => setShowModal(false)} />
      </div>
      <div className="px-6 md:px-10">
        <div className="font-bold mt-6 mb-4 text-xs text-center md:text-left tracking-[4px]">TIME (MINUTES)</div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-center md:gap-5">
          {Object.entries(tempDurations).map(([mode, value]) => {
            return <Modes mode={mode as keyof DurationType} value={value} key={mode} setTempDurations={setTempDurations} />
          })}
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          className="absolute -bottom-13 -translate-x-1/2 -translate-y-1/2 bg-[#F87070] text-white font-bold text-base rounded-[26.5px] cursor-pointer px-12 py-4"
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </div>
  )
}
