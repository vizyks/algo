import { runBubbleSort } from "../src/algorithms/bubbleSort";
import { AnimationArrayType } from "../src/lib/types";
import { describe, expect, it } from "vitest";

describe("Bubble Sort Algorithm", () => {
  const animations: AnimationArrayType = [];

  it("should return empty array and animations", () => {
    const array = [];

    runBubbleSort(array, animations);

    expect(array).toStrictEqual([]);
    expect(animations).toStrictEqual([]);
  });

  it("should sort an array with animations", () => {
    const array = [43, 84, 37, 70, 84];

    runBubbleSort(array, animations);

    expect(array).toStrictEqual([37, 43, 70, 84, 84]);
    expect(animations).toStrictEqual([
      [[0, 1], false],
      [[1, 2], false],
      [[1, 37], true],
      [[2, 84], true],
      [[2, 3], false],
      [[2, 70], true],
      [[3, 84], true],
      [[3, 4], false],
      [[0, 1], false],
      [[0, 37], true],
      [[1, 43], true],
      [[1, 2], false],
      [[2, 3], false],
      [[0, 1], false],
      [[1, 2], false],
      [[0, 1], false],
    ]);
  });
});
