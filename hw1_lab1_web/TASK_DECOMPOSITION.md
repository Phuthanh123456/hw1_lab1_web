# Homework 1 - Production Portfolio

## Personalization rebuild — 2026-10-07

- Source information: `D:\PhuThanh\Code\ex_lab1_web\index.html`, `about/index.html`, `contact/index.html`, and `projects.json` (read only).
- Included only the name Thai Nguyen Thanh Phu, Information Systems / UIT background, city, four skills, two project summaries with their existing repository links, email, and GitHub profile. No source application code, environment files, private configuration, phone number, or credentials were copied.
- HW1 uses Vanilla HTML/CSS/JavaScript with external files. Source files are in `hw1_lab1_web`; the existing Git root remains its parent. The file placement was recorded as six unchanged renames, preserving the original milestone history.
- The following rebuild notes are new checks; earlier audit notes remain as historical results.

## M1 - WCAG 2.2 AA audit

**Commit message:** `fix(a11y): contrast & landmarks`

### Tasks

- Audit all pages and interactive states against WCAG 2.2 Level AA, including keyboard access, visible focus, labels, and semantic structure.
- Check text, large-text, control, and focus-indicator contrast; correct failures with accessible colors.
- Add or correct page landmarks and heading structure (`header`, `nav`, `main`, `footer`, and appropriately nested headings).
- Ensure images have appropriate alternative text and form controls have programmatic labels.
- Record any criteria that do not apply and any remaining accessibility issues.

### Completion criteria

- No known WCAG 2.2 AA violations remain in the audited pages and states.
- Landmarks and headings provide a meaningful, navigable page outline.
- Text and relevant UI elements meet applicable contrast requirements, and keyboard focus is visible.
- Changes are limited to this milestone and documented in the audit notes or review summary.

### How to check

- Run an accessibility scan with an automated checker (for example, axe or Lighthouse) on each page; resolve or explain every finding.
- Manually navigate each page using only the keyboard and inspect the landmark/heading outline with browser accessibility tools.
- Verify color contrast with a contrast analyzer, including hover, focus, and disabled states where applicable.
- Test at narrow and wide viewport sizes and with a screen reader or browser accessibility tree.

### M1 audit results

- Reviewed the portfolio at 390px and 1440px viewport widths. Added a visible-on-focus "Skip to main content" link and a focus target on `main` so keyboard users can bypass repeated navigation.
- Darkened small text that fell below 4.5:1, including section labels, metadata, and section eyebrows. Representative checked ratios now include 5.99:1 for section labels, 5.30:1 (4.93:1 on the skills surface) for section eyebrows, and 4.91:1 for labels on the green contact panel. Large green heading text is 3.54:1 against the paper background.
- Updated focus indicator colors for light and dark surfaces. Checked ratios are 15.48:1 on the paper background, 14.40:1 on the skills surface, 12.86:1 on the contact surface, and 11.12:1 on the dark hero.
- Ran axe-core 4.13.0 for WCAG 2.0, 2.1, and 2.2 Level A/AA rules at desktop width and with the mobile menu closed and open. Each scan reported zero violations (20-22 passing rules). Axe marked 4-5 contrast nodes as incomplete because they are symbols or decorative artwork; these are hidden from the accessibility tree or are non-text decoration, and visible text pairs were checked separately.
- Verified the accessibility tree exposes the banner, labeled main navigation, main content, footer, and a button named "Menu". The heading sequence is one `h1`, section `h2` headings, and project `h3` headings. There are no content images or form fields, so image alt text and form labels are not applicable; CSS artwork is hidden from assistive technology.
- Exercised keyboard navigation in the mobile layout: Tab reaches the skip link, activating it moves to main content, the menu button opens with Enter/Space, Tab and Shift+Tab move through navigation links, and Escape closes the menu and returns focus to its button. No M1 findings remain.

### M1 personalized rebuild verification — 2026-10-07

- Fixed the header link accessible-name mismatch found by axe: its visible name now supplies the accessible name, with explicit spacing between the name and Portfolio. Preserved semantic landmarks, heading hierarchy, and the skip link.
- Fresh, cache-disabled browser scans with axe-core 4.14.0 reported zero WCAG A/AA violations at desktop 1440px and mobile 375px with the menu closed/open (20/22/22 passing rules). The 4–5 incomplete contrast nodes concern decorative, accessibility-hidden symbols/artwork; visible text was checked separately.
- Checked contrast ratios: body/project links 14.56:1, project copy 5.29:1, email on contact panel 11.69:1, hero description 8.61:1, large green headings 3.54:1, and focus against light/dark surfaces 15.48:1 and 11.12:1.
- Chrome accessibility tree exposes banner, navigation, main, and contentinfo in the desktop layout. At mobile width the closed navigation is intentionally hidden. First Tab reaches the skip link; Enter focuses main. One h1, section h2 headings, and project h3 headings remain in order; no horizontal overflow at 375px.
- No content images or form fields were introduced. CSS artwork is decorative and hidden from assistive technology. Automated checks plus the recorded browser checks do not constitute a complete screen-reader certification.

