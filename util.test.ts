import { assertEquals } from "@std/assert";
import { array } from "./util.ts";
import { numberOfLines } from "./util.ts";

// Array
Deno.test(function it_return_same_array() {
  const input = [1, 2, 3];
  assertEquals(array(input, 0), [1, 2, 3]);
});

Deno.test(function it_offset_array_from_one() {
  const input = [1, 2, 3];
  assertEquals(array(input, 1), [2, 3, 1]);
});

Deno.test(function it_offset_array_from_two() {
  const input = ["a", "b", "c", "d"];
  assertEquals(array(input, 2), ["c", "d", "a", "b"]);
});

Deno.test(function it_offset_array_from_three() {
  const input = ["a", "b", "c", "d"];
  assertEquals(array(input, 3), ["d", "a", "b", "c"]);
});

Deno.test(function it_offset_array_by_revert() {
  const input = ["a", "b", "c", "d"];
  assertEquals(array(input, -1), ["d", "a", "b", "c"]);
});

Deno.test(function it_split_and_offset_array_from_three() {
  const input = ["a", "b", "c", "d"];
  assertEquals(array(input, 3, 2), ["d", "a"]);
});

// Number of lines
Deno.test(function it_returns_one() {
  const input = "Une simple ligne";
  const width = 30;
  assertEquals(numberOfLines(input, width), 1);
});

Deno.test(function it_returns_two() {
  const input = "Une simple ligne\nEt une autre";
  const width = 30;
  assertEquals(numberOfLines(input, width), 2);
});

Deno.test(function it_returns_three() {
  const input = "14 char length\n14 char length";
  const width = 10;
  assertEquals(numberOfLines(input, width), 4);
});
