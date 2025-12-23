export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: ["React.js", "Next.js", "TailwindCSS", "Storybook"],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "NestJS", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools & Cloud",
    icon: "cloud",
    skills: ["Git", "AWS Services", "Jest", "Figma", "VSCode"],
  },
];

export const softSkills = [
  "English Communication",
  "Task Management",
  "Team Collaboration",
  "Documentation",
  "Problem Solving",
];
