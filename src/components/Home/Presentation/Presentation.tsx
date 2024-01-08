import TypeIt from 'typeit-react'
import { Motion } from '../../../libs'
import { itemVariantsTitles } from '../../../utils/constants.animates'

export const Presentation = () => (
  <h1>
    <Motion.span
      className="welcome"
      variants={itemVariantsTitles}
      transition={{
        duration: 2,
      }}
    >
      Olá, bem vindo(a)! sou o
    </Motion.span>
    <span className="center">
      <span className="name">
        <TypeIt
          options={{
            strings: ['Diego Almeida'],
            speed: 150,
            waitUntilVisible: true,
          }}
        ></TypeIt>
      </span>
    </span>
  </h1>
)
