import type { DurationType } from "../../config/defaultDurations"
import { useState } from "react"
import Modes from "./Modes/Modes"
import Fonts from "./Fonts/Fonts"
import ThemeColors from "./ThemeColors/ThemeColors"
import ModalHeader from "./ModalHeader/ModalHeader"
import ApplyButton from "./ApplyButton/ApplyButton"
import { fontFamilyClassMap, type FontFamily } from "../../config/fonts"
import type { Theme } from "../../config/theme"

interface ModalProps {
  duration: DurationType
  selectedFont: FontFamily
  selectedTheme: Theme
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  setDuration: React.Dispatch<React.SetStateAction<DurationType>>
  setSelectedFont: React.Dispatch<React.SetStateAction<FontFamily>>
  setSelectedTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export default function Modal({ duration, selectedFont, selectedTheme, setDuration, setShowModal, setSelectedFont, setSelectedTheme }: ModalProps) {
  const [tempDurations, setTempDurations] = useState(duration)
  const [tempFont, setTempFont] = useState<FontFamily>(selectedFont)
  const [tempThemeColor, setTempThemeColor] = useState<Theme>(selectedTheme)

  const handleApply = () => {
    setDuration(tempDurations)
    setSelectedFont(tempFont)
    setSelectedTheme(tempThemeColor)
    setShowModal(false)
  }

  return (
    <div
      className={`${fontFamilyClassMap[tempFont]} bg-white rounded-xl
      z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      w-[calc(100%-48px)] max-w-[327px] md:max-w-[540px] min-h-[575px] md:min-h-[464px]`}
    >
      <ModalHeader setShowModal={setShowModal} />
      <Modes tempDurations={tempDurations} setTempDurations={setTempDurations} />
      <Fonts tempFont={tempFont} setTempFont={setTempFont} />
      <ThemeColors tempThemeColor={tempThemeColor} setTempThemeColor={setTempThemeColor} />
      <ApplyButton tempThemeColor={tempThemeColor} onClick={handleApply} />
    </div>
  )
}
