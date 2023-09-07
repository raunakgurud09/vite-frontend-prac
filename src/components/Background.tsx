
interface Props {
  top?: number
  side?: string
}
export default function Background({ top = 80, side = "right" }: Props) {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0">
        <div className={`absolute ${side}-8 top-${top} -z-10 overflow-visible opacity-20`}>
          <div className="circle-1 -z-10 h-[400px] w-[700px] rounded-full bg-purple-700  mix-blend-multiply blur-[128px]" />
        </div>
      </div>
    </div>
  )
}
