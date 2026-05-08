# Portfolio Content Database

This folder is your **content database** for the portfolio. It's plain TypeScript files committed to GitHub — no server, no API keys, no database hosting needed. Edit a file, push to GitHub, and the live site rebuilds automatically.

## Adding a new project

Open `src/data/projects.ts` and append a new object to the `projects` array:

```ts
{
  icon: Bot,                    // any lucide-react icon
  title: "My New Project",
  tag: "Web · AI",
  desc: "Short description of what it does and the impact.",
  tech: ["React", "Node.js", "Postgres"],
  featured: true,               // optional — pins to the top
  year: 2026,                   // optional
  caseStudyUrl: "https://...",  // optional — live demo / write-up
  codeUrl: "https://github.com/AkashUsumaki/...", // optional — repo link
  image: "/projects/my-project.jpg", // optional — drop file in /public/projects/
}
```

Then commit & push:

```bash
git add src/data/projects.ts
git commit -m "Add new project: My New Project"
git push
```

GitHub Pages / Vercel / Netlify will rebuild and the new project appears.

## Adding project images

Drop the image into `public/projects/` and reference it as `/projects/filename.jpg`.

## Resume

Replace `public/Akash-K-Resume.jpg` (or add `public/Akash-K-Resume.pdf` and update the `href` in `src/components/portfolio/Hero.tsx`).