# Arvind Kiran — UX Design Portfolio

A premium, interactive, and responsive portfolio showcasing UX Research, Product Design, and Design Systems case studies. 

This website is custom-crafted to display the UX methodology, enterprise products, and design thinking of **Arvind Kiran**, a Senior UX & Product Designer.

---

## 🌟 Key Features

* **Interactive Custom Cursor**: Fluid cursor tracking with responsive hover growth effects across link items and buttons.
* **Ambient Mesh Background**: Dynamic, animated background gradient blobs layered with retro scan-lines and visual noise for a futuristic, state-of-the-art aesthetic.
* **Single-Page Navigation System**: Interactive vertical navigation bar linking 9 distinct pages/sections:
  * Home (Hero)
  * About
  * Work (Featured Case Studies)
  * Expertise
  * Process
  * Clients
  * Stats
  * UX Thinking (Blog)
  * Contact
* **Interactive Case Study Detail Viewer (`work.html`)**: Dynamic, query-param-driven layout displaying detailed case studies with visual assets, roles, durations, and key metrics.
* **UX Thinking Design Journal (`blog.html`)**: Interactive design journal showing article listings or full article reads.
* **Live System Timepiece**: Integrated digital clock showing local system time for context.

---

## 🛠️ Technology Stack

* **Structure**: HTML5 (Semantic elements)
* **Styling & Grid**: Bootstrap 5, Custom Vanilla CSS (`style.css` & `blog.css`)
* **Typography**: Cormorant Garamond, DM Sans, and Rajdhani (loaded via Google Fonts)
* **Icons**: Bootstrap Icons (local package in `font/`)
* **Logic & Animations**: JavaScript, jQuery (used for page scrolling, cursor physics, dynamic case studies, and routing)

---

## 📂 Project Structure

```text
Arvindkiranux/
│
├── index.html          # Main single-page interactive portfolio
├── work.html           # Case study dynamic view page (uses URL params)
├── blog.html           # Design journal listing and reader page
│
├── css/                # Styling stylesheets
│   ├── bootstrap.min.css
│   ├── style.css       # Core layout, mesh backgrounds, animations
│   └── blog.css        # Blog & case-study page layout refinements
│
├── js/                 # Javascript files
│   ├── jquery-3.7.1.min.js
│   ├── bootstrap.bundle.min.js
│   └── [custom scripts integrated within HTML files]
│
├── img/                # Media assets (mockups, project screenshots, icons)
│   ├── portfolio/      # Case study image thumbnails & banner images
│   ├── blog/           # Case study design flows, diagrams, & process images
│   └── ...
│
└── font/               # Font files and bootstrap icon styles
    ├── bootstrap-icons.css
    └── fonts/
```

---

## 🚀 Getting Started

### Run Locally
To run and view the portfolio locally:

1. Clone or download this repository.
2. Open `index.html` directly in any modern web browser, or use a local development server (e.g. VS Code's **Live Server** extension or `npx http-server`).
3. View the live website on `http://localhost:<port>`.

### Modifying Case Studies or Articles
* **Case Studies**: Controlled in `work.html` inside the scripts block. Update the `caseStudies` object with key details, outcomes, and descriptions.
* **Blog Posts**: Managed dynamically via JS inside `blog.html`.

---

## 🎨 Design Philosophy
The portfolio emphasizes visual excellence with curated dark theme styling, sleek gold-mesh gradients, spacious typography, and elegant micro-interactions.