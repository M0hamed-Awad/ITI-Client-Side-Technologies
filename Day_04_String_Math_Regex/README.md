# 🌐 Day 04 - Strings, Math Objects, and Regular Expressions

### 🎯 Objectives
* Master **String Manipulation** and case-sensitivity logic.
* Implement **Palindrome Detection** algorithms.
* Use **Regular Expressions (Regex)** for robust data validation (Emails, Mobile, Names).
* Work with the **Math Object** for geometric and algebraic calculations.
* Explore the **Date Object** and advanced **Console Styling** (`%c`).

---

### 📝 Tasks Summary

#### 1. Character Counter (Case Sensitive Option)
A script that counts how many times a specific character appears in a string.
* **Feature:** Uses `confirm()` to let the user decide if 'A' and 'a' should be treated as the same character.

#### 2. Palindrome Checker
Determines if a word reads the same backward as forward (e.g., "RADAR").
* **Logic:** Efficiently compares characters from both ends moving towards the middle.


#### 3. Longest Word Finder
Analyzes a sentence and extracts the largest word. 
* **Mechanism:** Uses `split(" ")` to tokenize the string into an array and compares lengths. If a tie occurs, it returns the first occurrence.

#### 4. User Info & Regex Validation
The most advanced task of the day. It collects User Name, Phone, Mobile, and Email, then validates them using **Regex Patterns**.
* **Validation Rules:**
    * **Name:** Alphabetic characters only.
    * **Phone:** Exactly 8 digits.
    * **Mobile:** 11 digits starting with (010, 011, or 012).
    * **Email:** Standard email format (user@domain.com).
* **UI:** Displays the validated info in the console with **custom colors** and today's date.

#### 5. Math Lab (Area, Square Root, Cosine)
Performs three mathematical operations based on user input:
1. Calculates **Circle Area** ($Area = \pi r^2$).
2. Calculates **Square Root** of a value.
3. Calculates **Cosine** of an angle (including Degrees-to-Radians conversion).

---

### 💡 Technical Insights

* **Regex Power:** Used anchors (`^` and `$`) in Regex to ensure the entire string matches the pattern, not just a part of it.
* **Math Precision:** Applied `.toFixed()` to limit decimal places, making the output user-friendly.
* **Console Styling:** Demonstrated the use of the `%c` directive in `console.log` to apply CSS styles directly to the browser console output.
* **Input Sanitization:** Implemented a `while` loop combined with `isNaN()` and `prompt()` to force the user to enter valid numerical data.