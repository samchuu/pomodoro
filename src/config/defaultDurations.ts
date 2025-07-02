import type { Tabs } from "../types/tabs"

export type DurationType = Record<Tabs, number>

export const DEFAULT_DURATIONS: DurationType = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
}
