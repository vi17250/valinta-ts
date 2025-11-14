import { KeyEnum } from "./keyPressMapper.ts";
import type { Option } from "./mod.ts";

export function useKey(options: Option[], keyEvent: KeyEnum): Option[] {
  const currentIndex = options.findIndex((option) => option.highlighted);
  
  if (keyEvent == KeyEnum.DOWN) {
    options[currentIndex].highlighted = false;
    if (currentIndex == options.length - 1) options[0].highlighted = true;
    else {
      options[currentIndex + 1].highlighted = true;
    }
  } else if (keyEvent == KeyEnum.UP) {
    options[currentIndex].highlighted = false;
    if (currentIndex == 0) options[options.length - 1].highlighted = true;
    else {
      options[currentIndex - 1].highlighted = true;
    }
  } else if (keyEvent == KeyEnum.ALL) {
    options.map((option) => option.checked = true);
  } else if (keyEvent == KeyEnum.NONE) {
    options.map((option) => option.checked = false);
  } else if (keyEvent == KeyEnum.INVERT) {
    options.map((option) => option.checked = !option.checked);
  } else if (keyEvent == KeyEnum.TOGGLE) {
    options[currentIndex].checked = !options[currentIndex].checked;
  }
  return options;
}
