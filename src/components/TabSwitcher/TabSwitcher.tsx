import type { Tabs } from "../../types/tabs"

import { modeLabels } from "../../config/modeLabels"
import { type Theme, themeClassMap } from "../../config/theme"

interface TabSwitcherProps {
  selectedTheme: Theme
  activeTab: Tabs
  setActiveTab: React.Dispatch<React.SetStateAction<Tabs>>
}

export default function TabSwitcher({ activeTab, selectedTheme, setActiveTab }: TabSwitcherProps) {
  const modeLabelEntries = Object.entries(modeLabels) as [Tabs, string][]

  return (
    <div className="flex justify-center mt-10 md:mt-14 bg-[#161932] py-2.5 px-2.5 rounded-4xl w-[calc(100%-48px)] h-[63px] max-w-[373px]">
      {modeLabelEntries.map(([mode, value]) => {
        return (
          <button
            key={value}
            onClick={() => setActiveTab(mode)}
            style={{ backgroundColor: activeTab === mode ? `var(--${themeClassMap[selectedTheme]})` : undefined }}
            className={`font-bold text-xs sm:text-sm rounded-3xl cursor-pointer flex-1
            ${activeTab === mode ? "text-[#1E213F]" : "text-[#D7E0FF] opacity-40"}`}
          >
            {value}
          </button>
        )
      })}
    </div>
  )
}
