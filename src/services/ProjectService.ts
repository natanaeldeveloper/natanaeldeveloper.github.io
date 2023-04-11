import api from "./api";

export type Project = {
  id: number;
  name: string;
  description: string;
  banner_url: string;
  github?: string;
  demo?: string;
  readme?: string;
  skills: string[];
}

const ProjectService = {
  async findAll() {
    const response = await api.get<Project[]>("projects");
    return response.data
  }
}

export default ProjectService