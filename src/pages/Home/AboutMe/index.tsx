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

} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import {
  Container,
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
      type: "Experiênte",
      skills: [
        {
          name: "Laravel",
          element: cibLaravel,
        },
        {
          name: "HTML5",
          element: cibHtml5,
        },
        {
          name: "CSS3",
          element: cibCss3,
        },
        {
          name: "Javascript",
          element: cibJavascript,
        },
        {
          name: "Figma",
          element: cibFigma,
        },
        {
          name: "MySQL",
          element: cibMysql,
        },
        {
          name: "PostgreSQL",
          element: cibPostgresql,
        },
      ]
    },
    {
      type: "Estudando",
      skills: [
        {
          name: "React",
          element: cibReact,
        },
      ]
    },
    {
      type: "Interesse",
      skills: [
        {
          name: "AWS",
          element: cibAmazonAws,
        },
        {
          name: "Docker",
          element: cibDocker,
        },
        {
          name: "Python",
          element: cibPython,
        },
      ]
    }
  ]

  return (
    <Container>
      <Photo src={photoImg} />
      <div>
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
      </div>
    </Container>
  )
}

export default AboutMe