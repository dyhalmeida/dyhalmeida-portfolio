import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { MenuMobile } from './components/MenuMobile'
import { Skills } from './components/Skills'
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
      <Skills />
      <Contact />
      <Footer />
    </Theme>
  )
}
