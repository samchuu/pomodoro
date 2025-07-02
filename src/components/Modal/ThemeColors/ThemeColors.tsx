import type { Theme } from "../../../config/theme"
import ThemeColor from "./ThemeColor"

interface ThemeColorsProps {
  tempThemeColor: Theme
  setTempThemeColor: React.Dispatch<React.SetStateAction<Theme>>
}

export default function ThemeColors({ tempThemeColor, setTempThemeColor }: ThemeColorsProps) {
  const colors: Theme[] = ["primary", "secondary", "tertiary"]

  return (
    <div className="mt-6 px-6 md:px-10 text-[#161932]">
      <div className="border-t-1 border-[#E3E1E1] md:flex md:items-center md:justify-between md:pt-6">
        <div className="font-bold mt-6 mb-4 text-xs text-center md:text-left tracking-[4px]">COLOR</div>
        <div className="flex gap-4 justify-center">
          {colors.map((color) => (
            <ThemeColor key={color} color={color} tempThemeColor={tempThemeColor} setTempThemeColor={setTempThemeColor} />
          ))}
        </div>
      </div>
    </div>
  )
}
