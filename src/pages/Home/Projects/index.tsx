import { useEffect, useState } from "react"
import ProjectService, { Project } from "../../../services/ProjectService"
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Content,
  Tag,
  TagArea,
} from "./style"

const Projects = () => {
  const [projectList, setProjectList] = useState<Project[]>([]);

  async function handleProjects() {
    const projects = await ProjectService.findAll()
    setProjectList(projects)
  }

  useEffect(() => {
    handleProjects()
  }, [])

  return (
    <Container>
      <Content>
        {projectList.map((project, key) => (
          <Card key={key}>
            <CardHeader>
              <img src={project.banner_url} />
            </CardHeader>
            <CardBody>
              <h1>{project.name}</h1>
              <p>{project.description.slice(0, 100) + "..."}</p>
              <TagArea>
                {project.tags?.map((stack) => (
                  <Tag key={stack}>{stack}</Tag>
                ))}
              </TagArea>
            </CardBody>
          </Card>
        ))}
      </Content>
    </Container>
  )
}

export default Projects