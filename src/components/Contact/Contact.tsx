import { Motion } from '../../libs'
import {
  containerVariants,
  itemsVariantsX,
} from '../../utils/constants.animates'
import { contacts } from '../../utils/constants.contact'
import { Container } from './Contact.styles'

export const Contact = () => {
  return (
    <Container id="contact">
      <Motion.div
        className="grid-layout"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
      >
        <div className="title"></div>
        <div className="wrapper-primary">
          <Motion.div
            className="wrapper-right"
            variants={itemsVariantsX}
            transition={{
              duration: 1,
            }}
          >
            <div className="contactsLinks">
              {contacts.map((contact) => (
                <div key={contact.id}>
                  <a href={contact.link} target="blank">
                    <span className="img">{<contact.icon />}</span>
                    <span>
                      <h4>{contact.name}</h4>
                      <h4>{contact.description}</h4>
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </Motion.div>
        </div>
      </Motion.div>
    </Container>
  )
}
