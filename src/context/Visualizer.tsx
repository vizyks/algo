import { createContext, useContext, useEffect, useState } from "react";
import { AnimationArrayType, SortingAlgorithmType } from "../lib/types";
import {
  generateRandomNumberFromInterval,
  MAX_ANIMATION_SPEED,
} from "../lib/utils";

interface SortingAlgorithmContextType {
  arrayToSort: number[];
  setArrayToSort: (array: number[]) => void;
  selectedAlgorithm: SortingAlgorithmType;
  setSelectedAlgorithm: (algorithm: SortingAlgorithmType) => void;
  isSorting: boolean;
  setIsSorting: (isSorting: boolean) => void;
  animationSpeed: number;
  setAnimationSpeed: (speed: number) => void;
  isAnimationComplete: boolean;
  setIsAnimationComplete: (isAnimationComplete: boolean) => void;
  resetArrayAndAnimation: () => void;
  runAnimation: (animations: AnimationArrayType) => void;
  requiresReset: boolean;
}

const SortingAlgorithmContext = createContext<
  SortingAlgorithmContextType | undefined
>(undefined);

export const SortingAlgorithmProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [arrayToSort, setArrayToSort] = useState<number[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] =
    useState<SortingAlgorithmType>("Bubble Sort");
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [animationSpeed, setAnimationSpeed] =
    useState<number>(MAX_ANIMATION_SPEED);
  const [isAnimationComplete, setIsAnimationComplete] =
    useState<boolean>(false);

  const requiresReset = isAnimationComplete || isSorting;

  useEffect(() => {
    resetArrayAndAnimation();

    /* Auto resize array based on resizing of window
    window.addEventListener("resize", resetArrayAndAnimation);

    return () => {
      window.removeEventListener("resize", resetArrayAndAnimation);
    };
    */
  }, []);

  const resetArrayAndAnimation = () => {
    const contentContainer = document.getElementById("content-container");
    if (!contentContainer) return;

    const contentContainerWidth = contentContainer.clientWidth;
    const tempArray: number[] = [];
    const numLines = contentContainerWidth / 24;
    const containerHeight = window.innerHeight;
    // 620 is the size of bottom container, can possible make it dynamic
    const maxLineHeight = Math.max(containerHeight - 620, 100);
    //console.log(containerHeight, maxLineHeight);
    for (let i = 0; i < numLines; i++) {
      tempArray.push(generateRandomNumberFromInterval(35, maxLineHeight));
    }

    setArrayToSort(tempArray);
    setIsAnimationComplete(false);
    setIsSorting(false);

    // Clears animation queue
    const hightestId = window.setTimeout(() => {
      for (let i = hightestId; i >= 0; i--) {
        window.clearTimeout(i);
      }
    }, 0);

    setTimeout(() => {
      const arrayLines = document.getElementsByClassName(
        "array-line"
      ) as HTMLCollectionOf<HTMLElement>;
      for (let i = 0; i < arrayLines.length; i++) {
        arrayLines[i].classList.remove("change-line-color");
        arrayLines[i].classList.add("default-line-color");
      }
    }, 0);
  };

  const runAnimation = (animations: AnimationArrayType) => {
    setIsSorting(true);

    const inverseSpeed = (1 / animationSpeed) * 200;
    const arrayLines = document.getElementsByClassName(
      "array-line"
    ) as HTMLCollectionOf<HTMLElement>;

    const updateClassList = (
      indexes: number[],
      addClassName: string,
      removeClassName: string
    ) => {
      indexes.forEach((index) => {
        arrayLines[index].classList.add(addClassName);
        arrayLines[index].classList.remove(removeClassName);
      });
    };

    const updateHeightValue = (
      lineIndex: number,
      newHeight: number | undefined
    ) => {
      if (newHeight === undefined) return;
      arrayLines[lineIndex].style.height = `${newHeight}px`;
    };

    animations.forEach((animation, index) => {
      setTimeout(() => {
        const [values, isSwap] = animation;

        if (!isSwap) {
          updateClassList(values, "change-line-color", "default-line-color");
          setTimeout(() => {
            updateClassList(values, "default-line-color", "change-line-color");
          }, inverseSpeed);
        } else {
          const [lineIndex, newHeight] = values;
          updateHeightValue(lineIndex, newHeight);
        }
      }, index * inverseSpeed);
    });
  };

  const value = {
    arrayToSort,
    setArrayToSort,
    selectedAlgorithm,
    setSelectedAlgorithm,
    isSorting,
    setIsSorting,
    animationSpeed,
    setAnimationSpeed,
    isAnimationComplete,
    setIsAnimationComplete,
    resetArrayAndAnimation,
    runAnimation,
    requiresReset,
  };

  return (
    <SortingAlgorithmContext.Provider value={value}>
      {children}
    </SortingAlgorithmContext.Provider>
  );
};

export const useSortingAlgorithmContext = () => {
  const context = useContext(SortingAlgorithmContext);
  if (!context) {
    throw new Error(
      "useSortingAlgorithm must be used within a SortingAlgorithmProvider"
    );
  }
  return context;
};
