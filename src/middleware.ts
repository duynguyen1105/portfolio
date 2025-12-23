import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for
    // - /api (API routes)
    // - /_next (Next.js internals)
    // - /_vercel (Vercel internals)
    // - /images, /fonts (static files in public folder)
    // - all files with extensions (e.g., favicon.ico, sitemap.xml, robots.txt)
    "/((?!api|_next|_vercel|images|fonts|.*\\..*).*)",
  ],
};