## M2 - Focus-trap audit

**Commit message:** `fix(nav): keyboard trap prevention`

### Tasks

- Inventory navigation, menus, dialogs, overlays, and other components that take or constrain focus.
- Trace keyboard entry, movement, dismissal, and exit paths for every such component.
- Ensure Escape and visible close controls dismiss dismissible overlays, and return focus to the invoking control.
- Ensure Tab and Shift+Tab can leave non-modal UI; for modal dialogs, keep focus contained only while open and provide a reliable close/exit path.
- Correct focus order, focus loss, or unreachable controls found during the audit.

### Completion criteria

- Keyboard users can reach and operate every navigation control and can leave each non-modal component.
- Any modal focus containment is intentional, limited to the open modal, and can be exited using an available dismissal method.
- Closing a menu or dialog restores focus to a sensible location, usually its trigger.
- No keyboard trap or keyboard-inaccessible navigation path remains in audited flows.

### How to check

- Use only Tab, Shift+Tab, Enter, Space, and Escape to exercise each audited flow; confirm focus remains visible and progresses as expected.
- Test opening and closing each menu/dialog repeatedly, including nested or adjacent controls, and confirm focus restoration.
- Repeat at desktop and mobile viewport sizes and inspect focus behavior with browser developer tools.

### M2 audit results

- The only component that expands or changes navigation is the mobile menu; there are no dialogs or modal overlays. No focus trap was found: Tab moves from the final menu link into the page, and Shift+Tab from the first menu link returns to the menu button and can continue to the wordmark.
- Tested with keyboard input in headless Edge at 390px and 1440px widths. The mobile sequence is skip link, wordmark, menu button, then About, Skills, Projects, and Contact when expanded. Each focused interactive element showed a 3px visible outline. Space opens the menu; Escape closes it and returns focus to the menu button. Enter on a navigation link follows its destination.
- The audit found focus could fall to `body` after selecting a menu link because the menu was hidden while it still held focus. The navigation now moves focus to the destination section heading after closing; destination headings can receive programmatic focus and show a visible focus outline.
- Resizing across the 760px breakpoint could hide the focused menu control or link. The menu now hands focus from the mobile toggle to the first desktop navigation link, and back to the toggle when the navigation collapses on mobile. The expanded state resets when the layout changes.
- Repeated the Tab, Shift+Tab, Escape, link activation, and resize checks after the fixes. Focus stayed visible, moved to sensible destinations, and could leave the navigation in both directions. No keyboard traps remain in the audited flows.

## M3 - Strict Content Security Policy

**Commit message:** `security(csp): enforce strict policy`

### Tasks

- Inventory scripts, styles, fonts, images, and other resource origins required by the portfolio.
- Remove inline event handlers (including `onclick`) and bind behavior from external JavaScript using event listeners.
- Remove or externalize inline scripts and styles where possible; avoid `eval` and other unsafe dynamic code.
- Define a restrictive Content Security Policy with only the required sources. Prefer an HTTP response header; use a meta policy only when response headers cannot be configured, and document that limitation.
- Exercise the site under the policy, fix blocked legitimate resources, and review browser CSP reports/console messages.

### Completion criteria

- No inline event-handler attributes remain, and interactive behavior works through registered event listeners.
- The enforced CSP does not rely on `unsafe-inline` or `unsafe-eval` and allows only required resource sources.
- Required page functionality and assets load without CSP violations; unexpected sources are blocked.
- The chosen delivery method and any hosting limitation are documented.

### How to check

- Search HTML for inline event attributes such as `onclick`, `onload`, and `onerror`, and inspect script/style use for inline code.
- Load every page with CSP enforcement enabled; check the browser console and Network panel for violations or blocked required assets.
- Exercise all interactive features and verify that prohibited inline script execution is blocked.
- Inspect the delivered response headers (or the documented meta policy) to confirm the effective directives.

### M3 audit results

- Source inspection found no inline event-handler attributes, `<style>` elements, style attributes, or inline scripts. The page loads only `styles.css` and `script.js` from the same origin; behavior remains in the external JavaScript file.
- Added an early CSP meta policy: `default-src 'none'`; `script-src 'self'`; `script-src-attr 'none'`; `style-src 'self'`; `style-src-attr 'none'`; `img-src 'self'`; `font-src 'self'`; `connect-src 'self'`; `base-uri 'self'`; `form-action 'self'`; `object-src 'none'`; and `frame-src 'none'`. It contains neither `unsafe-inline` nor `unsafe-eval`.
- The workspace has no server or deployment configuration, so the static page uses a meta policy. The local static server returned HTTP 200 for the page, CSS, and JavaScript, while the page response had no CSP header. Meta policies cannot enforce `frame-ancestors` or reporting directives; the deployment should send the policy as a response header when its hosting configuration is available.
- In headless Edge, the page loaded its CSS and JavaScript, retained the expected styling, updated the footer year, and opened the menu with no CSP violation in the initial console. Temporary browser probes confirmed the policy blocks inline scripts, event handlers, style attributes, and `<style>` elements; all four probes produced the expected CSP violations and did not execute or apply their inline content.

