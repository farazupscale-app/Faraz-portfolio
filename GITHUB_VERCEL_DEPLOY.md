# GitHub and Vercel Deployment

This portfolio is a Next.js application and is ready to push to GitHub and deploy on Vercel.

## 1. Create a GitHub repository

On GitHub, create a new empty repository. Do not add a README, `.gitignore`, or license because those files already exist in this project.

## 2. Push this project to GitHub

Open PowerShell in this project folder and run:

```powershell
git add .
git commit -m "Prepare portfolio for deployment"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your GitHub username and repository name.

If a remote named `origin` already exists, use this instead of `git remote add origin`:

```powershell
git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

## 3. Deploy on Vercel

1. Open [vercel.com](https://vercel.com/) and sign in with GitHub.
2. Select **Add New...** → **Project**.
3. Import the GitHub repository.
4. Keep the detected settings:
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Output Directory: leave blank (Vercel detects `.next` automatically)
5. Select **Deploy**.

No environment variables are required for the current portfolio.

## Local verification

The production build has been verified with:

```powershell
npm install
npm run build
```

