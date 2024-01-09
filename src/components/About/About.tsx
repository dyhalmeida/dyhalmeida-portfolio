import { ArrowLineDownLightIcon, Motion } from '../../libs'
import {
  containerVariants,
  itemsVariantsX,
} from '../../utils/constants.animates'
import { Container } from './About.styles'
import profilePhoto from '../../assets/img/profile.png'
import cvPdf from '../../assets/cv/cv-diego-almeida.pdf'

export const About = () => {
  return (
    <Container id="about">
      <Motion.div
        className="grid-layout"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
      >
        <div>
          <div className="wrapper-left">
            <Motion.img
              variants={itemsVariantsX}
              transition={{
                duration: 0.5,
              }}
              src={profilePhoto}
              alt="Imagem de perfil"
            />
          </div>
          <div className="wrapper-right">
            <Motion.h2
              variants={itemsVariantsX}
              transition={{
                duration: 0.5,
              }}
            >
              Sobre mim
            </Motion.h2>
            <div>
              <Motion.p
                variants={itemsVariantsX}
                transition={{
                  duration: 0.5,
                }}
              >
                Sou um profissional com 5+ anos de experiência, atuei
                inicialmente como back-end e fullstack, mas nos últimos anos
                tenho focado no desenvolvimento front-end e seu ecossistema
                JavaScript.
              </Motion.p>
              <Motion.p
                variants={itemsVariantsX}
                transition={{
                  duration: 0.5,
                }}
              >
                As minhas principais forças são: persistência, comprometimento,
                aprendizagem rápida, empatia, bom ouvinte e ótimo relacionamento
                em equipe. Estou constantemente em busca de novos aprendizados e
                oportunidades para crescer e aprimorar minhas habilidades.
              </Motion.p>
            </div>
            <Motion.span
              variants={itemsVariantsX}
              transition={{
                duration: 1,
              }}
            >
              <a href={cvPdf} download="cv-diego-almeida.pdf">
                <ArrowLineDownLightIcon size={15} />
                Download CV
              </a>
            </Motion.span>
          </div>
        </div>
      </Motion.div>
    </Container>
  )
}
