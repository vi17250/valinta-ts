import { assertEquals } from "@std/assert";

import { KeyEnum, keyPressMapper } from "./keyPressMapper.ts";

Deno.test(function it_returns_values_of_keyEnum() {
assertEquals(keyPressMapper('return'), KeyEnum.ENTER)
assertEquals(keyPressMapper('escape'), KeyEnum.ESC)
assertEquals(keyPressMapper('q'), KeyEnum.ESC)
assertEquals(keyPressMapper('down'), KeyEnum.DOWN)
assertEquals(keyPressMapper('up'), KeyEnum.UP)
assertEquals(keyPressMapper('space'), KeyEnum.TOGGLE)
assertEquals(keyPressMapper('n'), KeyEnum.NONE)
assertEquals(keyPressMapper('i'), KeyEnum.INVERT)
assertEquals(keyPressMapper('a'), KeyEnum.ALL)
assertEquals(keyPressMapper('WTF'), KeyEnum.NULL)
})