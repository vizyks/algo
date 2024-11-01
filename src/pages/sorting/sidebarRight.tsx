import { Sidebar } from "../../components/sidebar";
import { Slider } from "../../components/input/slider";
import { useSortingAlgorithmContext } from "../../context/Visualizer";
import { generateAnimationArray, sortingAlgorithmData } from "../../lib/utils";
import insertionSortImage from "../../assets/insertionSort.png";

export function SidebarRight() {
  const {
    isSorting,
    animationSpeed,
    setAnimationSpeed,
    resetArrayAndAnimation,
    requiresReset,
    selectedAlgorithm,
    arrayToSort,
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
      <h2 className="text-lg text-center py-6">
        {sortingAlgorithmData[selectedAlgorithm].title}
      </h2>
      <div className="flex border-t-2 border-b-2 border-grey-light">
        <button className="flex-1 bg-grey-light py-2">Info</button>
        <button className="flex-1 hover:bg-grey-light">Code</button>
      </div>
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
    </Sidebar>
  );
}
