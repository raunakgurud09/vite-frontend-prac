import { motion } from 'framer-motion'
import { textVariant2 } from '../motion'
import { FRAMER_MOTION_CONTAINER } from '../../lib'

export default function Demo() {
  return (
    <div className='h-screen'>
      <div
        className="flex flex-row justify-between" >
        <motion.div
          variants={FRAMER_MOTION_CONTAINER}
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
    </div>
  )
}
