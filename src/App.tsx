import { About } from './components/About'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Theme } from './components/Theme/Theme'
import { GlobalStyle } from './styles/global'

export const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Header />
      <Home />
      <About />
    </Theme>
  )
}
