import { Header } from './components/Header'
import { Theme } from './components/Theme/Theme'
import { GlobalStyle } from './styles/global'

export const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Header />
    </Theme>
  )
}