## M4 - Lighthouse audit and asset optimization

**Commit message:** `perf: optimize assets`

### Tasks

- Capture a reproducible Lighthouse baseline for the production build at mobile and desktop settings.
- Review Lighthouse diagnostics and prioritize asset-related opportunities: image formats and dimensions, responsive/lazy loading, font loading, and unnecessary CSS/JavaScript.
- Optimize assets and delivery without reducing visual quality or breaking behavior; retain only resources the portfolio needs.
- Re-run Lighthouse after each focused change and record scores, test conditions, and remaining opportunities.

### Completion criteria

- The Lighthouse audit has been completed for the production build and the results are recorded.
- Performance is optimized toward a score of 100, with avoidable asset-related diagnostics addressed; any gap from 100 has a documented cause and follow-up.
- The audit also records Accessibility, Best Practices, and SEO scores and resolves regressions introduced by this milestone.
- Pages remain usable and visually correct at mobile and desktop sizes after optimization.

### How to check

- Run Lighthouse against the production build using consistent browser version, device profile, and network settings; repeat runs and record the median score to account for variance.
- Compare before/after Performance scores and key metrics (LCP, INP, and CLS), plus relevant asset diagnostics.
- Inspect optimized images/fonts and verify that they load correctly; manually check representative pages at mobile and desktop sizes.
- Recheck all Lighthouse category scores and confirm no earlier accessibility or security work regressed.

### M4 audit results

- Test conditions: Lighthouse CLI 13.5.0 with Microsoft Edge 154.0.4258.53. The workspace has no build, deployment, or server configuration, so the source tree was served directly at `http://127.0.0.1:4173/` with `python -m http.server`; this is a local static-server measurement, not a deployed production-host measurement. Three reports were collected for each profile using Lighthouse's mobile form factor and desktop preset with their default throttling. All reports contained complete category and metric data. One baseline mobile CLI process reported a DevTools `Runtime.evaluate` timeout after it wrote a complete, parseable report; the other baseline runs and all post-change runs exited successfully.
- Median category scores (0-100):

  | Profile | Phase | Performance | Accessibility | Best Practices | SEO |
  | --- | --- | ---: | ---: | ---: | ---: |
  | Mobile | Before | 100 | 100 | 96 | 100 |
  | Mobile | After | 100 | 100 | 100 | 100 |
  | Desktop | Before | 100 | 100 | 96 | 100 |
  | Desktop | After | 100 | 100 | 100 | 100 |

- Median lab metrics from the same runs:

  | Profile | Phase | FCP | LCP | INP | TBT | CLS | Speed Index |
  | --- | --- | ---: | ---: | --- | ---: | ---: | ---: |
  | Mobile | Before | 0.828 s | 0.911 s | N/A* | 0 ms | 0 | 0.828 s |
  | Mobile | After | 0.807 s | 0.912 s | N/A* | 0 ms | 0 | 0.807 s |
  | Desktop | Before | 0.226 s | 0.247 s | N/A* | 0 ms | 0 | 0.319 s |
  | Desktop | After | 0.220 s | 0.246 s | N/A* | 0 ms | 0 | 0.292 s |

  `*` Lighthouse marked its INP breakdown audit not applicable for these local lab runs; no field INP measurement was available.

- The baseline logged a 404 for the implicit `/favicon.ico` request, which lowered Best Practices to 96. Added a small, same-origin `favicon.svg` and declared it in the document head. The icon now returns HTTP 200, Lighthouse reports no browser-console errors, and Best Practices scores 100 in both profiles. This adds no external dependency and does not change the CSP.
- Performance scored 100 before and after on mobile and desktop. The page has no raster/content images, web fonts, third-party assets, or JavaScript libraries; Lighthouse found no minification or unused CSS/JavaScript opportunity. The stylesheet remains 13,191 transferred bytes and render-blocking (estimated 152-153 ms); the deferred script is 2,431 bytes. The temporary server sends neither compression nor cache headers, so Lighthouse reports 15,622 bytes of uncached CSS/JavaScript and an uncompressed 5,710-byte document. These delivery opportunities need hosting/server configuration, which is absent from this static workspace. No score gap from the Performance target remains in these local runs.
- Accessibility scored 100 in every profile and phase, and the CSP and external-only CSS/JavaScript remain intact. Lighthouse also reports the existing `label-content-name-mismatch` audit on the header wordmark (`.wordmark`); it predates M4 and is recorded for an M1 accessibility follow-up rather than changed in this milestone.
- No M4 accessibility or security regressions were observed. The final category scores meet 100 in the measured local profiles; production-host cache/compression behavior remains unverified until hosting configuration exists.
