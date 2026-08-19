# Starlee Jiles — Personal Site

Static site (`index.html` + `style.css` + `script.js`), no build step, no
dependencies. Sections: hero, skills, projects, about, contact.

## Before you deploy — 3 things to finish

### 1. Finish your website packages (`index.html`, `#work` section)
Package 01 ("Small Business Starter") is live and links to your real demo
site. Packages 02 and 03 are still placeholders — search for
`[Package Name]` and `[EDIT:` to fill in the tier name, description,
price, feature tags, and demo link. Delete a whole
`<article class="project-card">` block if you want fewer than 3 tiers, or
copy one for more.

### 2. Set up the contact form (Formspree)
1. Go to [formspree.io](https://formspree.io) and create a free account
   with `starlee.jiles@icloud.com`.
2. Create a new form — Formspree gives you a form ID like `xayzabcd`.
3. In `index.html`, find this line in the `<form>` tag:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   Replace `YOUR_FORM_ID` with your real ID.
4. Formspree emails a verification link the first time you submit the
   form for real — confirm it or messages won't arrive.

That's it — `script.js` already handles the submit with `fetch`, so
submitting shows an inline "Thanks — I'll get back to you soon." message
instead of redirecting away from your site.

### 3. Add your resume
Export your resume as `resume.pdf` and drop it in this same folder,
next to `index.html`. The "Resume" button in the header already links to
`resume.pdf` and will download it — no code changes needed once the file
is in place.

## Also worth doing

- **GitHub / LinkedIn links** — in the `#contact` section of
  `index.html`, replace the two `href="#"` placeholders next to "GitHub ↗"
  and "LinkedIn ↗" with your real profile URLs.
- **Favicon / social preview image** — optional, but nice to have before
  sharing the link widely. Add a `favicon.ico` and reference it in
  `<head>` if you want one.

## Running it locally

No install needed:
```bash
python3 -m http.server 8000
```
then open `http://localhost:8000`. Or `npx serve .` if you'd rather use Node.

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. On [vercel.com](https://vercel.com) → **Add New Project** → import the
   repo.
3. Framework preset: **Other**, build command: blank. Deploy.
4. You'll get a free `your-project.vercel.app` URL immediately.

To add a real domain later (e.g. `starleejiles.com`), go to the Vercel
project's **Settings → Domains**, add the domain, and update the DNS
records Vercel shows you at your registrar. No code changes required.

## File structure

```
index.html      All markup + content
style.css       Theme tokens at top (colors/fonts), then layout styles
script.js       Mobile nav + Formspree submit handling
resume.pdf      Add this yourself (see step 3 above)
README.md       This file
```
