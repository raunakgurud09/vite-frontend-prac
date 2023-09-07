import { motion } from "framer-motion";
import { X } from "lucide-react";
import { FRAMER_MOTION_CONTAINER, FRAMER_MOTION_ITEM } from "../../lib";
import Background from "../Background";

export default function Features() {
  return (
    <>
      <Background top={0} side={"left"} />
      <motion.div
        className="w-full grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        variants={FRAMER_MOTION_CONTAINER}
        initial="hidden"
        exit="exit"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}>
        {
          [...Array(6)].map(() => (
            <motion.div
              className="group flex relative flex-col items-center justify-end overflow-hidden w-full h-60 bg-white/[0.05] hover:bg-white/[0.065] hover:cursor-pointer hover:outline outline-1 outline-white/[0.3] rounded-lg transition-all duration-300"
              variants={FRAMER_MOTION_ITEM}
            >
              <div className='absolute -z-10 inset-0 rotate-0 space-y-4'>
                {
                  [...Array(20)].map((_, i) => (
                    <div key={i} className='border-t-[1px] border-white/[0.05] group-hover:border-emerald-500/[0.19]'></div>
                  ))
                }
              </div>
              <div className='absolute -z-10 inset-0 rotate-90 space-y-4'>
                {
                  [...Array(100)].map((_, i) => (
                    <div key={i} className='border-t-[1px] border-white/[0.05] group-hover:border-emerald-500/[0.19] '></div>
                  ))
                }
              </div>

              <div className='flex flex-col px-2 py-2'>
                <div className='flex w-full '>
                  <i className=''><X size={20} /></i>
                  <h4 className='text-sm'>supportive community</h4>
                </div>
                <p className='w-full text-xs pl-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </motion.div>
          ))
        }
      </motion.div>
    </>
  )
}
