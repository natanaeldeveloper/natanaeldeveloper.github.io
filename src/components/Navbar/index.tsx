import { Container, MenuButton, Nav, NavItem } from "./style"
import { MenuOutlined } from '@ant-design/icons'
import { useEffect, useMemo, useState } from "react"

const Navbar: React.FC = () => {

  const [visibled, setVisibled] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setWidth(window.innerWidth)
    })
  }, [])

  useEffect(() => {

    if (width > 768) {
      setVisibled(true)
    }

  }, [width])

  return (
    <Container>
      <MenuButton onClick={() => { setVisibled(!visibled) }}>
        <MenuOutlined />
      </MenuButton>
      <Nav visibled={visibled}>
        <NavItem><a href="#">Sobre</a></NavItem>
        <NavItem><a href="#">Soft Skills</a></NavItem>
        <NavItem><a href="#">Meu projetos</a></NavItem>
        <NavItem><a href="#timeline">Carreira</a></NavItem>
        <NavItem><a href="#">Contato</a></NavItem>
      </Nav>
    </Container>
  )
}

export default Navbar