import { assertEquals } from "@std/assert";
import { useKey } from "./useKey.ts";
import { KeyEnum } from "./keyPressMapper.ts";
import type { Option } from "./mod.ts";

Deno.test(function it_highlight_next_option() {
  //Given
  const input: Option[] = [{
    checked: false,
    highlighted: true,
    value: "a",
  }, {
    checked: false,
    highlighted: false,
    value: "b",
  }];
  const expected: Option[] = [{
    checked: false,
    highlighted: false,
    value: "a",
  }, {
    checked: false,
    highlighted: true,
    value: "b",
  }];

  // When
  const action = useKey(input, KeyEnum.DOWN);

  // Then
  assertEquals(action, expected);
});
Deno.test(function it_highlight_first_option() {
  const input: Option[] = [{
    checked: false,
    highlighted: false,
    value: "a",
  }, {
    checked: false,
    highlighted: true,
    value: "b",
  }];
  const expected: Option[] = [{
    checked: false,
    highlighted: true,
    value: "a",
  }, {
    checked: false,
    highlighted: false,
    value: "b",
  }];
  assertEquals(useKey(input, KeyEnum.DOWN), expected);
});
Deno.test(function it_highlight_previous_option() {
  const input: Option[] = [{
    checked: false,
    highlighted: false,
    value: "a",
  }, {
    checked: false,
    highlighted: true,
    value: "b",
  }];
  const expected: Option[] = [{
    checked: false,
    highlighted: true,
    value: "a",
  }, {
    checked: false,
    highlighted: false,
    value: "b",
  }];
  assertEquals(useKey(input, KeyEnum.UP), expected);
});
Deno.test(function it_highlight_last_option() {
  const input: Option[] = [{
    checked: false,
    highlighted: true,
    value: "a",
  }, {
    checked: false,
    highlighted: false,
    value: "b",
  }];
  const expected: Option[] = [{
    checked: false,
    highlighted: false,
    value: "a",
  }, {
    checked: false,
    highlighted: true,
    value: "b",
  }];
  assertEquals(useKey(input, KeyEnum.UP), expected);
});
Deno.test(function it_checks_all() {
  const input: Option[] = [{
    checked: true,
    highlighted: true,
    value: "a",
  }, {
    checked: false,
    highlighted: false,
    value: "b",
  }, {
    checked: false,
    highlighted: false,
    value: "c",
  }];
  const expected: Option[] = [{
    checked: true,
    highlighted: true,
    value: "a",
  }, {
    checked: true,
    highlighted: false,
    value: "b",
  }, {
    checked: true,
    highlighted: false,
    value: "c",
  }];
  assertEquals(useKey(input, KeyEnum.ALL), expected);
});
Deno.test(function it_checks_nothing() {
  const input: Option[] = [{
    checked: true,
    highlighted: true,
    value: "a",
  }, {
    checked: true,
    highlighted: false,
    value: "b",
  }, {
    checked: false,
    highlighted: false,
    value: "c",
  }];
  const expected: Option[] = [{
    checked: false,
    highlighted: true,
    value: "a",
  }, {
    checked: false,
    highlighted: false,
    value: "b",
  }, {
    checked: false,
    highlighted: false,
    value: "c",
  }];
  assertEquals(useKey(input, KeyEnum.NONE), expected);
});
Deno.test(function it_inverts_checked_options() {
  const input: Option[] = [{
    checked: true,
    highlighted: true,
    value: "a",
  }, {
    checked: true,
    highlighted: false,
    value: "b",
  }, {
    checked: false,
    highlighted: false,
    value: "c",
  }];
  const expected: Option[] = [{
    checked: false,
    highlighted: true,
    value: "a",
  }, {
    checked: false,
    highlighted: false,
    value: "b",
  }, {
    checked: true,
    highlighted: false,
    value: "c",
  }];
  assertEquals(useKey(input, KeyEnum.INVERT), expected);
});
Deno.test(function it_toggle_option() {
  const input: Option[] = [{
    checked: true,
    highlighted: true,
    value: "a",
  }, {
    checked: true,
    highlighted: false,
    value: "b",
  }, {
    checked: false,
    highlighted: false,
    value: "c",
  }];
  const expected: Option[] = [{
    checked: false,
    highlighted: true,
    value: "a",
  }, {
    checked: true,
    highlighted: false,
    value: "b",
  }, {
    checked: false,
    highlighted: false,
    value: "c",
  }];
  assertEquals(useKey(input, KeyEnum.TOGGLE), expected);
});
