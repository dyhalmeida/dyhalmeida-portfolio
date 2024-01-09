import { Motion } from '../../../libs'
import { itemVariantsTitles } from '../../../utils/constants.animates'

export const Role = () => {
  return (
    <Motion.span
      className="center job"
      variants={itemVariantsTitles}
      transition={{
        duration: 2,
      }}
    >
      <div className="line"></div>
      <h2 className="job">Desenvolvedor Full Stack | Frontend</h2>
    </Motion.span>
  )
}
