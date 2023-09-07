import { ReactNode, useState } from "react"


export default function ToolTip({ text, children }: { text: string, children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >

      {children}
      {isVisible && <div className="absolute top-0 -translate-x-14 -translate-y-20 p-3 bg-black/30 border text-white rounded-md z-10 w-40">{text}</div>}
    </div>
  )
}
