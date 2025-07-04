import { type Theme, themeClassMap } from "../../../config/theme"

interface ApplyButtonProps {
  tempThemeColor: Theme
  onClick: () => void
}

export default function ApplyButton({ onClick, tempThemeColor }: ApplyButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: `var(--${themeClassMap[tempThemeColor]})` }}
      className={`absolute left-1/2 -bottom-13 -translate-x-1/2 -translate-y-1/2 font-bold text-base rounded-[26.5px] cursor-pointer px-12 py-4 mt-8 text-[#161932] hover:brightness-95 transition-all duration-300`}
    >
      Apply
    </button>
  )
}
