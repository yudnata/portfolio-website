export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  category: 'Personal' | 'Web App' | 'Enterprise' | 'All';
  status: 'Completed' | 'In Progress' | 'Planned';
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  subtitle?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
  icon: string;
  achievements?: string[];
}

export interface ContactLink {
  id: string;
  platform: string;
  value: string;
  url: string;
  icon: string;
  color: string;
}

export interface DialogSegment {
  speaker: string;
  text: string;
}
