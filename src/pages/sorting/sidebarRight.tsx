import { Sidebar } from "../../components/sidebar";
import { Slider } from "../../components/input/slider";
import { InfoView } from "./infoView";
import { CodeView } from "./codeView";
import { useToggle } from "../../lib/hooks";
import { useSortingAlgorithmContext } from "../../context/Visualizer";
import { generateAnimationArray, sortingAlgorithmData } from "../../lib/utils";

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

  const [value, toggle] = useToggle(true);

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
      {selectedAlgorithm && (
        <>
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
            <button
              onClick={toggle}
              disabled={value}
              className="flex-1 bg-grey-light py-2 cursor-pointer"
            >
              Info
            </button>
            <button
              onClick={toggle}
              disabled={!value}
              className="flex-1 hover:bg-grey-light cursor-pointer"
            >
              Code
            </button>
          </div>
          {value ? (
            <InfoView selectedAlgorithm={selectedAlgorithm} />
          ) : (
            <CodeView />
          )}
        </>
      )}
    </Sidebar>
  );
}
