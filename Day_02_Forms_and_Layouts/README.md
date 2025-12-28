# 🌐 Day 02 - HTML Forms, Tables, and Page Redirection

### 🎯 Objectives
* Implement **HTML Forms** for user authentication and data collection.
* Use **Form Validation** attributes and specialized input types (`email`, `password`, `date`).
* Master **Table-based Layouts** for complex registration forms.
* Implement **Meta Refresh** for automated page redirection.
* Use **Fieldsets and Legends** to group related form elements logically.
* Advanced CSS: Using `box-sizing: border-box` and centering block elements.

---

### 📝 Tasks Summary

#### 1. Smart Landing Page (`index.html`)
The landing page now includes a functional UX pattern:
* **Meta Refresh:** Automatically redirects users to the registration page after 5 seconds using `<meta http-equiv="refresh">`.
* **Fallback Navigation:** Allows users to bypass the timer by clicking the welcome graphic to go straight to login.

#### 2. User Authentication (`login.html`)
A clean, centered login interface.
* **Grouping:** Uses `<fieldset>` and `<legend>` for a professional border-and-title look.
* **Accessibility:** Implemented `accesskey` (u for Username, p for Password) to allow keyboard navigation.
* **Features:** Includes a "Remember me" checkbox and proper password masking.

#### 3. Advanced Registration (`registeration.html`)
A comprehensive data entry form structured within a semantic table.
* **Complex Inputs:** Includes `radio` buttons for gender, `checkboxes` for interests, and a `textarea` for bio with fixed resizing.
* **Select Menus:** Uses `<optgroup>` to categorize countries by continent, demonstrating the ability to disable specific groups (e.g., Europe).
* **Layout:** Uses `colspan` and nested tables to organize the "Interests" section cleanly.

---

### 💡 Technical Insights

* **The Box Model:** By applying `box-sizing: border-box`, I ensured that padding and borders are included in the element's total width, preventing input fields from overflowing their containers.
* **Form UX:** Used `placeholder` attributes and `label` associations (`for=""` / `id=""`) to enhance the user experience and accessibility.
* **Table Styling:** Combined `margin-left: auto` and `margin-right: auto` to perfectly center the registration form, and used `border-collapse` for a clean, single-border look.
* **Access Keys:** Demonstrated advanced accessibility by allowing users to focus on specific fields using Alt + [key] shortcuts.

---

### 🛠️ Technologies Used
* **HTML5 Forms:** Advanced input types and data grouping.
* **HTML Tables:** Used for structured data alignment and layout.
* **CSS3:** Advanced selectors, box-modeling, and fixed-layout textareas.