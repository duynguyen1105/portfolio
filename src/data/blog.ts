export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nestjs",
    title: "Getting Started with NestJS: A Comprehensive Guide",
    description:
      "Learn how to build scalable server-side applications with NestJS, the progressive Node.js framework.",
    date: "2024-01-15",
    tags: ["NestJS", "Node.js", "TypeScript", "Backend"],
    content: `
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
    `,
  },
  {
    slug: "react-performance-tips",
    title: "10 React Performance Optimization Tips",
    description:
      "Practical tips to improve your React application performance and provide a better user experience.",
    date: "2024-02-20",
    tags: ["React", "Performance", "JavaScript", "Frontend"],
    content: `
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
    `,
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices in 2024",
    description:
      "Essential TypeScript patterns and best practices for writing clean, maintainable code.",
    date: "2024-03-10",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    content: `
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
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
