import { useState } from "react"
import { createPortal } from "react-dom"
import { DEFAULT_DURATIONS, type DurationType } from "./config/defaultDurations"
import Logo from "./components/Logo/Logo"
import TabSwitcher from "./components/TabSwitcher/TabSwitcher"
import Timer from "./components/Timer/Timer"
import Settings from "./components/Settings/Settings"
import Modal from "./components/Modal/Modal"
import Overlay from "./components/Overlay/Overlay"
import "./App.css"
import type { Tabs } from "./types/tabs"
import { type FontFamily, fontFamilyClassMap } from "./config/fonts"
import type { Theme } from "./config/theme"

function App() {
  const [activeTab, setActiveTab] = useState<Tabs>("pomodoro")
  const [duration, setDuration] = useState<DurationType>(DEFAULT_DURATIONS)
  const [showModal, setShowModal] = useState(false)
  const [selectedFont, setSelectedFont] = useState<FontFamily>("Kumbh Sans")
  const [selectedTheme, setSelectedTheme] = useState<Theme>("primary")

  return (
    <main className={`bg-[#1e213f] ${fontFamilyClassMap[selectedFont]}`}>
      <div className="min-h-dvh flex flex-col justify-center items-center container mx-auto text-center pt-8 pb-12 md:pb-14">
        <Logo />
        <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} selectedTheme={selectedTheme} />
        <Timer duration={duration} selectedTheme={selectedTheme} activeTab={activeTab} />
        <Settings setShowModal={setShowModal} />

        {showModal &&
          createPortal(
            <>
              <Overlay setShowModal={setShowModal} />
              <Modal
                duration={duration}
                selectedFont={selectedFont}
                selectedTheme={selectedTheme}
                setDuration={setDuration}
                setShowModal={setShowModal}
                setSelectedFont={setSelectedFont}
                setSelectedTheme={setSelectedTheme}
              />
            </>,
            document.body
          )}
      </div>
    </main>
  )
}

export default App
