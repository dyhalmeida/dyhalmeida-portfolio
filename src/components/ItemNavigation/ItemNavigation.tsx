import { ReactNode } from 'react'
import { Link, Motion } from '../../libs'

import { itemsVariantsX } from '../../utils/constants.animates'

interface IItemNavigationProps {
  children?: ReactNode
  to: string
  onClick?: () => void
}
export const ItemNavigation = ({
  to,
  children,
  onClick,
}: IItemNavigationProps) => {
  return (
    <Motion.li variants={itemsVariantsX} transition={{ duration: 1 }}>
      <Link
        activeClass="active"
        to={to}
        spy
        smooth
        offset={-70}
        duration={500}
        onClick={onClick}
      >
        {children}
      </Link>
    </Motion.li>
  )
}
