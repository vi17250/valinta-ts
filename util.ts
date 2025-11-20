/**
 * A modules that offers several utilities
 * @module
 */

import { trimAndParse } from "@lambdalisue/ansi-escape-code";

/**
 * Returns the original array but offsetted by the `offset param`,
 * @param {T[]}values
 * @param {number} offset
 * @param {number} length [length = values.length] It's possible to slice the result
 * @returns {T[]}
 */
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

/**
 * Returns the number of lines needed based on the width parameter
 * @param {string} content 
 * @param {number} maxWidth 
 * @returns {number}
 */
export function numberOfLines(content: string, maxWidth: number): number {
  return content.split("\n").reduce((acc, content) => {
    const [trimmed, _] = trimAndParse(content);

    const len = Math.floor(trimmed.length / maxWidth) + 1;
    return acc + len;
  }, 0);
}
