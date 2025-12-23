module.exports=[41675,a=>{"use strict";let b=(0,a.i(70106).default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);a.s(["Calendar",()=>b],41675)},41710,50228,a=>{"use strict";let b=(0,a.i(70106).default)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);a.s(["Clock",()=>b],41710);let c=[{slug:"getting-started-with-nestjs",title:"Getting Started with NestJS: A Comprehensive Guide",description:"Learn how to build scalable server-side applications with NestJS, the progressive Node.js framework.",date:"2024-01-15",tags:["NestJS","Node.js","TypeScript","Backend"],content:`
# Getting Started with NestJS

NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

## Why NestJS?

- **TypeScript Support**: Built with TypeScript from the ground up
- **Modular Architecture**: Easy to organize and maintain large codebases
- **Dependency Injection**: Built-in DI container for better testability
- **Decorator-based**: Clean and expressive syntax

## Getting Started

\`\`\`bash
npm i -g @nestjs/cli
nest new project-name
\`\`\`

## Creating Your First Controller

\`\`\`typescript
import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
\`\`\`

Stay tuned for more tutorials on building real-world applications with NestJS!
    `},{slug:"react-performance-tips",title:"10 React Performance Optimization Tips",description:"Practical tips to improve your React application performance and provide a better user experience.",date:"2024-02-20",tags:["React","Performance","JavaScript","Frontend"],content:`
# 10 React Performance Optimization Tips

Performance is crucial for user experience. Here are some tips to optimize your React apps.

## 1. Use React.memo for Pure Components

\`\`\`tsx
const MyComponent = React.memo(({ data }) => {
  return <div>{data.name}</div>;
});
\`\`\`

## 2. Implement useMemo and useCallback

Use these hooks to prevent unnecessary re-computations and re-renders.

## 3. Virtualize Long Lists

Use libraries like react-window for rendering large lists efficiently.

## 4. Code Splitting with React.lazy

\`\`\`tsx
const LazyComponent = React.lazy(() => import('./HeavyComponent'));
\`\`\`

## 5. Optimize Images

Use next/image or similar tools for automatic image optimization.

These are just a few tips. Performance optimization is an ongoing process!
    `},{slug:"typescript-best-practices",title:"TypeScript Best Practices in 2024",description:"Essential TypeScript patterns and best practices for writing clean, maintainable code.",date:"2024-03-10",tags:["TypeScript","JavaScript","Best Practices"],content:`
# TypeScript Best Practices in 2024

TypeScript has become the standard for large-scale JavaScript applications. Here are some best practices.

## Use Strict Mode

Always enable strict mode in your tsconfig.json:

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

## Prefer Interfaces Over Types for Objects

\`\`\`typescript
// Prefer this
interface User {
  name: string;
  email: string;
}

// Over this (for object shapes)
type User = {
  name: string;
  email: string;
};
\`\`\`

## Use Discriminated Unions

\`\`\`typescript
type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };
\`\`\`

## Avoid 'any' Type

Use 'unknown' instead of 'any' when type is truly unknown.

Following these practices will help you write better TypeScript code!
    `}];function d(a){return c.find(b=>b.slug===a)}function e(){return c.sort((a,b)=>new Date(b.date).getTime()-new Date(a.date).getTime())}a.s(["getAllBlogPosts",()=>e,"getBlogPost",()=>d],50228)},17262,a=>{"use strict";var b=a.i(87924),c=a.i(46271),d=a.i(38246),e=a.i(41675),f=a.i(41710);let g=(0,a.i(70106).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);var h=a.i(50228);let i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},j={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}};function k(){let a=(0,h.getAllBlogPosts)();return(0,b.jsx)("div",{className:"min-h-screen pt-24 pb-16",children:(0,b.jsxs)("div",{className:"max-w-4xl mx-auto px-4",children:[(0,b.jsxs)(c.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-center mb-16",children:[(0,b.jsx)("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:"Blog"}),(0,b.jsx)("p",{className:"text-[var(--muted-foreground)] max-w-md mx-auto",children:"Thoughts, tutorials, and insights about web development and software engineering."})]}),(0,b.jsx)(c.motion.div,{variants:i,initial:"hidden",animate:"visible",className:"space-y-8",children:a.map(a=>(0,b.jsx)(c.motion.article,{variants:j,whileHover:{y:-5},className:"p-6 rounded-xl bg-[var(--card)] hover:shadow-lg transition-all",children:(0,b.jsxs)(d.default,{href:`/blog/${a.slug}`,children:[(0,b.jsxs)("div",{className:"flex items-center gap-4 text-sm text-[var(--muted-foreground)] mb-3",children:[(0,b.jsxs)("span",{className:"flex items-center gap-1",children:[(0,b.jsx)(e.Calendar,{className:"w-4 h-4"}),new Date(a.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})]}),(0,b.jsxs)("span",{className:"flex items-center gap-1",children:[(0,b.jsx)(f.Clock,{className:"w-4 h-4"}),Math.ceil(a.content.length/1e3)," min read"]})]}),(0,b.jsx)("h2",{className:"text-xl font-bold mb-2 hover:text-[var(--accent)] transition-colors",children:a.title}),(0,b.jsx)("p",{className:"text-[var(--muted-foreground)] mb-4",children:a.description}),(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsx)("div",{className:"flex flex-wrap gap-2",children:a.tags.map(a=>(0,b.jsx)("span",{className:"px-2 py-1 text-xs rounded bg-[var(--accent)]/10 text-[var(--accent)]",children:a},a))}),(0,b.jsxs)("span",{className:"flex items-center gap-1 text-[var(--accent)] font-medium",children:["Read more",(0,b.jsx)(g,{className:"w-4 h-4"})]})]})]})},a.slug))})]})})}a.s(["default",()=>k],17262)}];

//# sourceMappingURL=_ddef73d4._.js.map