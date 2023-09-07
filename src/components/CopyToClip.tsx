import { useState } from "react"
import ToolTip from "./ToolTip"

export default function CopyToClip({ data }: { data: string }) {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    setCopied(true)
    navigator.clipboard.writeText(data).then(() => console.log('copied'), (err) => console.log(err))
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <ToolTip text="This will copy the code">
      <div onClick={handleClick} className="text-sm hover:cursor-copy">
        {
          copied ? <p>copied</p> : <p>copy</p>
        }
      </div>
    </ToolTip>
  )
}
