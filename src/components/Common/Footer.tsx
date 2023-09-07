import { Hexagon } from "lucide-react";

const footer = [
  {
    heading: 'Socials',
    options: [
      {
        url: 'https://github.com/raunakgurud09',
        name: 'Github',
      },
      {
        url: 'https://instagram.com/raunak_gurud',
        name: 'Instagram',
      },
      {
        url: 'https://github.com/raunakgurud09',
        name: 'Linkedin',
      },
      {
        url: 'https://github.com/raunakgurud09',
        name: 'Twitter',
      },
      {
        url: 'raunakgurud2121@gmail.com',
        name: 'Mail',
      },
      {
        url: 'https://raunakgurud.hashnode.dev',
        name: 'Hashnode',
      },
    ],
  },

  {
    heading: 'Random',
    options: [
      {
        url: 'https://github.com/raunakgurud09',
        name: 'Source code',
      },
      {
        url: '/sitemap.xml',
        name: 'Sitemap',
      },
    ],
  },
]

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
        </div>
        <div className="flex space-x-5">
          {footer.map(({ heading, options }) => (
            <div className="w-fit" key={heading}>
              <h4 className="font-bold text-md py-[2px]">{heading}</h4>
              <ul className="text-xs">
                {options.map((option) => (
                  <a
                    href={option.url}
                    key={option.name}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-100 opacity-70 text-white/60 hover:text-white/80"
                    aria-label={option.name}
                  >
                    <li className="py-[2px]">{option.name}</li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
