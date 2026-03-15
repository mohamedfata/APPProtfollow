# VividSphere Consulting Website

A colorful, creative, responsive website for a consultancy focused on:
- Microsoft 365
- Azure
- Microsoft Security
- Modern Work

## Where the website code is

The website source files are in the repository root:
- `index.html`
- `style.css`
- `script.js`
- `.github/workflows/deploy.yml`

If the repository looks empty on GitHub, you are usually viewing the wrong branch.
This project was built on branch `work`. Make sure your GitHub branch selector is set to the branch that contains these files, or push the files to `main`.

## Run locally

```bash
python3 -m http.server 4173
```

Then open: `http://localhost:4173`

## Fix for "empty repository" on GitHub

If GitHub shows no files, run these commands from this repo and push to `main`:

```bash
git checkout -B main
git push -u origin main
```

After that, refresh GitHub and confirm files are visible on branch `main`.

## Public deployment (GitHub Pages)

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push this project to GitHub.
2. Ensure your default branch is `main`.
3. In **Settings → Pages**, set source to **GitHub Actions**.
4. Push to `main` and the site will deploy automatically.

Public site URL format:

`https://<your-github-username>.github.io/<repository-name>/`
