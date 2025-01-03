import { AnimationArrayType } from "../lib/types";

export function runBubbleSort(array: number[], animations: AnimationArrayType) {
  // Prevents repeated length lookups during the loop process
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      // Highlight two elements being compared and sorted [[index of line, index of line], false]
      animations.push([[j, j + 1], false]);

      // Compare values
      if (array[j] > array[j + 1]) {
        // Swap heights [[index of line, new height], true]
        animations.push([[j, array[j + 1]], true]);
        animations.push([[j + 1, array[j]], true]);

        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
}

export function generateBubbleSortArrayAnimation(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return;

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  runBubbleSort(auxiliaryArray, animations);
  runAnimation(animations);
}
