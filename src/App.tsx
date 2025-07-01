import { useState } from "react"
import "./App.css"
import TabSwitcher from "./components/TabSwitcher/TabSwitcher"
import Timer from "./components/Timer/Timer"
import type { Tab } from "./types/Tab"
import { DEFAULT_DURATIONS, type DurationType } from "./config/defaultDurations"
import Settings from "./components/Settings/Settings"
import Logo from "./components/Logo/Logo"
import Modal from "./components/Modal/Modal"
import { createPortal } from "react-dom"
import Overlay from "./components/Modal/Overlay"

function App() {
  const [activeTab, setActiveTab] = useState<Tab>("pomodoro")
  const [duration, setDuration] = useState<DurationType>(DEFAULT_DURATIONS)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="bg-[#1e213f] font-kumbh-sans">
      <div className="min-h-dvh flex flex-col justify-center items-center container mx-auto text-center pb-12 md:pb-14">
        <Logo />
        <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
        <Timer duration={duration} activeTab={activeTab} />
        <Settings setShowModal={setShowModal} />

        {showModal &&
          createPortal(
            <>
              <Overlay setShowModal={setShowModal} />
              <Modal duration={duration} setDuration={setDuration} setShowModal={setShowModal} />
            </>,
            document.body
          )}
      </div>
    </div>
  )
}

export default App
