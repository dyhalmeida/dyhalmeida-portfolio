import { ReactNode } from 'react'
import { Container } from './Button.styles'

export const Button = ({ children }: { children: ReactNode }) => (
  <Container>
    <button>{children}</button>
  </Container>
)
