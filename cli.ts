import { Terminal } from "@neabyte/deno-ansi";
import { keypress } from "@cliffy/keypress";
import type { KeyPressEvent } from "@cliffy/keypress";

export async function getwidth(): Promise<number> {
  const { width } = await Terminal.getSize();
  return width;
}

export async function display(options: string[]) {
  for (const option of options) {
    const encoder = new TextEncoder();
    const data = encoder.encode(option);
    const newLine = encoder.encode("\n");
    await Deno.stdout.write(data);
    await Deno.stdout.write(newLine);
  }
}

export async function keyPressEvent(): Promise<string | undefined> {
  const { key }: KeyPressEvent = await keypress();
  return key;
}
