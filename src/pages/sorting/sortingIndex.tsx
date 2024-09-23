import insertionSortImage from "../../assets/insertionSort.png";
import { Sidebar } from "../../components/sidebar";
import { useEffect } from "react";
import { useSortingAlgorithmContext } from "../../context/Visualizer";
import expandableList from "../../components/expandableList";

export default function SortingIndex() {
  const { arrayToSort, isSorting, selectedAlgorithm, setSelectedAlgorithm } =
    useSortingAlgorithmContext();

  const algorithmTypes = {
    "Brute Force": ["Bubble Sort", "Selection Sort", "Insertion Sort"],
    "Divide and Conquer": ["Merge Sort", "Quick Sort"],
    Recursive: ["Cycle Detection", "Nth Factorial", "Fibonacci Sequence"],
  };

  useEffect(() => {
    console.log(arrayToSort);
    console.log(isSorting);
    console.log(selectedAlgorithm);
  }, []);

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
                algorithmTypes,
                selectedAlgorithm,
                setSelectedAlgorithm
              )}
            </div>
          </Sidebar>
          <div className="bg-black flex-1"></div>
          <Sidebar style={"right"}>
            <div className="bg-grey-light p-4 text-center">Slow Fast, Play</div>
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
              <img src={insertionSortImage} alt="" />
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
