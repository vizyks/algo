import { generateBubbleSortArrayAnimation } from "../algorithms/bubbleSort";
import { AnimationArrayType, SortingAlgorithmType } from "./types";

export const MIN_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 400;

export function generateRandomNumberFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateAnimationArray(
  selectedAlgorithm: SortingAlgorithmType,
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  switch (selectedAlgorithm) {
    case "Bubble Sort":
      generateBubbleSortArrayAnimation(isSorting, array, runAnimation);
      break;
    default:
      break;
  }
}
