# Decap CMS Environment Setup for Vercel

## Required Setup Steps

### 1. Create a GitHub OAuth App

1. Go to: https://github.com/settings/developers
2. Click **New OAuth App**
3. Fill in:
   - **Application name**: Your App Name
   - **Homepage URL**: `https://your-domain.com`
   - **Authorization callback URL**: `https://your-domain.com/api/auth/callback`
4. Click **Register application**
5. Copy the **Client ID**

### 2. Generate Client Secret

1. In your OAuth App settings, click **Generate a new client secret**
2. Copy the secret

### 3. Configure Vercel Environment Variables

In your Vercel project settings, add these environment variables:

```
OAUTH_CLIENT_ID=your_github_client_id
OAUTH_CLIENT_SECRET=your_github_client_secret
```

### 4. Update config.yml

Edit `static/admin/config.yml` and replace:
- `YOUR_GITHUB_REPO_PATH` → your repo (e.g., `username/repo-name`)
- `https://your-domain.com` → your actual domain

### 5. Deploy

Push changes to your repo. Vercel will deploy automatically.

## How Non-Tech Users Edit Content

1. Visit `https://your-domain.com/admin`
2. Click **Login with GitHub**
3. After authenticating, they see the CMS dashboard
4. Click a content type (Events, Gallery, Products, Blog)
5. Create/edit entries and click **Publish**
6. Changes are saved as files in your repo
7. Vercel auto-redeploys the site with new content

## Content Folders

- `/content/events` - Workshop/event content
- `/content/gallery` - Gallery images
- `/content/products` - Shop products
- `/content/blog` - Blog posts

Images upload to: `/public/images/uploads/`