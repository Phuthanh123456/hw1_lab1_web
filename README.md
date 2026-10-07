# Production Portfolio

A personal portfolio built with semantic HTML, CSS, and vanilla JavaScript. It introduces Thai Nguyen Thanh Phu, an Information Systems student at UIT in Ho Chi Minh City, and highlights selected AI and data projects.

## Run locally

From the repository root, start a local HTTP server:

```powershell
py -m http.server 8001
```

Open <http://localhost:8001> in a browser and stop the server with `Ctrl+C`. HW1 uses port **8001** so it can run at the same time as HW2 (8002) and HW3 (8003). The portfolio also works as a static site; use an HTTP server when checking the Content Security Policy and browser tools.

## Portfolio contents

- Background and interests in AI applications, automation, business intelligence, and data-driven systems.
- Skills: Python, SQL, Machine Learning, and Power BI.
- Selected work: [Cellaxnet](https://github.com/Phuthanh123456/Cellaxnet) and [Vietnam Travel Risk AI](https://github.com/Phuthanh123456/AI-based-risk-analysis-and-warning-system-for-tourism).
- Contact: [email](mailto:phudeeptry0501@gmail.com) and [GitHub profile](https://github.com/Phuthanh123456).

## Implementation and audits

The page is a small static project with external `styles.css` and `script.js`, responsive styling, keyboard-operable navigation, and a strict Content Security Policy. The WCAG, keyboard-navigation, CSP, and Lighthouse work is recorded in [TASK_DECOMPOSITION.md](TASK_DECOMPOSITION.md); project constraints are in [project_rules.md](project_rules.md).

Lighthouse 13.5.0 median scores in the recorded local mobile and desktop runs were 100 for Performance, Accessibility, Best Practices, and SEO. These local lab scores describe this source snapshot and are not field measurements.
