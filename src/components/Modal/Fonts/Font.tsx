import { type FontFamily, fontFamilyClassMap } from "../../../config/fonts"

interface FontProps {
  font: FontFamily
  tempFont: FontFamily
  setTempFont: React.Dispatch<React.SetStateAction<FontFamily>>
}

export default function Font({ font, tempFont, setTempFont }: FontProps) {
  return (
    <div
      onClick={() => setTempFont(font)}
      className={`${fontFamilyClassMap[font]} 
      ${tempFont === font ? "bg-[#161932] text-white font-bold" : "bg-[#EFF1FA]"} 
      rounded-full cursor-pointer w-10 h-10 flex justify-center items-center text-sm`}
    >
      Aa
    </div>
  )
}
