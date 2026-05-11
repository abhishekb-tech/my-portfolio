# Deployment Guide for Netlify

## Quick Deploy (Recommended)

### Method 1: Netlify Drop (Easiest)

1. Build your project:
```bash
cd portfolio
npm run build
```

2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)

3. Drag and drop the `dist` folder onto the page

4. Your site will be live in seconds with a random URL like `random-name-123.netlify.app`

5. You can change the site name in Site Settings → Site Details → Change site name

---

### Method 2: Netlify CLI (For Continuous Deployment)

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize your site (from the portfolio directory):
```bash
cd portfolio
netlify init
```

4. Follow the prompts:
   - Create & configure a new site
   - Choose your team
   - Enter a site name (or leave blank for random)
   - Build command: `npm run build`
   - Publish directory: `dist`

5. Deploy:
```bash
netlify deploy --prod
```

---

### Method 3: GitHub Integration (Best for Updates)

1. Create a new repository on GitHub

2. Push your code:
```bash
cd portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. Go to [Netlify Dashboard](https://app.netlify.com/)

4. Click "Add new site" → "Import an existing project"

5. Choose "Deploy with GitHub"

6. Authorize Netlify to access your GitHub

7. Select your repository

8. Configure build settings:
   - Branch to deploy: `main`
   - Build command: `npm run build`
   - Publish directory: `dist`

9. Click "Deploy site"

10. Your site will auto-deploy on every push to main!

---

## Custom Domain (Optional)

1. Go to your site in Netlify Dashboard

2. Click "Domain settings"

3. Click "Add custom domain"

4. Follow the instructions to configure your DNS

---

## Environment Variables (If Needed)

If you add any API keys or environment variables later:

1. Go to Site Settings → Environment Variables

2. Add your variables

3. Redeploy your site

---

## Linking to LinkedIn

Once deployed, you can add your portfolio URL to LinkedIn:

1. Go to your LinkedIn profile

2. Click "Add profile section" → "Featured" → "Add featured"

3. Choose "Link" and paste your Netlify URL

4. Add a title like "My Portfolio" and description

5. Save!

---

## Troubleshooting

**Build fails?**
- Make sure all dependencies are in package.json
- Check that Node version is compatible (v18+ recommended)

**404 on refresh?**
- The `netlify.toml` file handles this with redirects
- Make sure it's in the root of your project

**Styling issues?**
- Clear your browser cache
- Check that CSS files are being imported correctly

---

## Your Portfolio is Ready! 🚀

Your contact information is prominently displayed:
- Email: bhattabhi3@gmail.com
- Phone: +91 97235 19232
- LinkedIn: linkedin.com/in/abhishek-bhatt-reactjs/

People can now easily reach you from your portfolio!
