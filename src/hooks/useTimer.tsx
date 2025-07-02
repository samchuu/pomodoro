import { useEffect, useRef, useState } from "react"
import type { DurationType } from "../config/defaultDurations"
import type { Tabs } from "../types/tabs"

export default function useTimer(duration: DurationType, activeTab: Tabs) {
  const [seconds, setSeconds] = useState(duration[activeTab])
  const [isActive, setIsActive] = useState(false)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    pauseTimer()
    setSeconds(duration[activeTab])
  }, [duration, activeTab])

  useEffect(() => {
    return () => clearInterval(intervalRef.current!)
  }, [])

  const startTimer = () => {
    if (intervalRef.current !== null) return

    intervalRef.current = setInterval(() => {
      setSeconds((sec) => {
        if (sec <= 1) {
          clearInterval(intervalRef.current!)
          intervalRef.current = null
          setIsActive(false)
          return 0
        }
        return sec - 1
      })
    }, 1000)

    setIsActive(true)
  }

  const pauseTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIsActive(false)
  }

  const resetTimer = () => {
    pauseTimer()
    setSeconds(duration[activeTab])
    startTimer()
  }

  return {
    seconds,
    isActive,
    startTimer,
    pauseTimer,
    resetTimer,
  }
}
