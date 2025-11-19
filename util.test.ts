import { assertEquals } from "@std/assert";
import { array } from "./util.ts";
import { numberOfLines } from "./util.ts";

// Array
Deno.test(function it_return_same_array() {
  // Given
  const input = [1, 2, 3];

  // When
  const offsetted = array(input, 0);

  // Then
  assertEquals(offsetted, [1, 2, 3]);
});

Deno.test(function it_offset_array_from_one() {
  // Given
  const input = [1, 2, 3];

  // When
  const offsetted = array(input, 1);

  // Then
  assertEquals(offsetted, [2, 3, 1]);
});

Deno.test(function it_offset_array_from_two() {
  // Given
  const input = ["a", "b", "c", "d"];

  // When
  const offsetted = array(input, 2);

  // Then
  assertEquals(offsetted, ["c", "d", "a", "b"]);
});

Deno.test(function it_offset_array_from_three() {
  // Given
  const input = ["a", "b", "c", "d"];

  // When
  const offsetted = array(input, 3);

  // Then
  assertEquals(offsetted, ["d", "a", "b", "c"]);
});

Deno.test(function it_offset_array_by_revert() {
  // Given
  const input = ["a", "b", "c", "d"];

  // When
  const offsetted = array(input, -1);

  // Then
  assertEquals(offsetted, ["d", "a", "b", "c"]);
});

Deno.test(function it_split_and_offset_array_from_three() {
  // Given
  const input = ["a", "b", "c", "d"];

  // When
  const offsetted = array(input, 3, 2);

  // Then
  assertEquals(offsetted, ["d", "a"]);
});

// Number of lines
Deno.test(function it_returns_one() {
  // Given
  const input = "Une simple ligne";
  const width = 30;

  // When
  const number = numberOfLines(input, width);

  // Then
  assertEquals(number, 1);
});

Deno.test(function it_returns_two() {
  // Given
  const input = "Une simple ligne\nEt une autre";
  const width = 30;

  // When
  const number = numberOfLines(input, width);

  // Then
  assertEquals(number, 2);
});

Deno.test(function it_returns_three() {
  // Given
  const input = "14 char length\n14 char length";
  const width = 10;

  // When
  const number = numberOfLines(input, width);

  // Then
  assertEquals(number, 4);
});
