import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { MenuMobile } from './components/MenuMobile'
import { Theme } from './components/Theme/Theme'
import { GlobalStyle } from './styles/global'

export const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <MenuMobile />
      <Header />
      <Home />
      <About />
      <Footer />
    </Theme>
  )
}
