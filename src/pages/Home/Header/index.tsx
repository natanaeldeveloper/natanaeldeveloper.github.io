import { WhatsAppOutlined } from "@ant-design/icons"

import {
  ContactButton,
  Container,
  Text
} from "./style"

const Header: React.FC = () => {
  return (
    <Container>
      <Text>
        <h1>Natanael Oliveira</h1>
        <h2>Web Developer | Full-Stack</h2>
        <ContactButton>
          <WhatsAppOutlined />&nbsp;&nbsp;
          <span>Entrar em contato</span>
        </ContactButton>
      </Text>
    </Container>
  )
}

export default Header