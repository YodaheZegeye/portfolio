# Yodahe Zegeye — Portfolio

A game/sci-fi RPG-themed personal portfolio website built with Next.js 15 and TypeScript. The UI is designed to look like a video game HUD, with a character sheet, quest log, ability tree, and a working contact form.

**Live site:** https://yodahe-portfolio-teal.vercel.app

---

## Features

- **Intro screen** — Animated entry screen with an "ENTER THE SYSTEM" button
- **Character panel** — Left sidebar with level, XP bar, role, company, education notes, and social links
- **Tab navigation** — Five sections accessible from the bottom nav:
  - **Beginning** — About me / origin story
  - **Logs** — Work experience timeline
  - **Achievements** — Projects displayed as quest cards
  - **Creations** — Skills organized into an ability tree
  - **Connection** — Contact form that emails you directly via Resend
- **Auto-deploy** — Every file change is committed to GitHub and deployed to Vercel automatically

---

## Tech Stack

- [Next.js 15](https://nextjs.org/) — App Router, TypeScript
- [Resend](https://resend.com/) — Contact form email delivery
- [Vercel](https://vercel.com/) — Hosting and deployment
- CSS Modules — Component-scoped styling
- Google Fonts — Bebas Neue, Rajdhani, Share Tech Mono

---

## Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- A [Resend](https://resend.com/) account and API key (free tier is fine)

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/YodaheZegeye/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root of the project:

   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```

   You can get a free API key at [resend.com](https://resend.com/).

4. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
├── app/
│   ├── api/contact/route.ts   # Contact form API endpoint (Resend)
│   ├── globals.css            # Global styles and CSS variables
│   ├── layout.tsx             # Root layout with Google Fonts
│   └── page.tsx               # Entry point — intro vs. dashboard state
│
├── components/
│   └── game/
│       ├── IntroScreen.tsx    # Full-screen intro/splash
│       ├── GameUI.tsx         # Main dashboard layout
│       ├── LeftPanel.tsx      # Character sheet sidebar
│       ├── RightPanel.tsx     # Quest info sidebar
│       ├── BottomNav.tsx      # Tab navigation bar
│       └── tabs/
│           ├── Beginning.tsx  # About section
│           ├── Logs.tsx       # Experience timeline
│           ├── Achievements.tsx # Projects
│           ├── Creations.tsx  # Skills
│           └── Connection.tsx # Contact form
│
└── lib/
    └── data.ts                # All portfolio content (edit this to update info)
```

---

## Updating Portfolio Content

All text content lives in **`lib/data.ts`** — edit that file to update your name, experience, projects, skills, or education. No other files need to change for content updates.

---

## Deployment

The project is deployed on Vercel. A Claude Code hook in `.claude/settings.json` automatically commits changes to GitHub and redeploys to Vercel on every file edit.

To deploy manually:

```bash
npx vercel --prod
```
