import { ReactNode } from 'react'
import { motion as Motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { itemsVariantsX } from '../../utils/constants.animates'

interface IItemNavigationProps {
  children?: ReactNode
  to: string
}
export const ItemNavigation = ({ to, children }: IItemNavigationProps) => {
  return (
    <Motion.li variants={itemsVariantsX} transition={{ duration: 1 }}>
      <Link
        activeClass="active"
        to={to}
        spy
        smooth
        offset={-70}
        duration={500}
        onClick={() => {}}
      >
        {children}
      </Link>
    </Motion.li>
  )
}
