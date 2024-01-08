import { ItemNavigation } from '../ItemNavigation/ItemNavigation'
import { MotionUl } from '../Motion'

import { Container } from './Nav.styles'

import { menus } from '../../utils/constants.menus'

export const Nav = () => {
  return (
    <Container>
      <MotionUl>
        {menus.map(({ id, to, title }) => (
          <ItemNavigation key={id} to={to}>
            {title}
          </ItemNavigation>
        ))}
      </MotionUl>
    </Container>
  )
}
