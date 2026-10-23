# Voyita · Trip Module (Tenant Admin mobile)

Clickable prototype of the Tenant Admin mobile app's Trip module.

## Host on GitHub Pages
1. Upload everything in this folder to the root of the repo (keep `.nojekyll`).
2. Settings → Pages → Branch `main`, folder `/ (root)` → Save.
3. Open `https://<user>.github.io/<repo>/`.

## Files
| Path | What |
| --- | --- |
| `index.html` | The app canvas (opens directly) |
| `support.js` | Component runtime |
| `screens/00-core.js` | Shared helpers and sample data |
| `screens/01…17-*.js` | One file per module: trips, trip details, itinerary, payment setup, add-ons, staff, cost sheet, documents, settings, travellers, room and coach list, vendor, notifications, trip packet, account, draft trips |
| `design-system/` | Voyita Design System tokens, fonts and component bundle |
| `assets/` | Images |

Files in `screens/` load in number order; each module only depends on the files before it.
To change a module, edit its file only.
