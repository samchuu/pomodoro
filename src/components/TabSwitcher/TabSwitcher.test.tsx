import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import TabSwitcher from "./TabSwitcher"
import { modeLabels } from "../../config/modeLabels"
import { themeClassMap, type Theme } from "../../config/theme"
import type { Tabs } from "../../types/tabs"

describe("<TabSwitcher />", () => {
  it("renders all tab labels", () => {
    render(<TabSwitcher activeTab="pomodoro" selectedTheme="primary" setActiveTab={vi.fn()} />)

    Object.values(modeLabels).forEach((label) => {
      expect(screen.getByRole("button", { name: label })).toBeInTheDocument()
    })
  })

  it("highlights the active tab with correct text color", () => {
    render(<TabSwitcher activeTab="shortBreak" selectedTheme="primary" setActiveTab={vi.fn()} />)

    const button = screen.getByRole("button", { name: modeLabels.shortBreak })
    expect(button).toHaveClass("text-[#1E213F]")
  })

  it("applies correct background color", () => {
    const theme: Theme = "tertiary"
    const tab: Tabs = "longBreak"

    render(<TabSwitcher activeTab={tab} selectedTheme={theme} setActiveTab={vi.fn()} />)

    const button = screen.getByRole("button", { name: modeLabels.longBreak })
    expect(button).toHaveStyle({ backgroundColor: `var(--${themeClassMap[theme]})` })
  })

  it("calls setActiveTab on click", () => {
    const setActiveTab = vi.fn()

    render(<TabSwitcher activeTab="pomodoro" selectedTheme="primary" setActiveTab={setActiveTab} />)

    const button = screen.getByRole("button", { name: modeLabels.shortBreak })
    fireEvent.click(button)
    expect(setActiveTab).toHaveBeenCalledWith("shortBreak")
  })
})
