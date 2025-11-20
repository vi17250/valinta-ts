/**
 * A module that formats options to be displayed
 * @module
 */
import type { Option } from "./mod.ts";
import { Colors } from "@neabyte/deno-ansi";

/**
 * For each options, add checkbox and highlights the current option
 * @param {Option[]} options
 * @returns {string[]}
 */

export function format(options: Option[]): string[] {
  return options.map((option) => {
    const checked = option.checked ? "[x]" : "[ ]";
    const value = `${checked} ${option.value}`;
    return option.highlighted
      ? Colors.bgRgb(value as string, 85, 170, 85)
      : value;
  });
}
