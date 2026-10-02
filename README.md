# SEO Updates

Static SEO news feed for GitHub Pages.

## Files
- `seo-update.html` — halaman utama (sengaja **bukan** `index.html`)
- `data.json` — data RSS hasil GitHub Actions
- `scripts/update_feed.py` — pengambil RSS
- `.github/workflows/update-feed.yml` — update otomatis setiap 30 menit

## GitHub Pages
Setelah repository dibuat dan Pages diaktifkan, buka:

`https://USERNAME.github.io/REPOSITORY/seo-update.html`

Jalankan **Actions → Update SEO Feed → Run workflow** sekali untuk mengambil data pertama kali.
