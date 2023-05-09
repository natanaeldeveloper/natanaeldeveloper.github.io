import { WhatsAppOutlined, MenuOutlined } from "@ant-design/icons"

import {
  Brand,
  ContactButton,
  Container,
  Menu,
  MenuItem,
  MenuLink,
  MenuToggle,
  Navbar,
  Text
} from "./style"

import { useEffect, useState } from "react"

const Header: React.FC = () => {

  const [visible, setVisible] = useState(true)

  function onClickMenuToggle() {
    setVisible(!visible)
  }

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      if (window.innerWidth < 768 && visible) {
        setVisible(false)
      } else if (window.innerWidth >= 768 && !visible) {
        setVisible(true)
      }
    })
  })

  return (
    <Container>
      <Navbar>
        <Brand>
          <h3>Portfólio</h3>
        </Brand>
        <MenuToggle onClick={onClickMenuToggle}><MenuOutlined /></MenuToggle>
        <Menu className={visible ? "--active" : ""}>
          <MenuItem>
            <MenuLink href="#aboutMe">Quem sou</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#projects">Projetos</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#experiences">Experiências</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#contact">Redes Sociais</MenuLink>
          </MenuItem>
        </Menu>
      </Navbar>
      <Text>
        <h1>Natanael Oliveira</h1>
        <h2>Desenvolvedor Web | Full-Stack</h2>

        <ContactButton href="https://api.whatsapp.com/send?phone=85994361023" target="_blank">
          <WhatsAppOutlined />&nbsp;&nbsp;<span>Entrar em contato</span>
        </ContactButton>
      </Text>
    </Container>
  )
}

export default Header