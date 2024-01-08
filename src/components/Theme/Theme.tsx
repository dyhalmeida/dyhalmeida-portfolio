import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import * as theme from '../../styles/themes'

export const Theme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme.darkTheme}>{children}</ThemeProvider>
}
