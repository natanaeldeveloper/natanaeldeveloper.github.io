import {
  cibReact,
  cibLaravel,
  cibMysql,
  cibPostgresql,
  cibJavascript,
  cibCss3,
  cibHtml5,
  cibAmazonAws,
  cibDocker,
  cibPython,
  cibJava,
  cibFigma,
  cibGit,

} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import {
  Container,
  Content,
  Photo,
  SkillItem,
  SkillsBox,
  SkillsContainer,
  SkillsItems,
  Text
} from "./style"

import photoImg from '../../../assets/photo.jpeg'
import { Tooltip } from 'antd'

const AboutMe: React.FC = () => {

  const skills = [
    {
      type: "Tecnologias",
      skills: [
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
          name: "Javascript",
          element: cibJavascript,
          color: "#FFD700",
        },
        {
          name: "MySQL",
          element: cibMysql,
          color: "#6495ED",
        },
        {
          name: "PostgreSQL",
          element: cibPostgresql,
          color: "#6495ED",
        },
      ]
    },
  ]

  return (
    <Container>
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
        <SkillsContainer>
          {skills.map(item => (
            <SkillsBox>
              <span>{item.type}</span>
              <SkillsItems>
                {item.skills.map(skill => (
                  <SkillItem>
                    <Tooltip title={skill.name}>
                      <CIcon icon={skill.element} />
                    </Tooltip>
                  </SkillItem> 
                ))}
              </SkillsItems>
            </SkillsBox>
          ))}
        </SkillsContainer>
      </Content>
    </Container>
  )
}

export default AboutMe