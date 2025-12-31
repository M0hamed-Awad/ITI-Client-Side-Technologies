# 🌐 Day 05 - JavaScript BOM & Object Manipulation

### 🎯 Objectives
* Implement **Numerical Sorting** on user-defined arrays using custom compare functions.
* Master the creation and manipulation of **JavaScript Objects**.
* Deep dive into the **Browser Object Model (BOM)** for multi-window communication.
* Create animations using **Asynchronous Timers** (`setTimeout` & `setInterval`).
* Handle window positioning and scrolling based on **Screen Geometry**.

---

### 📝 Tasks Summary

#### 1. Numeric Array Sorting
Solved the common JavaScript limitation where `.sort()` defaults to string sorting. By providing a numeric compare function, this task correctly handles arrays of any size and sorts them in both ascending and descending order.

#### 2. Address Object & Date Formatting
A practical exercise in object property access. The script takes an address object and formats it into a human-readable string while injecting a dynamic registration date using the `Date` object.

#### 3. Dynamic Property Access Utility
Demonstrates the difference between **dot notation** and **bracket notation**. This function allows accessing object values using a string key, which is a fundamental concept for building dynamic data-driven applications.

#### 4. The Flying Window (Animation Logic)
An advanced BOM task that creates a bouncing window effect.
* **Logic:** Uses coordinate tracking and direction reversal (`-1` multiplier) when the window hits the edge of the user's available screen area.
* **Control:** The parent window can start and stop the animation using timer references.



#### 5. Scrollable Ad Window
Demonstrates programmatic control of a window's scroll state. Once the child window is opened, it automatically triggers a smooth vertical scroll to the bottom of its content.

---

### 💡 Technical Insights

* **The Sorting Trap:** In Task 1, I ensured that `Number(input)` was used so that the sorting algorithm works on integers rather than strings.
* **Timer Precision:** Used `setTimeout` recursively for Task 4. This is often more reliable than `setInterval` for complex animations as it ensures one move is finished before the next one starts.
* **Boundary Math:** To prevent the flying window from getting stuck, I used `scHeight - childWindowSize` to account for the window's own dimensions during the bounce check.