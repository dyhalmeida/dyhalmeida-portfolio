import { Motion } from '../../libs'
import { Role } from './Role'
import { SocialMedia } from './SocialMedia'
import { Presentation } from './Presentation'

import { Container } from './Home.styles'
import { containerVariants } from '../../utils/constants.animates'

export const Home = () => {
  return (
    <Container id="home">
      <Motion.div
        className="grid-layout"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{
          once: true,
        }}
      >
        <Presentation />
        <SocialMedia />
        <Role />
      </Motion.div>
    </Container>
  )
}
