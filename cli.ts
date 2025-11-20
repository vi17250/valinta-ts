/**
 * Some tools for communicating with the stdout
 * @module
 */

import { Terminal } from "@neabyte/deno-ansi";
import { keypress } from "@cliffy/keypress";
import type { KeyPressEvent } from "@cliffy/keypress";

/**
 * Returns the width of the terminal
 * @returns {Promise<number>} A promise that resolves the width of the terminal
 */

export async function getwidth(): Promise<number> {
  const { width } = await Terminal.getSize();
  return width;
}

/**
 * Displays z list of strings in the terminal
 * @param {string[]} options The options to display
 */

export async function display(options: string[]) {
  for (const option of options) {
    const encoder = new TextEncoder();
    const data = encoder.encode(option);
    const newLine = encoder.encode("\n");
    await Deno.stdout.write(data);
    await Deno.stdout.write(newLine);
  }
}

/**
 * Returns key pressed by the user
 * @returns {Promise<number>}
 */
export async function keyPressEvent(): Promise<string | undefined> {
  const { key }: KeyPressEvent = await keypress();
  return key;
}
