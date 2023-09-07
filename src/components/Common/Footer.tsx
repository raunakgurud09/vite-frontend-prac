import { Hexagon } from "lucide-react";


export default function Footer() {
  return (
    <footer className="mt-40 border-t border-white/[0.1] h-80 ">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-start py-8 h-full">
        <div className="flex space-x-4">
          <a href="/" className="text-white/80 hover:text-white/90 relative h-full flex space-x-1">
            <div className="flex">
              <Hexagon />
              <span className="" >Hex.io</span>
            </div>
            <p className="text-[8px] absolute text-emerald-400 bottom-[-10px] right-0">Beta</p>
          </a>
          <nav className="h-full">
            <ul className="flex space-x-4 text-white/60 hover:text-white/80">
              
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
