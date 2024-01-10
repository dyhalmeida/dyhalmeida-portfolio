import { useEffect } from 'react'
import { useApp } from '../../zustore'
import { ItemNavigation } from '../ItemNavigation'

import { Container } from './MenuMobile.styles'
import { menus } from '../../utils/constants.menus'

export const MenuMobile = () => {
  const isVisibleMenu = useApp((state) => state.isVisibleMenu)
  const setIsVisibleMenu = useApp((state) => state.setIsVisibleMenu)

  useEffect(() => {
    document.body.style.overflowY = isVisibleMenu ? 'hidden' : 'auto'
  }, [isVisibleMenu])

  return (
    <Container isVisible={isVisibleMenu}>
      <nav>
        <ul>
          {menus.map(({ id, to, title }) => (
            <ItemNavigation
              key={id}
              to={to}
              onClick={() => setIsVisibleMenu(false)}
            >
              {title}
            </ItemNavigation>
          ))}
        </ul>
      </nav>
    </Container>
  )
}
