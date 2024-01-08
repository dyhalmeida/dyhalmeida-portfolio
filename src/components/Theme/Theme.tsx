import { ReactNode } from 'react'
import { ThemeProvider } from '../../libs'

import * as theme from '../../styles/themes'

export const Theme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme.darkTheme}>{children}</ThemeProvider>
}
