import { Link } from 'react-scroll'
import { RiMenu3Fill as MenuMobileIcon } from 'react-icons/ri'
import { Nav } from '../Nav'

import { Container } from './Header.styles'

export const Header = () => {
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
              onClick={() => {}}
            >
              <h1>{myName}</h1>
            </Link>
            <Nav />
          </div>
          <div className="container-menu-mobile">
            <MenuMobileIcon className="mobile" size={35} onClick={() => {}} />
          </div>
        </div>
      </section>
    </Container>
  )
}
