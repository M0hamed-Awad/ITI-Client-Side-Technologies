# 🌐 Day 01 - HTML5 Structure & CSS Basics

### 🎯 Objectives
* Master fundamental **HTML5 tags** for document structure.
* Implement **Nested Lists** (Ordered and Unordered) for content hierarchy.
* Use **Image Mapping** to create interactive, multi-link images.
* Introduce **External CSS** for separation of concerns (Content vs. Presentation).
* Handle navigation between local pages using relative paths.

---

### 📝 Tasks Summary

#### 1. Home Page (`index.html`)
The entry point of the site. It features a centered welcome animation that acts as a portal to the main content.
* **Key Concept:** Using `<a>` tags around `<img>` to create graphical links.

#### 2. Content & Formatting (`main.html`)
A showcase of text hierarchy and list nesting.
* **Lists:** Implemented unordered lists containing nested ordered categories (Roman numerals).
* **Formatting:** Demonstrated various text styles including **Bold**, *Italic*, and <u>Underline</u>.
* **Styling:** Used external CSS classes to apply specific colors (`.red-text`).

#### 3. Interactive Social Media Map (`contact_us.html`)
A specialized page focusing on interactive UI elements.
* **Image Maps:** Used the `<map>` and `<area>` tags to define clickable coordinate regions on a single image.
* **Functionality:** Redirects users to Facebook, YouTube, WhatsApp, LinkedIn, Instagram, and X (Twitter) using a single asset.
* **Mail Integration:** Implemented the `mailto:` protocol for direct email communication.

---

### 💡 Technical Insights

* **Image Mapping:** Coordination-based mapping (`coords`) allows a single graphic to serve as a navigation hub. This is an efficient way to handle complex UI layouts without multiple separate image files.
* **Separation of Concerns:** By moving styles into `style.css`, the HTML remains "semantic" (describing what the content is), while the CSS handles "layout" (describing how it looks).
* **Relative Pathing:** Mastered the use of `../` to navigate directory levels, ensuring the project remains portable and works in any environment.

---

### 🛠️ Technologies Used
* **HTML5:** Semantic structure and interactive mapping.
* **CSS3:** Text alignment, decoration, and class-based styling.
* **Graphic Assets:** Handled `.gif`, `.png`, and `.jpg` integration.