# ePortfolio – Mohammed Samy BEJJTIT

Bilingual (FR / EN) ePortfolio based on the vCard template.

## Files
| File | What it is |
|---|---|
| `index.html` | The website. Open it in a browser to view it. |
| `editor.html` | **The editor.** Open it in a browser to change any text without coding. |
| `assets/js/content.js` | All the text of the site (French + English). This is the only file the editor changes. |
| `assets/js/script.js` | Builds the page and runs the FR/EN button. No need to touch it. |
| `assets/css/style.css` | Design. |
| `assets/images/` | Photos (replace `temporary_pic.png` with your photo). |

## Editing your information (no coding)
1. Double-click `editor.html` (Chrome, Edge or Firefox).
2. Choose a tab (Profile, About, Resume, Mobility, Sports & Activities) and edit the boxes. Each text has a **FR** box and an **EN** box.
   Use **+ Add**, **↑ ↓** and **✕ Delete** to manage list items (skills, competitions, mobility projects…).
3. Click **Preview** to see the result.
4. Click **Download content.js**, then replace `assets/js/content.js` with the downloaded file.

Your edits are kept in the browser while you work, so you can close the editor and come back.
An empty field is hidden on the site (e.g. leave LinkedIn empty and the icon disappears).

### Adding your photo, CVs and pitch video
- **Photo:** copy it into `assets/images/` (e.g. `photo.jpg`), then in the editor set *Photo path* to `./assets/images/photo.jpg`.
- **CVs (FR + EN):** create a folder `assets/docs/`, put `CV_FR.pdf` and `CV_EN.pdf` there, then fill *French CV* / *English CV* with `./assets/docs/CV_FR.pdf` and `./assets/docs/CV_EN.pdf`. Two "CV" buttons appear in the sidebar.
- **Elevator pitch video:** upload it to YouTube as *Unlisted* and paste the link in *About → Pitch video*. It shows up on the About page.
- **LinkedIn / GitHub:** paste your profile URLs in *Profile*.
- **Skill levels:** pick `beginner`, `intermediate` or `advanced`. The label is translated automatically.

## Publishing it for free (GitHub Pages)
1. Create a GitHub account, then a new **public** repository named `yourusername.github.io`.
2. Click **Add file → Upload files** and drag in everything from this folder (`index.html`, `editor.html`, `assets/`…). Commit.
3. Go to **Settings → Pages**, set Source to *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. After a minute your site is live at `https://yourusername.github.io`.

To update it later: open `assets/js/content.js` on GitHub → ✏️ (edit) → paste the content of your new file → *Commit changes*.
