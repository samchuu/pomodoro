interface OverlayProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Overlay({ setShowModal }: OverlayProps) {
  return <div style={{ background: "rgba(0,0,0,0.5)" }} className="fixed inset-0 z-10" onClick={() => setShowModal(false)} />
}
