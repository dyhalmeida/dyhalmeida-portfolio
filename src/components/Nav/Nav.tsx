import { motion as Motion } from 'framer-motion'
import { ItemNavigation } from '../ItemNavigation/ItemNavigation'

import { Container } from './Nav.styles'

import { containerVariantsNav } from '../../utils/constants.animates'
import { menus } from '../../utils/constants.menus'

export const Nav = () => {
  return (
    <Container>
      <Motion.ul
        variants={containerVariantsNav}
        initial="hidden"
        animate="visible"
      >
        {menus.map(({ id, to, title }) => (
          <ItemNavigation key={id} to={to}>
            {title}
          </ItemNavigation>
        ))}
      </Motion.ul>
    </Container>
  )
}
