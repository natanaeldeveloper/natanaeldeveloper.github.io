import CIcon from '@coreui/icons-react'
import {
  cibLaravel,
  cibMysql,
  cibPostgresql,
  cibJavascript,
  cibCss3,
  cibHtml5,
  cibFigma,
  cibGit,
  cibJira,
  cibBootstrap,
  cibJquery,
  cibTypescript,
} from '@coreui/icons'

import {
  Container,
  Content,
  Photo,
  HardSkillIconCss,
  HardSkillItem,
  HardSkillsBox,
  HardSkillsContainer,
  HardSkillsItems,
  Text
} from "./style"

import photoImg from '../../../assets/photo.jpeg'
import { Tooltip } from 'antd'

const AboutMe: React.FC = () => {

  const skills = [
    {
      name: "Laravel",
      element: cibLaravel,
      color: "#f44336",
    },
    {
      name: "HTML5",
      element: cibHtml5,
      color: "#FF8C00",

    },
    {
      name: "CSS3",
      element: cibCss3,
      color: "#00BFFF"
    },
    {
      name: "Bootstrap",
      element: cibBootstrap,
      color: "#900CF7",
    },
    {
      name: "JavaScript",
      element: cibJavascript,
      color: "#FFD700",
      fill: "#212121",
    },
    {
      name: "JQuery",
      element: cibJquery,
      color: "#1A62AB",
    },
    {
      name: "GIT",
      element: cibGit,
      color: "#F75B0C",
    },
    {
      name: "MySQL",
      element: cibMysql,
      color: "#1A62AB",
    },
    {
      name: "PostgreSQL",
      element: cibPostgresql,
      color: "#1A62AB",
    },
    {
      name: "Figma",
      element: cibFigma,
      color: "#9C52DA",
    },
    {
      name: "Jira",
      element: cibJira,
      color: "#1F31E5",
    },
  ]

  return (
    <Container id='aboutMe'>
      <Photo src={photoImg} />
      <Content>
        <Text>
          <h1>Quem sou</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque mauris libero, rutrum in dictum ac, vestibulum quis ante.
            Suspendisse sed porttitor purus, non condimentum metus.
            Quisque ut eleifend sapien, sed lobortis nulla.
            In hac habitasse platea dictumst.</p>
        </Text>
        <HardSkillsContainer>
          <HardSkillsBox>
            <span>Principais Tecnologias</span>
            <HardSkillsItems>
              {skills.map(skill => (
                <HardSkillItem>
                  <Tooltip title={skill.name}>
                    <CIcon icon={skill.element} className={HardSkillIconCss({
                      css: {
                        '&:hover': {
                          backgroundColor: "$primary",
                          fill: "white",
                        }
                      }
                    })} />
                  </Tooltip>
                </HardSkillItem>
              ))}
            </HardSkillsItems>
          </HardSkillsBox>
        </HardSkillsContainer>
      </Content>
    </Container>
  )
}

export default AboutMe