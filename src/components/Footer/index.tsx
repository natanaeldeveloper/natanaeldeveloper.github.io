import { Container, ContactArea, CaptionArea, SocialMediaArea, BadgeSocialMedia, EmailArea } from "./style"
import { MailOutlined, LinkedinFilled, GithubFilled, InstagramFilled } from '@ant-design/icons'

const Footer = () => {
  return (
    <Container>
      <ContactArea>
        <EmailArea><MailOutlined /> <a>natanaeloliveiramartinsbr@gmail.com</a></EmailArea>
        <SocialMediaArea>
          <BadgeSocialMedia href="https://www.linkedin.com/in/natanael-oliveira-martins"><LinkedinFilled /></BadgeSocialMedia>
          <BadgeSocialMedia href="https://github.com/natanaeldeveloper"><GithubFilled /></BadgeSocialMedia>
          <BadgeSocialMedia href="https://www.instagram.com/neitan._"><InstagramFilled /></BadgeSocialMedia>
        </SocialMediaArea>
      </ContactArea>
      <CaptionArea>
        <span>Developed by <strong>Natanael Oliveira</strong> </span>
      </CaptionArea>
    </Container>
  )
}

export default Footer