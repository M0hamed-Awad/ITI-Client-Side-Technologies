# 🌐 Day 07 - Event-Driven Programming & Advanced Logic

### 🎯 Objectives
* Master the **JavaScript Event Object** and its properties.
* Implement **Custom Events** to trigger logic based on user inactivity.
* Intercept and modify **Default Browser Behaviors** (Context menus, Form submission).
* Deep dive into **Keyboard Events** and creating "Hotkeys" (e.g., Ctrl+F).
* Build an **Arithmetic Expression Parser** using Regular Expressions without using `eval()`.
* Manage complex form inputs and **Multiple Selection** menus.

---

### Event Interaction Model

| Event Type | Trigger | Behavior |
| :--- | :--- | :--- |
| **`contextmenu`** | Right Click | Blocked via `preventDefault()` |
| **`submit`** | Form Button | Intercepted for User Confirmation |
| **`custEvent`** | 30s Inactivity | Dispatched manually via `dispatchEvent` |
| **`keydown`** | Physical Key | Detects modifier keys (Ctrl/Alt/Shift) |

---

### 📝 Tasks Summary

#### 1. UI Security: Context Menu Prevention
Demonstrated how to restrict user interface actions by preventing the default right-click menu. Useful for custom UI overlays or basic content protection.

#### 2. Event Interception & Custom Triggers
* **Form Guard:** Implemented a confirmation step before submission to prevent accidental data loss.
* **Inactivity Monitor:** Created a **Custom Event** (`custEvent`). The script monitors all input fields; if no input is detected within 30 seconds, the event is fired. This is a common pattern for "Session Timeout" features in banking apps.



#### 3. Keyboard Event Deep-Dive
Analyzed the difference between `keydown` and `keypress`. 
* **Hotkeys:** Implemented a specific listener for `Ctrl + F` to prevent the browser's find-in-page and replace it with custom console warnings.

#### 4. The Regex Calculator (Architecture)
Instead of using the insecure `eval()` function, this task implements a robust mathematical parser.
* **MDAS Order:** The script uses Regular Expressions to identify and execute Multiplications/Divisions first, then Additions/Subtractions.
* **Validation:** Implemented a "Guard" Regex to ensure no illegal characters are processed.


#### 5. Form Control Manipulation
Managed dynamic text areas and multi-select menus. The script provides functions to "append," "erase," and "clear" data based on user interactions with form elements.

---

### 💡 Technical Insights

* **The Security of Regex over Eval:** Task 6 proves that using `RegExp.test()` and `String.replace()` is much safer than `eval()`, as it prevents the execution of malicious scripts hidden in strings.
* **Recursive SetTimeout:** Used a self-calling `setTimeout` for the inactivity timer, which is more accurate for long durations than `setInterval`.
* **Modifier Keys:** Leveraged the `.ctrlKey` and `.shiftKey` properties of the event object to create complex interaction logic.