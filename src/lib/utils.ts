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

export const sortingAlgorithmOptions = {
  bruteForce: {
    cat: "Brute Force",
    types: ["Bubble Sort", "Selection Sort", "Insertion Sort"],
  },
  divideAndConquer: {
    cat: "Divide and Conquer",
    types: ["Merge Sort", "Quick Sort"],
  },
  recursive: {
    cat: "Recursive",
    types: ["Cycle Detection", "Nth Factorial", "Fibonacci Sequence"],
  },
};

export const sortingAlgorithmData = {
  "Bubble Sort": {
    title: "Bubble Sort",
    desc: "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.",
    timeComplexity: {
      worstCase: "O(n^2)",
      averageCase: "O(n^2)",
      bestCase: "O(n)",
    },
  },
  "Selection Sort": {
    title: "Selection Sort",
    desc: "Selection Sort is a simple sorting algorithm that selects the smallest element from the array and swaps it with the beginning of the array.",
    timeComplexity: {
      worstCase: "O(n^2)",
      averageCase: "O(n^2)",
      bestCase: "O(n^2)",
    },
  },
  "Insertion Sort": {
    title: "Insertion Sort",
    desc: "Insertion Sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands.",
    timeComplexity: {
      worstCase: "O(n^2)",
      averageCase: "O(n^2)",
      bestCase: "O(n)",
    },
  },
  "Merge Sort": {
    title: "Merge Sort",
    desc: "Merge Sort is a comparison-based sorting algorithm that was invented by John von Neumann in 1945.",
    timeComplexity: {
      worstCase: "O(n log(n))",
      averageCase: "O(n log(n))",
      bestCase: "O(n log(n))",
    },
  },
  "Quick Sort": {
    title: "Quick Sort",
    desc: "Quick Sort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.",
    timeComplexity: {
      worstCase: "O(n^2)",
      averageCase: "O(n log(n))",
      bestCase: "O(n log(n))",
    },
  },
  "Cycle Detection": {
    title: "Cycle Detection",
    desc: "Cycle Detection is a recursive algorithm that checks if a graph has a cycle or not.",
    timeComplexity: {
      worstCase: "O(n^2)",
      averageCase: "O(n^2)",
      bestCase: "O(n)",
    },
  },
  "Nth Factorial": {
    title: "Nth Factorial",
    desc: "Nth Factorial is a recursive algorithm that calculates the factorial of a number.",
    timeComplexity: {
      worstCase: "O(n)",
      averageCase: "O(n)",
      bestCase: "O(n)",
    },
  },
  "Fibonacci Sequence": {
    title: "Fibonacci Sequence",
    desc: "Fibonacci Sequence is a recursive algorithm that calculates the nth number in the Fibonacci sequence.",
    timeComplexity: {
      worstCase: "O(n)",
      averageCase: "O(n)",
      bestCase: "O(n)",
    },
  },
};
