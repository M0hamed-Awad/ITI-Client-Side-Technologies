# 🌐 Day 03 - JavaScript Fundamentals & Logic

### 🎯 Objectives
* Master **JavaScript Control Flow** (If/Else, Ternary Operators).
* Implement dynamic content generation using **Loops** (`for`, `while`).
* Perform robust **User Input Validation** using `isFinite()`, `isNaN()`, and `parseInt()`.
* Solve complex range-based problems including **Ascending and Descending** order detection.
* Practice **Nested Loops** for visual pattern printing (Star Pyramid).

---

### 📝 Tasks Summary

#### 1. Dynamic HTML Headings
Generates `<h1>` through `<h6>` tags dynamically based on user input. This demonstrates how JavaScript can influence the DOM structure without hardcoded HTML.

#### 2. Running Sum & Input Sanitization
A script that continuously accepts numbers until a stop condition is met (entering `0`, canceling, or the sum exceeding `100`).
* **Technical Highlight:** Uses strict validation to ensure only numeric values are processed, preventing logical errors from empty strings or invalid text.

#### 3. Conditional Max Finder
Accepts two numbers and identifies the maximum value using the **Ternary Operator**.
* **Logic:** `(first > second) ? first : second;`

#### 4. Advanced Divisibility Logic
Analyzes three inputs ($x, y, z$) to determine if $x$ is divisible by $y$ only, $z$ only, or both. This covers multiple conditional branches and boolean logic.

#### 5. Multiples Tracker
Calculates and displays all multiples of 3 and 5 within a user-defined range, providing a formatted list of the values and their combined total sum.

#### 6. Star Pyramid Pattern
Utilizes **Nested Loops** to print a star pattern in the console. Each row corresponds to the row number, demonstrating string accumulation within loops.


#### 7. Comprehensive Range Solver
The most advanced task of the day, handling three parameters ($x, y, z$).
* **Flexible Ordering:** Automatically detects and executes the range in **Ascending** order ($x < y$) or **Descending** order ($x > y$).
* **Filtering:** Includes specific filters for `odd`, `even`, or `no` (all) numbers.
* **Functional Programming:** Uses modular helper functions to maintain clean and readable code.

---

### 💡 Technical Insights

* **Input Handling:** Applied `parseInt()` to prompts to ensure mathematical operations are performed on integers rather than string concatenations.
* **DRY Principle:** In Task 7, a boolean flag `isAscending` was used to control the loop direction, significantly reducing code duplication for ascending vs. descending scenarios.
* **Console UI:** Leveraged string formatting to provide clear, readable output in the browser console.