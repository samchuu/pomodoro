export const formatTime = (sec: number) => {
  const minutes = Math.floor(sec / 60)
    .toString()
    .padStart(2, "0")
  const seconds = (sec % 60).toString().padStart(2, "0")
  return `${minutes}:${seconds}`
}

export function formatMinutesOnly(seconds: number): string {
  return Math.floor(seconds / 60).toString()
}
