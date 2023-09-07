import { Hexagon } from "lucide-react";

const navList = [
  {
    name: "Product",
    href: '#product'
  },
  {
    name: "Blog",
    href: '#blog'
  },
  {
    name: "Pricing",
    href: '#pricing'
  },
  {
    name: "Docs",
    href: '#docs'
  },
]


export default function Navbar() {
  return (
    <header className="select-none backdrop-blur sticky z-50 border-b border-white/[0.1] h-12 top-0 ">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-full">
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
              {
                navList.map((nav) => (
                  <li ><a className="text-white/60 hover:text-white/80 text-sm font-normal" href={nav.href}>{nav.name}</a></li>
                ))
              }
            </ul>
          </nav>
        </div>
        <div>
          <button className="px-2 py-[2px] rounded-md text-sm text-white/60 hover:text-white/80">Login</button>
        </div>
      </div>
    </header>
  )
}
