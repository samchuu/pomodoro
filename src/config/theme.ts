export const themeClassMap = {
  primary: "color-primary",
  secondary: "color-secondary",
  tertiary: "color-tertiary",
} as const

export type Theme = keyof typeof themeClassMap
