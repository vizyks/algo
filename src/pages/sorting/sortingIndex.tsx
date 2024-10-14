import insertionSortImage from "../../assets/insertionSort.png";
import { Sidebar } from "../../components/sidebar";
import { useEffect } from "react";
import { useSortingAlgorithmContext } from "../../context/Visualizer";
import expandableList from "../../components/expandableList";
import sortingAlgorithms from "../../providers/sortingAlgorithms.json";
import { Slider } from "../../components/input/slider";
import { generateAnimationArray } from "../../lib/utils";

export default function SortingIndex() {
  const {
    arrayToSort,
    isSorting,
    selectedAlgorithm,
    setSelectedAlgorithm,
    setAnimationSpeed,
    animationSpeed,
    requiresReset,
    resetArrayAndAnimation,
    runAnimation,
  } = useSortingAlgorithmContext();

  const handlePlay = () => {
    if (requiresReset) {
      resetArrayAndAnimation();
      return;
    }

    generateAnimationArray(
      selectedAlgorithm,
      isSorting,
      arrayToSort,
      runAnimation
    );
  };

  return (
    <>
      <main className="h-screen w-screen bg-black text-white font-krub">
        <div className="flex h-full">
          <Sidebar style={"left"}>
            <h1 className="text-3xl text-center uppercase border-b-2 border-grey-light py-6">
              ALGO<span className="krub-bold">IN</span>SIGHT
            </h1>
            <h2 className="text-lg text-center py-6">Sorting Algorithms</h2>
            <div className="flex flex-col text-sm">
              {expandableList(
                sortingAlgorithms,
                selectedAlgorithm,
                setSelectedAlgorithm
              )}
            </div>
          </Sidebar>
          <div className="flex-1 flex flex-col">
            <div
              id="content-container"
              className="bg-black flex-1 bottom-[32px] justify-center flex items-end mx-12"
            >
              {arrayToSort.map((value, index) => (
                <div
                  key={index}
                  className="array-line relative w-4 mx-0.5 shadow-lg opacity-70 rounded-lg default-line-color"
                  style={{ height: `${value}px` }}
                ></div>
              ))}
            </div>
            <div id="draggable" className="bg-grey h-2 cursor-row-resize"></div>
            <div id="bottom-panel" className="flex-1">
              Another bar
            </div>
          </div>
          <Sidebar style={"right"}>
            <div className="flex items-center justify-center gap-4">
              <Slider
                isDisabled={isSorting}
                value={animationSpeed}
                handleChange={(e) => setAnimationSpeed(Number(e.target.value))}
              />
              <button
                className="flex items-center justify-center"
                onClick={handlePlay}
              >
                {requiresReset ? "Reset" : "Start"}
              </button>
            </div>
            <h2 className="text-lg text-center py-6">Insertion Sort</h2>
            <div className="flex border-t-2 border-b-2 border-grey-light">
              <button className="flex-1 bg-grey-light py-2">Info</button>
              <button className="flex-1 hover:bg-grey-light">Code</button>
            </div>
            <div className="flex flex-col py-8 px-4 gap-4">
              <div className="text-center">
                Insertion sort is a simple sorting algorithm that builds the
                final sorted array (or list) one item at a time by comparisons.
                It is much less efficient on large lists than more advanced
                algorithms such as quicksort, heapsort, or merge sort.
              </div>
              {
                /// REPLACE IMAGE WITH A GIF ///
              }
              <img
                src={insertionSortImage}
                alt=""
                className="w-48 self-center"
              />
              <div className="grid grid-cols-2 gap-1">
                <p className="col-start-1 col-end-3 text-center font-bold">
                  Time Complexity
                </p>
                <p>Worst Case:</p>
                <p className="text-right">O(n^2)</p>
                <p>Average Case:</p>
                <p className="text-right">O(n^2)</p>
                <p>Best Case:</p>
                <p className="text-right">O(n)</p>
              </div>
              <div className="text-center">
                <p className="font-bold ">References</p>
                <a
                  href="https://en.wikipedia.org/wiki/Insertion_sort"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikipedia
                </a>
              </div>
            </div>
          </Sidebar>
        </div>
      </main>
    </>
  );
}
