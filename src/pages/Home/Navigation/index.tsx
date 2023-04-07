import { useEffect, useState } from 'react'
import { MenuOutlined } from '@ant-design/icons'

import {
  Brand,
  Container,
  Menu,
  MenuItem,
  MenuLink,
  MenuToggle
} from "./style"

const Navigation: React.FC = () => {

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
      <Brand>
        <h3>Portfólio</h3>
      </Brand>
      <MenuToggle onClick={onClickMenuToggle}><MenuOutlined /></MenuToggle>
      <Menu className={visible ? "--active" : ""}>
        <MenuItem>
          <MenuLink href="#">About Me</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Projects</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">About Me</MenuLink>
        </MenuItem>
      </Menu>
    </Container>
  )
}

export default Navigation