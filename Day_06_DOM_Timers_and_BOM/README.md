# 🌐 Day 06 - Event Loop, Advanced BOM, and Interactive DOM

### 🎯 Objectives
* Understand the difference between **Blocking Synchronous Code** and the **Asynchronous Event Loop**.
* Master **Multi-Window Interaction** (Parent/Child window data flow).
* Parse and normalize data from **URL Query Strings** (`location.search`).
* Implement interactive UI components like **Typewriter Effects** and **Circular Image Sliders**.
* Build a fully functional **Memory Game** with randomized logic.
* Detect Browser types using the **Navigator Object**.

---

### 📝 Tasks Summary

#### 0. Synchronous Blocking vs. Timers
An experiment proving how a `while` loop blocks the main thread. While the 5-second loop runs, even a `setTimeout(0)` cannot execute, demonstrating the Single-Threaded nature of JavaScript.

#### 1. Typewriter Child Window
Opens a child window and "types" a message character by character. 
* **Logic:** Uses a clever recursive strategy to handle word-by-word and char-by-char delays, automatically closing the window upon completion.

#### 2. Registration Welcome Page (Query Strings)
A dynamic welcome page that parses user info from the URL.
* **BOM Power:** Uses `location.search` to grab data, cleans it (handling `%40` for `@` and `+` for spaces), and displays it.
* **Browser Detection:** Uses `navigator.userAgent` to recommend Chrome to the user.



#### 3. Professional Image Gallery
A full-featured slider with:
* Manual navigation (Next/Prev) with boundary detection.
* **Circular Slideshow:** Automatically loops back to the start.
* Timer management to prevent multiple overlapping intervals.

#### 4. Marble Animation (Hover Control)
An animation where an "orange marble" moves along a line.
* **Interactive Feature:** The animation pauses when the user hovers over the active marble and resumes when the mouse leaves.

#### 5. Memory Game (The Final Boss)
A complete game implementation.
* **Randomization:** Uses the **Fisher-Yates Shuffle** to ensure a truly random grid every time.
* **Game State:** Tracks flipped images, compares sources, and handles "match" or "flip back" logic with a winner detection system.

---

### 💡 Technical Insights

* **Event Loop Blocking:** Task 0 is a vital lesson—never block the main thread with heavy loops, or the UI will freeze.
* **Query Normalization:** Learned that data passed via URL is encoded (e.g., spaces become `+`). My script includes a custom `normalizeUserInfo` function to clean this data.
* **State Persistence:** In the Memory Game, using `previousImage` and `currentImageStatus` variables allowed for a stable comparison logic without complex external libraries.
* **Memory Management:** Consistently used `clearTimeout` and `clearInterval` to prevent "Memory Leaks" or accelerating animations.