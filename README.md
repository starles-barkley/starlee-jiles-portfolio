# Starlee Jiles — Personal Site

A true multi-page static site, no build step, no dependencies:

```
index.html      Home
services.html   Services (Simple / Advanced / Custom)
examples.html   Examples of past and demo work
about.html      About
contact.html    Contact form
style.css       Shared theme tokens + styles for every page
script.js       Shared mobile nav + Formspree submit handling
README.md       This file
```

## Before you deploy — things to finish

### 1. Swap in a more formal photo later, if you want (Home and About pages)
Both pages currently use `images/starlee.jpg`. If you'd like a more
polished or professional shot later, just replace that file with the new
one (keep the same filename, or update the `src` in `index.html` and
`about.html`). A portrait-oriented photo (roughly 4:5) will fit the frame
best.

### 2. Add real screenshots (Examples page)
The two example cards in `examples.html` currently show a colored
placeholder panel with the site name instead of a screenshot. Replace:
```html
<div class="browser-body" aria-hidden="true">Late Night BBQ</div>
```
with:
```html
<div class="browser-body">
  <img src="images/late-night-bbq.png" alt="Late Night BBQ website screenshot">
</div>
```
and the same for the small business demo. You may also want to add
`object-fit: cover; width: 100%; height: 100%;` in `style.css` under
`.browser-body img` if the screenshot's proportions don't match the frame.

### 3. Set up the contact form (Formspree)
1. Go to [formspree.io](https://formspree.io) and create a free account
   with `starlee.jiles@icloud.com`.
2. Create a new form — Formspree gives you a form ID like `xayzabcd`.
3. In `contact.html`, find this line in the `<form>` tag:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   Replace `YOUR_FORM_ID` with your real ID.
4. Formspree emails a verification link the first time the form is
   submitted for real — confirm it or messages won't arrive.

`script.js` already handles the submit with `fetch`, so submitting shows
an inline "Thanks — I'll get back to you soon." message instead of
redirecting away from the site.

## Running it locally

No install needed:
```bash
python3 -m http.server 8000
```
then open `http://localhost:8000`. Each page is a separate file — visit
`http://localhost:8000/services.html`, `/examples.html`, etc. directly,
or just click through the nav.

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. On [vercel.com](https://vercel.com) → **Add New Project** → import the
   repo.
3. Framework preset: **Other**, build command: blank. Deploy.
4. You'll get a free `your-project.vercel.app` URL. Every `.html` file in
   the repo becomes its own route automatically (e.g. `/services.html`).

To add a real domain later, go to the Vercel project's
**Settings → Domains**, add the domain, and update the DNS records Vercel
shows you at your registrar. No code changes required.
