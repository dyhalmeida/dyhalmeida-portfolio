import { Link } from 'react-scroll'
import { MenuMobileIcon } from '../../libs'
import { Nav } from '../Nav'
import { useApp } from '../../zustore'

import { Container } from './Header.styles'

export const Header = () => {
  const toggleIsVisibleMenu = useApp((state) => state.toggleIsVisibleMenu)

  const myName = '<BeSimple />'

  return (
    <Container>
      <section className="wrapper">
        <div>
          <div className="container-menu">
            <Link
              activeClass="active"
              to="main"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              <h1>{myName}</h1>
            </Link>
            <Nav />
          </div>
          <div className="container-menu-mobile">
            <MenuMobileIcon
              className="mobile"
              size={35}
              onClick={() => toggleIsVisibleMenu()}
            />
          </div>
        </div>
      </section>
    </Container>
  )
}
