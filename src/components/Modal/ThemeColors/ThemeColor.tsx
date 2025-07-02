import check from "../../../assets/check.svg"
import { type Theme, themeClassMap } from "../../../config/theme"
interface ThemeColorProps {
  color: Theme
  tempThemeColor: Theme
  setTempThemeColor: React.Dispatch<React.SetStateAction<Theme>>
}

export default function ThemeColor({ color, tempThemeColor, setTempThemeColor }: ThemeColorProps) {
  return (
    <div
      onClick={() => setTempThemeColor(color)}
      style={{ backgroundColor: `var(--${themeClassMap[color]})` }}
      className={` rounded-full cursor-pointer w-10 h-10 flex justify-center items-center font-bold text-sm`}
    >
      {tempThemeColor === color && <img src={check} alt="check" />}
    </div>
  )
}
