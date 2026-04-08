# Lotto Number Generator Blueprint

## Overview
A modern, vibrant web application that generates random lotto numbers. Users can click a button to receive 5 sets of 6 unique numbers between 1 and 45. Now supports both Dark and Light modes, and includes an affiliate inquiry form.

## Current State & Features
- Initial setup with basic HTML, CSS, and JS structure.
- Responsive design principles.
- Modern aesthetic with interactive elements.
- Dark/Light mode toggle with persistence.
- **New:** Affiliate inquiry form powered by Formspree.

## Implementation Plan
1.  **UI Development (`index.html`):**
    - Add a "Contact Us" or "Affiliate Inquiry" section below the results.
    - Create a form with fields for Name, Email, and Message.
    - Set the form action to the provided Formspree endpoint.
2.  **Styling (`style.css`):**
    - Style the form to match the modern aesthetic.
    - Ensure form inputs and labels adapt to both light and dark themes.
    - Add focus states and hover effects for form elements.
3.  **Logic (`main.js`):**
    - Simple client-side validation provided by HTML5 attributes.

## Action Steps
- [x] Update `index.html` with the new structure.
- [x] Implement modern CSS in `style.css`.
- [x] Add lotto generation logic in `main.js`.
- [x] Verify functionality and responsiveness.
- [x] Add Dark/Light mode toggle to UI.
- [x] Implement theme styles in CSS.
- [x] Add theme persistence logic in JS.
- [x] Add Affiliate Inquiry Form to `index.html`.
- [x] Style the inquiry form in `style.css`.
- [ ] Push changes to Git.
