import { ReactNode } from 'react'
import { motion } from 'framer-motion'

import {
  containerVariantsNav,
  itemsVariantsX,
} from '../../utils/constants.animates'

interface IMotionElementProps {
  children: ReactNode
}

export const MotionLi = ({ children }: IMotionElementProps) => {
  return (
    <motion.li variants={itemsVariantsX} transition={{ duration: 1 }}>
      {children}
    </motion.li>
  )
}

export const MotionUl = ({ children }: IMotionElementProps) => {
  return (
    <motion.ul
      variants={containerVariantsNav}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.ul>
  )
}
