# 🍪 Cookie Monster Wiffleball — Website

Official team website for the Cookie Monster TWBL wiffleball team. Medium Pitch Division, DFW Area. Est. 2025.

---

## 📁 File Structure

```
cookie-monster-website/
├── index.html        ← The entire website (all pages)
├── style.css         ← All styling
├── main.js           ← Navigation logic
├── assets/
│   └── logo.png      ← Team logo (the cookie)
└── README.md         ← This file
```

---

## 🚀 How to Get This Live (GitHub Pages — Free)

This is the easiest free option and looks great on a resume.

### Step 1 — Create a GitHub account
Go to https://github.com and sign up if you don't have an account.

### Step 2 — Create a new repository
1. Click the **+** icon → **New repository**
2. Name it: `cookie-monster-wiffleball` (or whatever you want)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload your files
1. Click **uploading an existing file** on the repo page
2. Drag and drop ALL files (index.html, style.css, main.js, and the assets/ folder with logo.png)
3. Click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Branch: `main`, Folder: `/ (root)` → click **Save**
5. Wait ~60 seconds, then your site is live at:
   **https://YOUR-USERNAME.github.io/cookie-monster-wiffleball**

That's it. Free, no ads, no server needed.

---

## 🔗 Adding Your Real Social Media Links

Open `index.html` and find this section near the bottom (the footer):

```html
<!-- Replace # with your actual Instagram/YouTube URLs -->
<a class="social-btn ig" href="#" target="_blank" rel="noopener">Instagram</a>
<a class="social-btn yt" href="#" target="_blank" rel="noopener">YouTube</a>
```

Replace the `#` with your actual URLs, like:
```html
<a class="social-btn ig" href="https://www.instagram.com/yourhandle" ...>Instagram</a>
<a class="social-btn yt" href="https://www.youtube.com/@yourchannel" ...>YouTube</a>
```

---

## 📊 Updating Stats Each Week

Open `index.html` and find the stats tables (search for `stat-batting`).

Each player row looks like this:
```html
<tr><td class="num">55</td><td class="name">Joshua Bischops</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
```

Replace each `—` with the actual stat in this column order:
- **Batting:** G, AVG, OBP, HR, RBI, BB, K
- **Pitching:** G, ERA, K, BB, WHIP, W, L

To highlight a league-leading stat, add `class="hi"` to the `<td>`:
```html
<td class="hi">.412</td>
```

---

## 📰 Adding News Articles

Find the `page-news` section in `index.html`. Copy an existing `<article class="news-card">` block and update the content:

```html
<article class="news-card">
  <div class="news-img">GAME RECAP</div>
  <div class="news-body">
    <div class="news-tag">Game Recap</div>
    <h3>W 8-3 vs. [Opponent Name]</h3>
    <p>Write your recap here. What happened, who starred, any highlights.</p>
    <div class="news-date">April 12, 2026</div>
  </div>
</article>
```

---

## 📅 Adding Season Recaps

Find the `page-recaps` section and copy a `<div class="recap-card">` block:

```html
<div class="recap-card">
  <div class="recap-year">2026</div>
  <div class="recap-info">
    <h3>Final Record: 9-3</h3>
    <p>Write your season summary here.</p>
  </div>
  <span class="recap-badge badge-champ">Champions</span>
  <!-- Badge options: badge-champ / badge-run / badge-reg -->
</div>
```

---

## 🎨 Changing Colors

All colors are defined at the top of `style.css`:

```css
:root {
  --navy:         #0a1628;   /* main background */
  --cookie:       #a0785a;   /* cookie brown (borders, accents) */
  --cookie-light: #c9a07a;   /* lighter brown (highlights, headers) */
  --blue-bright:  #1e88e5;   /* stat highlights */
  ...
}
```

---

## 📱 Mobile Support

The site is fully responsive. It works on phones, tablets, and desktop. The nav collapses into a hamburger menu on small screens automatically.

---

## 💡 Tips

- After uploading to GitHub Pages, updates go live within ~30 seconds after you commit changes.
- Use browser DevTools (F12) to test edits locally before pushing.
- Open `index.html` directly in your browser to preview before uploading — no server needed.
- To embed a YouTube video in a news card, replace the `<div class="news-img">` with an iframe:
  ```html
  <iframe width="100%" height="100" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
  ```

---

Built by Josh Bischops · Cookie Monster TWBL · 2026
