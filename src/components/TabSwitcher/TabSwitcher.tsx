import type { Tab } from "../../types/Tab"

interface TabSwitcherProps {
  activeTab: Tab
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>
}

interface TabOption {
  tab: Tab
  label: string
}

export default function TabSwitcher({ activeTab, setActiveTab }: TabSwitcherProps) {
  const tabs: TabOption[] = [
    { tab: "pomodoro", label: "pomodoro" },
    { tab: "shortBreak", label: "short break" },
    { tab: "longBreak", label: "long break" },
  ]

  return (
    <div className="flex justify-center mt-10 md:mt-14 bg-[#161932] py-2.5 px-2.5 rounded-4xl w-[327px] h-[63px] md:w-[373px]">
      {tabs.map(({ tab, label }) => (
        <button
          key={label}
          onClick={() => setActiveTab(tab)}
          className={`font-bold text-xs sm:text-sm rounded-3xl cursor-pointer flex-1 
           ${activeTab === tab ? "bg-[#F87070] text-[#1E213F] p-3 flex justify-center items-center" : "text-[#D7E0FF] opacity-40"}`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
