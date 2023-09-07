import { motion } from "framer-motion"
import { useState } from "react"
import CopyToClip from "./CopyToClip"

export const Other = () => {
  const [click, setClick] = useState(false)
  const [value, setValue] = useState('')

  const handleClick = () => {
    console.log(value)
  }

  const handleChange = ({ target: { value } }: any) => {
    setValue(value)
  }


  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='grid gap-8 relative'>
        <div className='absolute right-1 top-1'>
          <CopyToClip data={value} />
        </div>
        <input
          type="textarea"
          onChange={handleChange}
          className='w-60 sm:w-96 h-20 rounded-md'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleClick()
            }
          }}
        />
        <button
          className='w-24 mx-auto items-center text-center'
          onClick={handleClick}
        >
          submit
        </button>
      </div>


      <div className='w-24'>
        <motion.div
          // initial={{ x: 50 }}
          initial={
            { opacity: 0.1 }
          }
          transition={{
            type: "tween",
            duration: 1
          }}
          animate={
            // click ? { opacity: 1 } : { opacity: 0.1 }
            { opacity: 1 }
          }
          onClick={() => setClick(!click)}
          className='px-8 py-4 rounded-md text-black font-semibold bg-white '>
          Hello
        </motion.div>
      </div>
    </div>
  )
}

