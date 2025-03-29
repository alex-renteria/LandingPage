# Data Grid Landing Page

A professional landing page for Data Grid, a company specializing in data integration to leverage business analytics and AI insights.

## Project Structure

```
LandingPage/
├── README.md
├── index.html
├── css/
│   ├── style.css
│   └── normalize.css
├── js/
│   └── main.js
├── images/
│   └── logo.svg
└── assets/
    └── fonts/
```

## Features

- Responsive design
- Modern and professional layout
- Sections highlighting Data Grid's services and expertise
- Contact information

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap for responsive design

## Getting Started

To view the landing page, simply open the `index.html` file in your web browser. No build steps or local server are required for basic viewing.

## Customization

You can customize the landing page as follows:

-   **Content:** Edit the text directly within the `index.html` file. Each section (Hero, Services, About, etc.) is clearly marked with HTML comments.
-   **Images:** Replace the placeholder images in the `images/` directory with your own. Ensure the filenames match or update the `src` attributes in `index.html`. The current placeholders are:
    -   `images/hero-image.png`
    -   `images/case-study-1.jpg`
    -   `images/case-study-2.jpg`
    -   `images/case-study-3.jpg`
    -   `images/about-team.jpg`
    -   `images/logo.svg` (or update the `.logo-icon` style in `css/style.css` if using the text-based logo)
-   **Styling:** Modify the visual appearance in `css/style.css`. Key aspects include:
    -   **Colors & Fonts:** Update the CSS variables defined in the `:root` block at the top of the file.
    -   **Layout:** Adjust Bootstrap classes in `index.html` or modify custom layout rules in `style.css`.
    -   **Responsiveness:** Tweak the media queries at the end of `style.css` if needed.
-   **Functionality:** Adjust interactive behavior in `js/main.js`. This includes smooth scrolling, form handling logic, and animations.
