import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { centerVariants } from '@/constants/motion'
function Sectiontitle({title,sub}) {
  return (
    <motion.div variants={centerVariants} initial="hidden" whileInView="visible" viewport={{once:true}} className='flex flex-col gap-y-3 text-center'>
        <p className='text-lg font-medium text-[#1465FF]'>{title}</p>
        <h3 className='text-[clamp(1.75rem,4vw,2.25rem)] leading-normal font-bold text-white'>{sub}</h3>
    </motion.div>
  )
}
Sectiontitle.propTypes={
    title:PropTypes.string,
    sub:PropTypes.string,

}
export default Sectiontitle