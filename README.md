# PlayBlocks (Blocks++)

**PlayBlocks** is the user-facing ecosystem for **Blocks++**, a high-performance, block-based programming environment created by **Leovanni**. It bridges the gap between visual drag-and-drop programming and raw native performance by transpiling visual blocks directly into clean C++ source code.

---

## Key Features

* **Visual-to-Native Transpilation:** Snap blocks together on an intuitive canvas and instantly generate optimized C++ logic.
* **The Code Shower:** A live code inspector displaying underlying C++ syntax in real time.
* **JSON + JS DSL Extensions:** Easily build and load custom blocks using lightweight JavaScript mapping and JSON definitions.
* **Native Compilation:** Compile your projects directly into standalone binaries.

---

## Project Structure

```text
PlayBlocks/
│
├── core/                # C++ transpiler and compiler integration backend
├── editor/              # Node.js / JavaScript visual block canvas UI
├── extensions/          # JSON/JS DSL extension templates and examples
├── build/               # Compiled binary outputs (ignored by Git)
├── LICENSE              # Blocks++ License (B++L)
└── README.md            # Project documentation
