# wilkinsantana.com

Personal website and portfolio for **Wilkin Santana** — creative technologist, engineer, and builder.

Built with SvelteKit, TailwindCSS, TypeScript, and mdsvex.

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## How to edit content

All site content lives in plain files — no CMS, no database, no magic.

### Your profile picture

Replace the placeholder avatar:

1. Add your photo to `static/images/avatar.jpg` (or `.png`, `.webp`)
2. Open `src/routes/+page.svelte` and `src/routes/about/+page.svelte`
3. Update `src="/images/avatar.svg"` → `src="/images/avatar.jpg"`

### Projects — `src/lib/data/projects.json`

```json
{
  "id": "unique-id",
  "title": "Project Name",
  "description": "What it does and why it matters.",
  "tags": ["TypeScript", "React"],
  "url": "https://github.com/wilkinsantana/project",
  "live": "https://live-url.com",
  "featured": true,
  "stars": 0
}
```

Set `"featured": true` to show it in the top grid. Set `"stars"` to display a star count.

### Experience — `src/lib/data/experience.json`

```json
{
  "id": "1",
  "role": "Senior Engineer",
  "company": "Acme Corp",
  "companyUrl": "https://acme.com",
  "period": "2023 — Present",
  "location": "Remote",
  "description": "What you did and why it mattered.",
  "achievements": ["Built X", "Shipped Y"],
  "tech": ["TypeScript", "AWS"]
}
```

### Education — `src/lib/data/education.json`

```json
{
  "id": "1",
  "degree": "B.S. Computer Science",
  "field": "Computer Science",
  "institution": "University Name",
  "period": "2016 — 2020",
  "location": "City, State",
  "description": "What you studied.",
  "honors": "Dean's List",
  "relevant": ["Algorithms", "Systems"]
}
```

### Skills — `src/lib/data/skills.json`

Edit the `categories` array. Add or rename categories and skills freely.

### Contact info — `src/routes/contact/+page.svelte`

Update your email address: find `mailto:hello@wilkinsantana.com` and replace it.

Update your social links: find the `socials` array at the top of the file.

### Update social links in footer

Open `src/lib/components/layout/Footer.svelte` and update the `href` values in the `socials` array.

---

## Blog posts

Blog posts are Markdown files in `src/lib/posts/`. Every `.md` file becomes a post automatically.

### Create a new post

1. Create `src/lib/posts/my-post-slug.md`
2. Add frontmatter at the top:

```md
---
title: "Your Post Title"
date: "2025-06-01"
excerpt: "A one or two sentence description shown in the post listing."
tags: ["engineering", "design"]
---

Your content here. Standard Markdown works: **bold**, *italic*, [links](https://example.com), `code`, etc.
```

3. The post appears at `/blog/my-post-slug` immediately.

**Tips:**
- Use `date: "YYYY-MM-DD"` format so sorting works correctly
- The `excerpt` appears in the post listing — make it worth reading
- Tags are displayed as chips; use consistent naming

---

## Deployment

### GitHub Pages (automated)

Every push to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages automatically.

**Setup (one time):**

1. Go to your repo on GitHub → Settings → Pages
2. Set Source to **GitHub Actions**
3. Push to `main` — the site deploys automatically

### Custom domain

The `static/CNAME` file already contains `wilkinsantana.com`. Once DNS is pointed at GitHub Pages (A records or CNAME), the domain will resolve.

GitHub Pages DNS records:
```
A    185.199.108.153
A    185.199.109.153
A    185.199.110.153
A    185.199.111.153
```

Or a CNAME record pointing to `wilkinsantana.github.io`.

---

## Before you publish — checklist

- [ ] Replace `static/images/avatar.svg` with your real photo
- [ ] Fill in `src/lib/data/experience.json` with real roles
- [ ] Fill in `src/lib/data/education.json` with your education
- [ ] Fill in `src/lib/data/projects.json` with real projects
- [ ] Update `src/lib/data/skills.json` with your actual skill set
- [ ] Update the email in `src/routes/contact/+page.svelte`
- [ ] Update social links in `src/routes/contact/+page.svelte` and `src/lib/components/layout/Footer.svelte`
- [ ] Write your real About page text in `src/routes/about/+page.svelte` (look for `<!-- ✏️ EDIT -->` comments)
- [ ] Replace or personalize the blog post in `src/lib/posts/hello-world.md`
- [ ] Verify GitHub Pages source is set to **GitHub Actions**
- [ ] Enable HTTPS in GitHub Pages settings once DNS resolves

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | SvelteKit 2 |
| Styling | TailwindCSS 3 + CSS custom properties |
| Language | TypeScript |
| Blog | mdsvex (Markdown → Svelte) |
| Build | Vite 5 |
| Adapter | `@sveltejs/adapter-static` |
| Deployment | GitHub Pages via Actions |
| Fonts | Cormorant Garamond · Inter · JetBrains Mono |

---

## Project structure

```
src/
├── lib/
│   ├── actions/        # Svelte actions (scroll reveal)
│   ├── components/     # Reusable components
│   │   ├── layout/     # Header, Footer
│   │   ├── ui/         # ThemeToggle, etc.
│   │   └── blog/       # PostLayout
│   ├── data/           # ← Edit these JSON files to update content
│   ├── posts/          # ← Add .md files here to publish blog posts
│   ├── stores/         # theme store
│   └── utils/          # reading time, date formatting
├── routes/             # Pages (one folder per route)
└── app.{html,css}      # HTML shell and global styles
static/
├── CNAME               # Custom domain
├── favicon.svg
└── images/             # Put your avatar here
```
