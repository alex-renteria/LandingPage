# Data Grid Landing Page Architecture

This document outlines the architecture and design decisions for the Data Grid landing page project.

## 1. Overview

The project is a static, single-page website designed to serve as a professional landing page for "Data Grid", a company specializing in data integration, business analytics, and AI insights. It aims to be responsive, visually appealing, and informative, showcasing the company's services and value proposition.

## 2. File Structure

The project follows a standard structure for simple web projects:

```
LandingPage/
├── README.md               # Project overview, setup, and customization instructions
├── ARCHITECTURE.md         # This file - Design and architecture details
├── index.html              # Main HTML file containing all page content and structure
├── css/                    # Directory for stylesheets
│   ├── style.css           # Custom styles for branding, layout, and specific components
│   └── normalize.css       # Resets default browser styles for consistency
├── js/                     # Directory for JavaScript files
│   └── main.js             # Custom JavaScript for interactivity and dynamic behavior
└── images/                 # Directory for static image assets
    ├── hero-image.png      # Placeholder for hero section background/illustration
    ├── case-study-*.jpg    # Placeholders for case study visuals
    ├── about-team.jpg      # Placeholder for team/company image
    └── logo.svg            # Company logo (or styled text alternative)
```

*(Note: The `assets/fonts/` directory mentioned in the initial plan was not created as no custom fonts were added beyond standard web fonts and those potentially included via Bootstrap/Font Awesome).*

## 3. HTML (`index.html`)

-   **Structure:** Uses semantic HTML5 elements (`<nav>`, `<section>`, `<footer>`, etc.) for better accessibility and organization.
-   **Content:** Divided into logical sections corresponding to the navigation:
    -   `#home` (Hero Section): Introduction and main call-to-action.
    -   `#services`: Details the company's core offerings.
    -   `#benefits`: Highlights advantages for clients.
    -   `#process`: Outlines the company's working methodology.
    -   `#case-studies`: Showcases success stories.
    -   `#about`: Provides company background and team information.
    -   `#contact`: Includes contact details and a contact form.
-   **Framework:** Utilizes Bootstrap 5 classes (`container`, `row`, `col-*`, `btn`, `navbar`, `form-control`, etc.) for the grid system, basic component styling, and responsiveness.

## 4. CSS (`style.css` & `normalize.css`)

-   **`normalize.css`:** Included first to ensure consistent base styling across different browsers by resetting default styles.
-   **Bootstrap:** Loaded via CDN to provide the foundational grid system, responsive utilities, and pre-styled components (buttons, forms, navbar).
-   **`style.css`:** Contains all custom styles:
    -   **Variables:** CSS Custom Properties (`:root`) are used for defining the color palette (`--primary-color`, `--secondary-color`, etc.) and primary fonts (`--body-font`, `--heading-font`). This allows for easy theme customization.
    -   **Base Styles:** Basic resets and default styles for `body`, headings, paragraphs, links, etc.
    -   **Component Styling:** Custom styles for the navbar, hero section, service cards, benefit items, process timeline, case studies, contact info, footer, etc., overriding or extending Bootstrap styles where necessary.
    -   **Responsiveness:** Media queries (`@media`) are used at the end of the file to adjust layout, font sizes, and spacing for different screen sizes (tablets, mobiles).

## 5. JavaScript (`main.js`)

-   **Execution:** Script is deferred and runs after the DOM is fully loaded (`DOMContentLoaded` event listener).
-   **Modularity:** Functionality is organized into separate initialization functions (`initNavbar`, `initSmoothScroll`, etc.).
-   **Key Features:**
    -   **Navbar:** Adds a 'scrolled' class on scroll for potential style changes (e.g., background color, size). Highlights the active navigation link based on the section currently in the viewport.
    -   **Smooth Scroll:** Implements smooth scrolling for internal anchor links (`#`).
    -   **Contact Form:** Handles form submission, performs basic validation (required fields, email format), displays success/error messages dynamically, and simulates submission (no actual backend).
    -   **Newsletter Form:** Similar basic validation and submission simulation for the footer newsletter signup.
    -   **Animations:** Uses the `IntersectionObserver` API to add a fade-in/slide-up animation class (`.animated`) to elements (service cards, benefit items, etc.) when they enter the viewport. Also includes a counter animation for the statistics in the About section.

## 6. External Dependencies

-   **Bootstrap 5:** CSS and JS loaded via CDN for layout and components.
-   **Font Awesome 6:** Loaded via CDN for icons used throughout the site (service icons, contact icons, social media links).
-   **(Implicit) Inter Font:** Relies on the user's system having 'Inter' or falls back to standard sans-serif fonts specified in the `font-family` declarations.

## 7. Design Considerations

-   **Responsiveness:** Mobile-first approach considered, with Bootstrap's grid and utilities ensuring adaptability across devices. Media queries provide fine-tuning.
-   **Performance:** Using CDNs for libraries can leverage browser caching. Images are placeholders and should be optimized for web use. JavaScript is relatively lightweight.
-   **Accessibility:** Semantic HTML is used. Basic ARIA attributes are included by Bootstrap components. Further accessibility testing (keyboard navigation, screen reader compatibility) would be recommended.
-   **Maintainability:** CSS variables make theme changes easier. JavaScript is organized into functions. Comments are used in HTML and JS.
