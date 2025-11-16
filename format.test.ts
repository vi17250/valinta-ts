import { Colors } from "@neabyte/deno-ansi";
import { assertEquals } from "@std/assert";

import type { Option } from "./mod.ts";
import { format } from "./format.ts";

Deno.test(function it_returns_nothing_checked() {
  const input: Option[] = [{
    checked: false,
    highlighted: true,
    value: "a",
  }, {
    checked: false,
    highlighted: false,
    value: "b",
  }];

  const expected: string[] = [`${Colors.bgRgb(`[ ] a`, 85, 170, 85)}`, "[ ] b"];
  assertEquals(format(input), expected);
});

Deno.test(function it_returns_first_value_checked() {
  const input: Option[] = [{
    checked: true,
    highlighted: true,
    value: "a",
  }, {
    checked: false,
    highlighted: false,
    value: "b",
  }];

  const expected: string[] = [`${Colors.bgRgb(`[x] a`, 85, 170, 85)}`, "[ ] b"];
  assertEquals(format(input), expected);
});

Deno.test(function it_returns_second_value_checked() {
  const input: Option[] = [{
    checked: false,
    highlighted: true,
    value: "a",
  }, {
    checked: true,
    highlighted: false,
    value: "b",
  }];

  const expected: string[] = [`${Colors.bgRgb(`[ ] a`, 85, 170, 85)}`, "[x] b"];
  assertEquals(format(input), expected);
});
