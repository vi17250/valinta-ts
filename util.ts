import { trimAndParse } from "@lambdalisue/ansi-escape-code";

export function array<T>(values: T[], offset: number, length = 0): T[] {
  const revertOffset = offset < 0 && values.length + offset;
  return values.map((_, index, items) => {
    if ((revertOffset || offset) + index < items.length) {
      return items[(revertOffset || offset) + index];
    } else {
      const delta = (revertOffset || offset) + index - items.length;
      return items[delta];
    }
  }).slice(0, length || values.length);
}

export function numberOfLines(content: string, maxWidth: number): number {
  const t = content.split("\n").reduce((acc, content) => {
    const [trimmed, _] = trimAndParse(content);

    const len = Math.floor(trimmed.length / maxWidth) + 1;
    return acc + len;
  }, 0);
  return t;
}
