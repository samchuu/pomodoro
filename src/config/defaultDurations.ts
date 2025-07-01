export type DurationType = {
  pomodoro: number
  shortBreak: number
  longBreak: number
}

export const DEFAULT_DURATIONS = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
}
