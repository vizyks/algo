import BubbleSort from "../src/algorithms/BubbleSort";
import { describe, expect, it } from "vitest";

describe("Bubble Sort Algorithm", () => {
  it("should return empty array if array is empty", () => {
    expect(BubbleSort([])).toStrictEqual([]);
  });
  it("should sort an array", () => {
    expect(BubbleSort([5, 3, 1, 2, 4])).toStrictEqual([1, 2, 3, 4, 5]);
  });
  it("should sort an array with duplicate values", () => {
    expect(BubbleSort([5, 3, 1, 2, 4, 5, 3, 1, 2, 4])).toStrictEqual([
      1, 1, 2, 2, 3, 3, 4, 4, 5, 5,
    ]);
  });
});
