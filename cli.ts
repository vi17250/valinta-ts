import { Colors } from "@neabyte/deno-ansi";
import { Terminal } from "@neabyte/deno-ansi";

import { Option } from "./main.ts";

export async function getwidth(): Promise<number> {
  const { width } = await Terminal.getSize();
  return width;
}

export async function display(options: Option[]) {
  for (const option of options) {
    const checked = option.checked ? "[x]" : "[ ]";
    const value = `${checked} ${option.value}`;
    const raw = option.highlighted
      ? Colors.bgRgb(value as string, 85, 170, 85)
      : value;
    const encoder = new TextEncoder();
    const data = encoder.encode(raw);
    const newLine = encoder.encode("\n");
    await Deno.stdout.write(data);
    await Deno.stdout.write(newLine);
  }
}
