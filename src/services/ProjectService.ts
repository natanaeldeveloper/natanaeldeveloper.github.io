import api from "./api";

export type Project = {
  id: number;
  name: string;
  description: string;
  banner_url: string;
  github?: string;
  figma?: string;
  created_at?: string;
  demo?: string;
  readme?: string;
  tags: string[];
}

const ProjectService = {
  async findAll() {
    const response = await api.get<{ projects: Project[] }>("");
    return response.data.projects
  }
}

export default ProjectService