import type { Option } from "./mod.ts";
import { Colors } from "@neabyte/deno-ansi";

export function format(options: Option[]): string[] {
  return options.map((option) => {
    const checked = option.checked ? "[x]" : "[ ]";
    const value = `${checked} ${option.value}`;
    return option.highlighted
      ? Colors.bgRgb(value as string, 85, 170, 85)
      : value;
  });
}
