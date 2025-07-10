import { render, screen, fireEvent } from "@testing-library/react"
import Timer from "./Timer"
import * as useTimerModule from "../../hooks/useTimer"
import { vi, describe, it, expect, afterEach } from "vitest"

const mockDuration = { pomodoro: 1500, shortBreak: 300, longBreak: 900 }

// Helper to mock useTimer
function setupUseTimer({
  seconds,
  isActive,
  startTimer,
  pauseTimer,
  resetTimer,
}: {
  seconds: number
  isActive: boolean
  startTimer?: () => void
  pauseTimer?: () => void
  resetTimer?: () => void
}) {
  vi.spyOn(useTimerModule, "default").mockReturnValue({
    seconds,
    isActive,
    startTimer: startTimer || vi.fn(),
    pauseTimer: pauseTimer || vi.fn(),
    resetTimer: resetTimer || vi.fn(),
  })
}

describe("Timer", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("shows 'Restart' and calls resetTimer when time is up", () => {
    const resetTimer = vi.fn()
    setupUseTimer({ seconds: 0, isActive: false, resetTimer })
    render(<Timer selectedTheme="primary" duration={mockDuration} activeTab="pomodoro" />)
    const button = screen.getByRole("button")
    expect(button).toHaveTextContent("Restart")
    fireEvent.click(button)
    expect(resetTimer).toHaveBeenCalled()
  })

  it("shows 'Pause' and calls pauseTimer when running", () => {
    const pauseTimer = vi.fn()
    setupUseTimer({ seconds: 1000, isActive: true, pauseTimer })
    render(<Timer selectedTheme="primary" duration={mockDuration} activeTab="pomodoro" />)
    const button = screen.getByRole("button")
    expect(button).toHaveTextContent("Pause")
    fireEvent.click(button)
    expect(pauseTimer).toHaveBeenCalled()
  })

  it("shows 'Start' and calls startTimer when paused", () => {
    const startTimer = vi.fn()
    setupUseTimer({ seconds: 1000, isActive: false, startTimer })
    render(<Timer selectedTheme="primary" duration={mockDuration} activeTab="pomodoro" />)
    const button = screen.getByRole("button")
    expect(button).toHaveTextContent("Start")
    fireEvent.click(button)
    expect(startTimer).toHaveBeenCalled()
  })

  it("displays time in MM:SS format", () => {
    setupUseTimer({ seconds: 65, isActive: false })
    render(<Timer selectedTheme="primary" duration={mockDuration} activeTab="pomodoro" />)
    expect(screen.getByText("01:05")).toBeInTheDocument()
  })

  it("displays 00:00 when seconds is 0", () => {
    setupUseTimer({ seconds: 0, isActive: false })
    render(<Timer selectedTheme="primary" duration={mockDuration} activeTab="pomodoro" />)
    expect(screen.getByText("00:00")).toBeInTheDocument()
  })
})
