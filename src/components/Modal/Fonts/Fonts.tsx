import { type FontFamily } from "../../../config/fonts"
import Font from "./Font"

interface FontsProps {
  tempFont: FontFamily
  setTempFont: React.Dispatch<React.SetStateAction<FontFamily>>
}

export default function Fonts({ tempFont, setTempFont }: FontsProps) {
  const fonts: FontFamily[] = ["Kumbh Sans", "Roboto Slab", "Space Mono"]

  return (
    <div className="mt-6 px-6 md:px-10 text-[#161932]">
      <div className="border-t-1 border-[#E3E1E1] md:flex md:items-center md:justify-between md:pt-6">
        <div className="font-bold mt-6 mb-4 text-xs text-center md:text-left tracking-[4px]">FONT</div>
        <div className="flex gap-4 justify-center">
          {fonts.map((font) => {
            return <Font font={font} key={font} tempFont={tempFont} setTempFont={setTempFont} />
          })}
        </div>
      </div>
    </div>
  )
}
