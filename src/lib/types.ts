export type SortingAlgorithmType =
  | undefined
  | "Bubble Sort"
  | "Selection Sort"
  | "Insertion Sort"
  | "Merge Sort"
  | "Quick Sort"
  | "Cycle Detection"
  | "Nth Factorial"
  | "Fibonacci Sequence";

export interface SortingAlgorithmOption {
  cat: string;
  types: string[];
}

export interface SortingAlgorithmOptions {
  bruteForce: SortingAlgorithmOption;
  divideAndConquer: SortingAlgorithmOption;
  recursive: SortingAlgorithmOption;
}

export type AnimationArrayType = [number[], boolean][];
