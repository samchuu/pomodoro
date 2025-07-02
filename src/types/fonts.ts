export const fontFamilyClassMap = {
  "Kumbh Sans": "font-kumbh-sans",
  "Roboto Slab": "font-roboto-slab",
  "Space Mono": "font-space-mono",
} as const

export type FontFamily = keyof typeof fontFamilyClassMap
