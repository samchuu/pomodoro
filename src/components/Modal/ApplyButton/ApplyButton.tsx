import { type Theme, themeClassMap } from "../../../config/theme"

interface ApplyButtonProps {
  tempThemeColor: Theme
}

export default function ApplyButton({ tempThemeColor }: ApplyButtonProps) {
  return (
    <button
      type="submit"
      style={{ backgroundColor: `var(--${themeClassMap[tempThemeColor]})` }}
      className={`absolute left-1/2 -bottom-13 -translate-x-1/2 -translate-y-1/2 font-bold text-base rounded-[26.5px] cursor-pointer px-12 py-4 mt-8 text-[#161932] hover:brightness-95 transition-all duration-300`}
    >
      Apply
    </button>
  )
}
