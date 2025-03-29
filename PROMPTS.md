# Reusable Prompts for Creating a Landing Page Project

This document summarizes the sequence of prompts and actions used to create the Data Grid landing page. It can serve as a guide for replicating this project or similar ones with an AI assistant like Cline.

**Goal:** Create a responsive, single-page landing website for a fictional company ("Data Grid") using HTML, CSS (with Bootstrap), and basic JavaScript. Include project documentation (README, Architecture, Content Template).

---

## Phase 1: Project Setup & Planning

1.  **Initial Request:**
    *   **Prompt:** "Start a new project for a landing page website for 'Data Grid', a company focused on data integration for business analytics and AI insights. Create the necessary folder structure and files. Use HTML, CSS, and JavaScript."
    *   **Efficiency Suggestion:** Be as specific as possible upfront. Mention preferred frameworks (like Bootstrap), desired sections, and any specific features (like animations or a contact form) in the initial request.

2.  **Planning & Confirmation (if needed):**
    *   *(Assistant might ask clarifying questions or propose a plan, like selecting technologies, outlining sections, suggesting folder structure).*
    *   **Prompt (User Confirmation):** "Yes, the plan to use HTML/CSS/JavaScript with Bootstrap, including sections for Hero, Services, Benefits, Process, Case Studies, About, and Contact, looks good. Please proceed with implementation."
    *   **Efficiency Suggestion:** Review the proposed plan carefully. If the assistant is in a dedicated "Plan Mode", confirm you are ready to switch to "Act Mode" for implementation.

---

## Phase 2: Core Implementation (HTML, CSS, JS)

*(Assuming the assistant is now in an implementation/Act mode)*

1.  **Create Basic Structure & README:**
    *   **Prompt:** "Create the main project directory `LandingPage`. Inside it, create an initial `README.md` file describing the project ('Data Grid Landing Page - Data Integration & Analytics')."
    *   *(Alternatively, the assistant might create the directory automatically based on the initial request).*

2.  **Create HTML (`index.html`):**
    *   **Prompt:** "Create the `index.html` file inside `LandingPage`. Include standard HTML5 boilerplate. Link to Bootstrap 5 CSS (CDN), Font Awesome (CDN), `css/normalize.css`, and `css/style.css`. Set up the main sections using semantic HTML (`<nav>`, `<section>`, `<footer>`) with IDs corresponding to the planned sections (e.g., `#home`, `#services`, `#benefits`, `#process`, `#case-studies`, `#about`, `#contact`). Add placeholder content (headings, paragraphs) for each section based on the 'Data Grid' theme. Include a Bootstrap navbar and footer structure."
    *   **Efficiency Suggestion:** Provide the exact CDN links if you have specific versions in mind. Specify the structure of the navbar and footer if you have preferences.

3.  **Create CSS Files (`css/`):**
    *   **Prompt:** "Create a `css` directory. Inside it, create `normalize.css` (use standard Normalize.css content) and `style.css`. In `style.css`, set up basic styles, define CSS variables (`:root`) for a professional color scheme (e.g., primary blue, dark secondary, light background) and fonts (e.g., 'Inter' or similar sans-serif). Add basic styling for the main sections and include media queries for responsiveness."
    *   **Efficiency Suggestion:** Provide specific color codes or font names if you have branding guidelines.

4.  **Create JavaScript File (`js/`):**
    *   **Prompt:** "Create a `js` directory. Inside it, create `main.js`. Add JavaScript functionality for: smooth scrolling for anchor links, basic contact form validation (check for empty required fields, valid email format) and submission simulation (show a success/error message), navbar style change on scroll, and simple fade-in animations for sections on scroll using IntersectionObserver. Ensure the script runs after the DOM is loaded."
    *   **Efficiency Suggestion:** Specify the exact animation type or any other interactive features desired.

---

## Phase 3: Asset Handling (Images)

1.  **Create Image Directory & Placeholders:**
    *   **Prompt:** "Create an `images` directory. Inside it, create placeholder files for the logo (`logo.svg`), hero image (`hero-image.png`), case studies (`case-study-1.jpg`, `case-study-2.jpg`, `case-study-3.jpg`), and about section (`about-team.jpg`)."
    *   **Efficiency Suggestion:** If you have actual image assets, provide them or instruct the assistant on how to incorporate them. If creating placeholders, specify if simple blank files are okay or if basic placeholder graphics are needed (the assistant might have limitations here).
    *   *(Note: If SVG creation fails, instruct the assistant to use a text-based alternative and update HTML/CSS accordingly, as was done in the original interaction).*
    *   **Follow-up Prompt (if SVG failed):** "Update `index.html` and `css/style.css` to use a styled text element (e.g., `<span class='logo-icon'>DG</span>`) instead of `images/logo.svg` for the brand logo in the navbar and footer."

---

## Phase 4: Documentation

1.  **Update README (`README.md`):**
    *   **Prompt:** "Update `README.md` to include 'Getting Started' instructions (how to view the `index.html` file) and a 'Customization' section (explaining how to change content, images, styles via CSS variables, and JS)."

2.  **Create Architecture Document (`ARCHITECTURE.md`):**
    *   **Prompt:** "Create an `ARCHITECTURE.md` file. Document the project's overview, file structure, HTML structure, CSS approach (Bootstrap, normalize, custom styles, variables, responsiveness), JavaScript functionality, and external dependencies (CDNs)."

3.  **Create Content Template (`TEMPLATE.md`):**
    *   **Prompt:** "Create a `TEMPLATE.md` file. Structure it with Markdown headings corresponding to each section in `index.html`. Under each heading, add placeholders (e.g., `[Your Title Here]`) for all editable text content found on the page (headings, paragraphs, list items, button text, contact info, etc.). Include reminders to replace associated images."

---

## Phase 5: Verification & Completion

1.  **Verify File Structure:**
    *   **Prompt:** "List all files and directories within the `LandingPage` project directory recursively to verify the structure."

2.  **Final Check (Optional):**
    *   **Prompt:** "Open the `LandingPage/index.html` file in a web browser."

3.  **Completion:**
    *   *(Assistant should indicate completion).*

---

**General Efficiency Tips:**

*   **Combine Prompts:** Where logical, combine multiple creation steps into a single prompt (e.g., "Create the css directory and add normalize.css and an empty style.css file").
*   **Provide Content Early:** If you have specific text content, provide it when asking for HTML creation or use the `TEMPLATE.md` approach early.
*   **Iterative Refinement:** Expect to provide feedback and ask for adjustments. Clearly state what needs changing (e.g., "Change the primary color variable in `style.css` to #FF5733").
*   **Error Handling:** If a step fails (like file creation), ask the assistant to retry or suggest an alternative approach.
