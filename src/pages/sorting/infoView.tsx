import { sortingAlgorithmData } from "../../lib/utils";
import { SortingAlgorithmType } from "../../lib/types";
import insertionSortImage from "../../assets/insertionSort.png";

export function InfoView({
  selectedAlgorithm,
}: {
  selectedAlgorithm: SortingAlgorithmType;
}) {
  if (!selectedAlgorithm) return;

  return (
    <div className="flex flex-col py-8 px-4 gap-4">
      <div className="text-center">
        {sortingAlgorithmData[selectedAlgorithm].desc}
      </div>
      {
        /// REPLACE IMAGE WITH A GIF ///
      }
      <img src={insertionSortImage} alt="" className="w-48 self-center" />
      <div className="grid grid-cols-2 gap-1">
        <p className="col-start-1 col-end-3 text-center font-bold">
          Time Complexity
        </p>
        <p>Worst Case:</p>
        <p className="text-right">
          {sortingAlgorithmData[selectedAlgorithm].timeComplexity.worstCase}
        </p>
        <p>Average Case:</p>
        <p className="text-right">
          {sortingAlgorithmData[selectedAlgorithm].timeComplexity.averageCase}
        </p>
        <p>Best Case:</p>
        <p className="text-right">
          {sortingAlgorithmData[selectedAlgorithm].timeComplexity.bestCase}
        </p>
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
  );
}
