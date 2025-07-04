import settings from "../../assets/icon-settings.svg"

interface SettingsProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Settings({ setShowModal }: SettingsProps) {
  return (
    <div className="mt-20 cursor-pointer hover:opacity-90 transition-all duration-200">
      <img src={settings} alt="settings" onClick={() => setShowModal(true)} />
    </div>
  )
}
