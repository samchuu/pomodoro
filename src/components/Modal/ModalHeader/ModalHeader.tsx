import close from "../../../assets/icon-close.svg"

interface ModalHeaderProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ModalHeader({ setShowModal }: ModalHeaderProps) {
  return (
    <div className="flex justify-between items-center p-6 border-b-1 border-[#E3E1E1] text-[#161932]">
      <div className="font-bold text-xl">Settings</div>
      <img src={close} alt="close" className="cursor-pointer" onClick={() => setShowModal(false)} />
    </div>
  )
}
