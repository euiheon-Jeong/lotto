# Lotto Number Generator Blueprint

## Overview
A modern, vibrant web application that generates random lotto numbers. Users can click a button to receive 5 sets of 6 unique numbers between 1 and 45. Now supports both Dark and Light modes.

## Current State & Features
- Initial setup with basic HTML, CSS, and JS structure.
- Responsive design principles.
- Modern aesthetic with interactive elements.
- **New:** Dark/Light mode toggle with persistence.

## Implementation Plan
1.  **UI Development (`index.html`):**
    - Add a mode toggle button in the header or top corner.
    - Use an icon (Sun/Moon) for visual feedback.
2.  **Styling (`style.css`):**
    - Define dark mode color variables using a data attribute or class (e.g., `[data-theme='dark']`).
    - Ensure all elements (container, balls, text) adapt correctly to the theme.
    - Add smooth transitions for theme switching.
3.  **Logic (`main.js`):**
    - Implement theme toggle logic.
    - Save the user's theme preference to `localStorage`.
    - Apply the saved theme on page load.

## Action Steps
- [x] Update `index.html` with the new structure.
- [x] Implement modern CSS in `style.css`.
- [x] Add lotto generation logic in `main.js`.
- [x] Verify functionality and responsiveness.
- [x] Add Dark/Light mode toggle to UI.
- [x] Implement theme styles in CSS.
- [x] Add theme persistence logic in JS.
- [ ] Push changes to Git.
