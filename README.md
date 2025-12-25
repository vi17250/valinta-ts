# valinta-ts

> valinta means _"Select"_ in Finnish

**Checkboxes in CLI for [Deno](https://deno.com/) runtime 🦕**

## 📚 Installation

```bash
deno add jsr:@vi17250/valinta-ts
```

## 👩‍💻 Usage

```ts
import { Select } from "@valinta-ts";

const animals: string[] = [
  "🦍 gorilla",
  "🐐 goat",
  "🐝 honeybee",
  "🐗 boar",
  "🐬 dolphin",
];

const selected_animals = await Select(animals);
```

## ⌨️ Commands

| Key      | Action           |
| -------- | ---------------- |
| `up`     | move to previous |
| `bottom` | move to next     |
| `space`  | toggle           |
| `enter`  | valide           |
| `esc`    | exit             |
| `a`      | select all       |
| `n`      | remove all       |
| `i`      | invert           |
