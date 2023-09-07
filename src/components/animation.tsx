import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, textVariant2 } from "./motion.ts"
import { ArrowRight, X } from 'lucide-react';
import { FRAMER_MOTION_LIST_ITEM_VARIANTS, FRAMER_MOTION_UP, FRAMER_MOTION_UP_LATE } from '../lib/index.ts';

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: .2
    }
  }
}
const up = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: .4
    }
  }
}

const container = {
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const side = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeInOut',
      duration: .2
    }
  }
}

export default function Animation() {

  return (
    <div className='relative max-w-6xl mx-auto'>
      <div className="absolute top-0 left-0 right-0">
        <div className="absolute right-8 top-96 -z-10 overflow-visible opacity-20">
          <div className="circle-1 -z-10 h-[400px] w-[700px] rounded-full bg-purple-700  mix-blend-multiply blur-[128px]" />
        </div>
        <div className="absolute left-8 top-[1000px] -z-10 overflow-visible opacity-20">
          <div className="circle-1 -z-10 h-[400px] w-[700px] rounded-full bg-purple-700/70 mix-blend-multiply blur-[128px]" />
        </div>
      </div>
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
        className='h-screen max-w-3xl mx-auto flex flex-col text-center items-center justify-center'>

        <motion.div variants={FRAMER_MOTION_UP_LATE} className='group hover:cursor-pointer flex justify-center items-center px-2 py-2 border border-white/[0.1] rounded-full'>
          <div className='text-emerald-500 text-xs px-2 py-1 font-semibold rounded-full border-[1px] bg-emerald-400/10 border-emerald-600'>Explore</div>
          <p className='px-3'>Lorem, ipsum dolor</p>
          <div className='group-hover:pl-1 transition-all'><ArrowRight size={20} /></div>
        </motion.div>

        <motion.h3 variants={FRAMER_MOTION_UP} className='text-6xl font-semibold font-sans my-4 uppercase'>
          style animation with
          <span className='block selection:bg-emerald-700 selection:text-white bg-gradient-to-r from-emerald-300 via-emerald-900 to-emerald-300 bg-clip-text text-transparent'>framer motion</span>
        </motion.h3>
        <motion.p variants={FRAMER_MOTION_UP} className='text-sm'>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore excepturi ipsum cupiditate sunt fuga sapiente error natus recusandae corporis? consectetur adipisicing elit. Magnam sapiente sequi vel delectus nobis rem, modi temporibus. Doloribus tempore et ullam voluptas alias iure libero dolorem perspiciatis tempora, nesciunt ad.</motion.p>
      </motion.div>
      <div
        className="flex flex-row justify-between" >
        <motion.div
          variants={container}
          initial="hidden"
          exit="exit"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='w-[48%] rounded-md flex flex-col items-start justify-center'
        >
          <motion.h3
            variants={textVariant2}
            className='text-5xl'>This is a demo text</motion.h3>
          <motion.p
            variants={textVariant2}
            className='text-sm my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus velit minima consequatur accusamus error illum. Labore eos architecto nostrum nesciunt cupiditate repudiandae voluptatem quidem doloremque voluptate, omnis sit? Eligendi sed quibusdam quia maxime ipsum blanditiis quaerat animi quis quo facilis.</motion.p>
        </motion.div>
        <div
          className='w-[48%] h-80 bg-white/[0.03] border-[1px] border-white/[0.09] rounded-lg'
        >
          <div className='w-full border-b-[1px] border-white/[0.05] h-5 rounded-t-lg flex items-center space-x-1 px-2 py-2'>
            <div className="rounded-full w-2 h-2 bg-red-500"></div>
            <div className="rounded-full w-2 h-2 bg-yellow-500"></div>
            <div className="rounded-full w-2 h-2 bg-green-500"></div>
          </div>
          <div className='w-full h-fit  flex flex-row'>
            <div className='flex flex-col p-2 text-white/25 items-end justify-center'>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
              <p>11</p>
              <p>12</p>
            </div>
            <div className=''>

            </div>
          </div>

        </div>
      </div>
      <motion.div
        className="w-full my-20 grid items-center grid-cols-3 flex-wrap gap-4 justify-start"
        variants={container}
        initial="hidden"
        exit="exit"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}>
        {
          [...Array(6)].map(() => (
            <motion.div
              className="group flex relative flex-col items-center justify-end overflow-hidden w-full h-60 bg-white/[0.05] hover:bg-white/[0.065] hover:cursor-pointer hover:outline outline-1 outline-white/[0.3] rounded-lg transition-all duration-300"
              variants={item}
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

    </div>
  )
}
