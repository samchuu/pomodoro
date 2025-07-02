import type { Tabs } from "../../types/tabs"
import { themeClassMap, type Theme } from "../../types/theme"

interface TabSwitcherProps {
  selectedTheme: Theme
  activeTab: Tabs
  setActiveTab: React.Dispatch<React.SetStateAction<Tabs>>
}

interface TabOption {
  tab: Tabs
  label: string
}

export default function TabSwitcher({ activeTab, selectedTheme, setActiveTab }: TabSwitcherProps) {
  const tabs: TabOption[] = [
    { tab: "pomodoro", label: "pomodoro" },
    { tab: "shortBreak", label: "short break" },
    { tab: "longBreak", label: "long break" },
  ]

  return (
    <div className="flex justify-center mt-10 md:mt-14 bg-[#161932] py-2.5 px-2.5 rounded-4xl w-[calc(100%-48px)] h-[63px] max-w-[373px]">
      {tabs.map(({ tab, label }) => (
        <button
          key={label}
          onClick={() => setActiveTab(tab)}
          style={{ backgroundColor: activeTab === tab ? `var(--${themeClassMap[selectedTheme]})` : undefined }}
          className={`font-bold text-xs sm:text-sm rounded-3xl cursor-pointer flex-1
          ${activeTab === tab ? "text-[#1E213F]" : "text-[#D7E0FF] opacity-40"}`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
