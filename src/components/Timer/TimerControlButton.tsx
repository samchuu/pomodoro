import type { TimerAction } from "./Timer"

interface TimerControlButtonProps {
  name: TimerAction
  onClick: () => void
}

export default function TimerControlButton({ name, onClick }: TimerControlButtonProps) {
  return (
    <button className="text-[#D7E0FF] text-base font-bold tracking-[10px] cursor-pointer uppercase" onClick={onClick}>
      {name}
    </button>
  )
}
