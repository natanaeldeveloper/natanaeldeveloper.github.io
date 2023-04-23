import { MailOutlined, GithubFilled, LinkedinFilled, InstagramFilled } from "@ant-design/icons"
import { Box, Container, Divider, NetworkArea, NetworkItem } from "./style"

const Footer: React.FC = () => {
  return (
    <Container id="contact">
      <Box>
        <a href="#"><MailOutlined /> natanaeloliveiramartinsbr@gmail.com</a>
        <NetworkArea>
          <NetworkItem target="_black" href="https://github.com/natanaeldeveloper"><GithubFilled /></NetworkItem>
          <NetworkItem target="_black" href="https://www.linkedin.com/in/natanael-oliveira-martins"><LinkedinFilled /></NetworkItem>
          <NetworkItem target="_black" href="https://www.instagram.com/neitan._/"><InstagramFilled /></NetworkItem>
        </NetworkArea>
      </Box>
      <Divider />
      <Box>
        <small>Developed by <b>Natanael Oliveira</b> ©</small>
      </Box>
    </Container>
  )
}

export default Footer