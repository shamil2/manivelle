# La Manivelle 📦

La Manivelle is an artisanal workshop designing custom, eco-responsible furniture made from recycled cardboard. Combining artisanal craftsmanship with precise engineering, this site serves as their digital portfolio, shop, and workshop booking platform.

This project is built with a modern web stack, featuring a dynamic frontend and an integrated Content Management System (CMS) for easy updates by non-technical users.

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org) (App Router, Server Components)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Content Management**: [Decap CMS](https://decapcms.org/) (Git-based, previously Netlify CMS)
- **Fonts**: Geist, Instrument Serif, Outfit (via `next/font`)
- **Deployment**: [Vercel](https://vercel.com)

## 🚀 Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shamil2/manivelle.git
   cd manivelle
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or yarn / pnpm / bun
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application supports Hot Module Replacement (HMR) out of the box.

## 📝 Content Management (CMS)

Content on the site (products, workshops, gallery items, pages) is managed via Markdown files in the `content/` directory.

Non-technical users can use the integrated CMS to edit the website content visually without touching the code.

### Using the CMS

1. Visit **`https://your-domain.com/cms-manager`** (for security, it's not located at `/admin`).
2. Click **Login with GitHub**.
3. After authenticating, you will see the CMS dashboard.
4. Click a content type (Pages, Workshops, Gallery Images, Shop Products).
5. Create or edit entries and click **Publish**.
6. Changes are saved as files directly in the repository on the `main` branch.
7. Vercel automatically redeploys the site with the new content (within a minute).

### Content Folders
- `/content/pages` - Homepage content and configuration
- `/content/workshops` - Workshop and event content
- `/content/gallery` - Gallery pieces
- `/content/products` - Shop products
- `/content/events` - Agenda events

Images upload to: `/public/images/uploads/`

## ⚙️ CMS Setup for Vercel (For Developers)

To ensure the GitHub OAuth flow works for Decap CMS, follow these steps:

1. **Create a GitHub OAuth App**:
   - Go to: `https://github.com/settings/developers`
   - Click **New OAuth App**
   - **Application name**: La Manivelle CMS
   - **Homepage URL**: `https://manivelle.vercel.app` (or your domain)
   - **Authorization callback URL**: `https://manivelle.vercel.app/api/auth/callback`
   - Copy the generated **Client ID** and **Client Secret**.

2. **Configure Vercel Environment Variables**:
   In your Vercel project settings, add the following:
   ```env
   OAUTH_CLIENT_ID=your_github_client_id
   OAUTH_CLIENT_SECRET=your_github_client_secret
   ```

3. **Deploy**:
   Push changes to your repository. Vercel will deploy automatically.

## 🎨 Design System

The site adheres to the **"Modern Artisanal"** design language:
- **Colors**: Warm parchment and kraft tones (`surface`, `subtle`, `primary`, `accent`).
- **Typography**: 
  - `Instrument Serif` (Editorial, elegant headings)
  - `Outfit` (Clean, legible body copy)
  - Monospace (Technical details, labels)
- **Textures**: Uses subtle cardboard texture overlays to emphasize the physical nature of the products.

## 🤖 Agents & Workflows

If you are an AI Agent contributing to this codebase, you **must** invoke the `using-superpowers` skill at the beginning of any session. Please refer to `AGENTS.md` for specific instructions and workflows.

---
© 2026 Atelier La Manivelle / Tous Droits Réservés