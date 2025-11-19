# valinta-ts

Checkboxes in CLI for Deno runtime 🦕

> valinta means _"Select"_ in Finnish

## Example

![valinta-ts](https://github.com/user-attachments/assets/5f1a7dbf-7385-4e70-9b34-a7357a9a4e62)

## Basic usage

```ts
const animals: string[] = [
  "🦍 gorilla",
  "🐐 goat",
  "🐝 honeybee",
  "🐗 boar",
  "🐬 dolphin",
];

const selected_animals = await Select(animals);
console.log(selected_animals);
```

## Commands

| Key    | Action           |
| ------ | ---------------- |
| up     | move to previous |
| bottom | move to next     |
| space  | toggle           |
| enter  | valide           |
| esc    | exit             |
| a      | select all       |
| n      | remove all       |
| i      | invert           |
