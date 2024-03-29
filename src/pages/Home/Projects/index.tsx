import { useEffect, useState } from "react"
import { GithubFilled } from "@ant-design/icons"
import { cilExternalLink } from "@coreui/icons"
import CIcon from "@coreui/icons-react"
import figmaSvg from "../../../assets/figma.svg"

import ProjectService, { Project } from "../../../services/ProjectService"
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Content,
  FigmaLink,
  FooterButtons,
  GithubLink,
  ReadmeLink,
  Tag,
  TagArea,
  Title,
} from "./style"

const Projects = () => {
  const [projectList, setProjectList] = useState<Project[]>([]);

  async function handleProjects() {
    const projects = await ProjectService.findAll()
    setProjectList(projects.reverse())
  }

  useEffect(() => {
    handleProjects()
  }, [])

  return (
    <Container id="projects">
      <Title>PROJETOS</Title>
      <Content>
        {projectList.map((project, key) => (
          <Card key={key}>
            <CardHeader>
              <img src={'posts/' + project.images[0]} />
            </CardHeader>
            <CardBody>
              <h1>{project.name}</h1>
              <p>{project.description.length < 200 ? project.description.slice(0, 200) : project.description.slice(0, 200) + "..."}</p>
              <TagArea>
                {project.tags?.map((stack, key2) => (
                  <Tag key={key2} title={stack}>{stack}</Tag>
                ))}
              </TagArea>
            </CardBody>
            <CardFooter>
              <FooterButtons>
                {project.github && <GithubLink href={project.github} target="_blank"><GithubFilled /></GithubLink>}
                {project.figma && <FigmaLink href={project.figma} target="_blank"><img src={figmaSvg} /></FigmaLink>}
                {project.demo && <ReadmeLink href={project.demo} target="_blank"><CIcon icon={cilExternalLink} /></ReadmeLink>}
              </FooterButtons>
              {project.created_at && <span>{project.created_at}</span>}
            </CardFooter>
          </Card>
        ))}
      </Content>
    </Container>
  )
}

export default Projects