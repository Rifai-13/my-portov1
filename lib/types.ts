export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

export type Skill = {
  name: string;
  level: string;
  categry: 'frontend' | 'backend' | 'devops' | 'design';
}