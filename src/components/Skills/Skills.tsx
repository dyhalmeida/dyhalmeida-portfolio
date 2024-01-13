import { Motion } from '../../libs'
import {
  containerVariants,
  itemVariantsTitles,
  itemsVariantsY,
} from '../../utils/constants.animates'
import { skills } from '../../utils/skills.constants'
import { Container } from './Skills.styles'

export const Skills = () => (
  <Container id="skills">
    <div className="grid-layout">
      <Motion.div
        className="title"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
      >
        <Motion.h2 variants={itemVariantsTitles}>Competências</Motion.h2>
        <Motion.p variants={itemVariantsTitles}>
          Algumas das minhas competências
        </Motion.p>
      </Motion.div>
      <div className="show-skills">
        {skills.map((skill) => (
          <Motion.div
            key={skill.id}
            variants={itemsVariantsY}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </Motion.div>
        ))}
      </div>
    </div>
  </Container>
)
