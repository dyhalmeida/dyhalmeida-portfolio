import { GithubIcon, LinkedinIcon, Motion, WhatsAppIcon } from '../../../libs'
import {
  itemVariantsTitles,
  itemsVariantsX,
} from '../../../utils/constants.animates'

export const SocialMedia = () => (
  <Motion.span
    className="center"
    variants={itemVariantsTitles}
    transition={{
      duration: 2,
    }}
  >
    <Motion.a
      href="https://wa.me/5571982212621"
      target="blank"
      variants={itemsVariantsX}
      transition={{
        duration: 4,
      }}
    >
      <WhatsAppIcon className="icon" />
    </Motion.a>
    <Motion.a
      href="https://www.linkedin.com/in/dyhalmeida/"
      target="blank"
      variants={itemsVariantsX}
      transition={{
        duration: 5,
      }}
    >
      <LinkedinIcon className="icon" />
    </Motion.a>
    <Motion.a
      href="https://github.com/dyhalmeida"
      target="blank"
      variants={itemsVariantsX}
      transition={{
        duration: 6,
      }}
    >
      <GithubIcon className="icon" />
    </Motion.a>
  </Motion.span>
)
