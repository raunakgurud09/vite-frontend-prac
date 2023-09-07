import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FRAMER_MOTION_UP_LATE, FRAMER_MOTION_UP } from "../../lib";
import Background from "../Background";

export default function Hero() {
  return (
    <div className="">
      <Background />
      <motion.div
        initial="hidden"
        animate="show"
        whileInView="show"
        exit="exit"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        viewport={{ once: true, amount: 0.25 }}
        className='my-60   max-w-3xl mx-auto flex flex-col text-center items-center justify-center'>

        <motion.div variants={FRAMER_MOTION_UP_LATE} className='group hover:cursor-pointer flex justify-center items-center px-2 py-2 border border-white/[0.1] rounded-full'>
          <div className='text-emerald-500 text-xs px-2 py-1 font-semibold rounded-full border-[1px] bg-emerald-400/10 border-emerald-600'>Explore</div>
          <p className='px-3'>Lorem, ipsum dolor</p>
          <div className='group-hover:pl-1 transition-all'><ArrowRight size={20} /></div>
        </motion.div>

        <motion.h3 variants={FRAMER_MOTION_UP} className='text-4xl sm:text-5xl md:text-6xl font-semibold font-sans my-4 uppercase'>
          style animation with  
          <span className='block selection:bg-emerald-700 selection:text-white bg-gradient-to-r from-emerald-300 via-emerald-900 to-emerald-300 bg-clip-text text-transparent'>framer motion</span>
        </motion.h3>
        <motion.p variants={FRAMER_MOTION_UP} className='text-sm'>Lorem ipsum dolor sit  rem, modi temporibus. Doloribus tempore et ullam voluptas alias iure libero dolorem perspiciatis tempora, nesciunt ad.</motion.p>
      </motion.div>
    </div>
  )
}
