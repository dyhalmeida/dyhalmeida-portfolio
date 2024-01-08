import { ReactNode } from 'react'
import { Link } from 'react-scroll'
import { MotionLi } from '../Motion'

interface IItemNavigationProps {
  children?: ReactNode
  to: string
}
export const ItemNavigation = ({ to, children }: IItemNavigationProps) => {
  return (
    <MotionLi>
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
    </MotionLi>
  )
}
