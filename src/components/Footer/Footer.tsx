import { Container } from './Footer.styles'

export const Footer = () => (
  <Container>
    <p>
      Copyright © {new Date().getFullYear()} <span>Diego Almeida.</span> Todos
      os direitos reservados.
    </p>
  </Container>
)
