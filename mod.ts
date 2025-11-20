/**
 * A tool for multiple selection in CLI
 * Written for Deno runtime ⭐
 * @module
 */

import { array, numberOfLines } from "./util.ts";
import { display, getwidth, keyPressEvent } from "./cli.ts";
import { KeyEnum, keyPressMapper } from "./keyPressMapper.ts";
import { useKey } from "./useKey.ts";
import { Cursor, Terminal } from "@neabyte/deno-ansi";
import { format } from "./format.ts";

/**
 * An interface that describe the data used in this lib
 */
export interface Option {
  checked: boolean;
  highlighted: boolean;
  value: string;
}

/**
 * The number of lines rendered in the terminal
 */
const numberToRender: number = 11;

/**
 * Calls the library, display the data passed as argument and allows the user to select some of it
 * @param {string[]} values to display
 * @returns {Promise<string[]>} values selected
 */
export async function Select(values: string[]): Promise<string[]> {
  let options: Option[] = values.map((value: string, index: number) => {
    const highlighted = index == 0;

    return { checked: false, highlighted, value };
  });

  let currentPosition = options.length < numberToRender
    ? 0
    : options.findIndex((option) => option.highlighted);

  let renderedOptions = array(options, currentPosition, numberToRender);
  display(format(renderedOptions));

  while (true) {
    const keyPressed = await keyPressEvent();
    const key: KeyEnum = keyPressMapper(keyPressed);
    if (key === KeyEnum.ESC) Deno.exit(0);
    if (key === KeyEnum.ENTER) break;

    const terminalWidth: number = await getwidth();

    const renderedLines = renderedOptions.reduce(
      (acc, option) => acc + numberOfLines(option.value, terminalWidth),
      0,
    );

    Cursor.moveUp(renderedLines);
    Terminal.clearToEnd();

    options = useKey(options, key);

    currentPosition = options.length < numberToRender
      ? 0
      : options.findIndex((option) => option.highlighted);

    renderedOptions = array(options, currentPosition, numberToRender);

    display(format(renderedOptions));
  }

  return options.filter((option) => option.checked).map((option) =>
    option.value
  );
}
