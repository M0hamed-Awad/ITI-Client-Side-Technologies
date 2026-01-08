# 🌐 Day 08 - Cookies Library & Advanced Error Handling

### 🎯 Objectives
* Build a custom **Cookie Library** to manage browser state (CRUD operations).
* Implement **Persistent State** across multiple pages (Registration → Profile).
* Master **Error Handling** and custom Exceptions using `throw Error` and `TypeError`.
* Utilize the `arguments` object for strict function parameter validation.
* Manage user preferences (Themes, Greetings, Visit Counts) without a backend.

---

### Implementation Workflow

| Component | Technical Implementation | Purpose |
| :--- | :--- | :--- |
| **CookiesLib.js** | Wrapper functions for `document.cookie` | Abstraction and ease of use. |
| **Visit Tracker** | `parseInt(getCookie()) + 1` | Calculating recurring user visits. |
| **Strict Params** | `arguments.length` validation | Ensuring API reliability and preventing misuse. |
| **Type Guarding** | `typeof === 'number'` | Preventing logical errors during calculations. |



---

### 📝 Tasks Summary

#### 1. The Cookie Library System
A complete system for managing user sessions locally.
* **CookiesLib.js:** A modular library providing functions to `set`, `get`, `delete`, and check for cookies. It includes built-in validation to ensure parameters are valid strings.
* **Registration Page:** A formless (No `<form>` tag) implementation that captures user data and saves it into persistent cookies.
* **Profile Page:** A dynamic greeting page that retrieves user data (Name, Gender, Favorite Color) and the site visit count to provide a personalized UI experience.



#### 2. Parameter Validation
Focuses on making functions "Bulletproof" by throwing exceptions when called incorrectly.
* **Strict Parameter Count:** A function that strictly requires exactly 2 parameters, throwing an error if the count is higher or lower.
* **Math Logic Guarding:** An `add()` function that handles 'n' numbers but enforces numeric-only inputs and ensures the function isn't called empty.

---

### 💡 Technical Insights

* **Library Abstraction:** By creating `CookiesLib.js`, I followed the **DRY (Don't Repeat Yourself)** principle, allowing any page in the project to manage cookies with simple one-line calls.
* **Security & Validation:** Throwing `TypeError` and `Error` is a professional way to debug; it stops the execution before faulty data causes hard-to-track bugs.
* **State Persistence:** Learned that `location.replace` is better for redirects after registration because it doesn't keep the registration page in the browser history.
* **Encoding:** Used `encodeURIComponent` and `decodeURIComponent` in the library to handle special characters in cookie values safely.