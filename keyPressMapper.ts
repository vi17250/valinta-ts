import { keypress } from "@cliffy/keypress";
import type { KeyPressEvent } from "@cliffy/keypress";

export enum KeyEnum {
  UP,
  DOWN,
  ALL,
  NONE,
  INVERT,
  ESC,
  ENTER,
  TOGGLE,
  NULL,
}

export async function keyPress(): Promise<KeyEnum> {
  const { key }: KeyPressEvent = await keypress();
  let result;
  switch (key) {
    case "return":
      result = KeyEnum.ENTER;
      break;
    case "escape":
      result = KeyEnum.ESC;
      break;
    case "q":
      result = KeyEnum.ESC;
      break;
    case "down":
      result = KeyEnum.DOWN;
      break;
    case "up":
      result = KeyEnum.UP;
      break;
    case "space":
      result = KeyEnum.TOGGLE;
      break;
    case "n":
      result = KeyEnum.NONE;
      break;
    case "i":
      result = KeyEnum.INVERT;
      break;
    case "a":
      result = KeyEnum.ALL;
      break;
    default:
      result = KeyEnum.NULL;
  }
  return result;
}
