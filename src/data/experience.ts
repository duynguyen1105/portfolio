export interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  logo: string;
  url: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Raksul Vietnam",
    title: "Software Engineer",
    startDate: "May 2023",
    endDate: "Present",
    logo: "/images/companies/raksul.png",
    url: "https://raksul.com/",
    description:
      "Working as a Software Engineer on the JOSYS SaaS product, handling both Front-end and Back-end development.",
    achievements: [
      "Integrated over 20 applications and improved the Node.js codebase",
      "Built the DDM (Device Data Management) project from scratch using NestJS",
      "Created scripts and extensions to improve team efficiency",
    ],
    technologies: ["Node.js", "NestJS", "TypeScript", "Jest", "AWS Services"],
  },
  {
    company: "Hello Health Group",
    title: "Frontend Developer",
    startDate: "Aug 2021",
    endDate: "Apr 2023",
    logo: "/images/companies/hhg.png",
    url: "https://hellohealthgroup.com/",
    description:
      "Developed key features for HelloBacsi Pro and worked with Next.js for server-side rendering across 10 platforms in 9 markets.",
    achievements: [
      "Built Booking doctor, TeleMedicine, and Widget for partners features",
      "Developed article features like Summary, Key Takeaways, and Care Recommendations",
      "Worked with SSR across 10 platforms in 9 markets",
    ],
    technologies: ["React.js", "TypeScript", "Next.js", "Jest", "Storybook"],
  },
  {
    company: "Lusso Enterprise",
    title: "Web Developer",
    startDate: "Oct 2020",
    endDate: "Aug 2021",
    logo: "/images/companies/lusso.png",
    url: "https://www.lussoenterprise.com/",
    description:
      "Worked as part of a 7-member Web-dev team building an E-commerce website.",
    achievements: [
      "Improved landing page UX and developed payment flow UI",
      "Built APIs for admin dashboard and product pages",
      "Integrated AWS S3 for file uploads",
    ],
    technologies: ["React.js", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    company: "Parcel Perform",
    title: "Frontend Developer Intern",
    startDate: "Aug 2020",
    endDate: "Oct 2020",
    logo: "/images/companies/parcel-perform.png",
    url: "https://www.parcelperform.com/",
    description:
      "Trained in React.js and contributed to the Frontend team during internship.",
    achievements: [
      "Developed features for internal tools",
      "Helped migrate Angular code to React.js",
    ],
    technologies: ["React.js", "TypeScript", "CSS Modules"],
  },
];
