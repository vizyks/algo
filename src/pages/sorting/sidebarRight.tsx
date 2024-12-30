import { Sidebar } from "../../components/sidebar";
import { Slider } from "../../components/input/slider";
import { InfoView } from "./infoView";
import { CodeView } from "./codeView";
import { useToggle } from "../../lib/hooks";
import { useSortingAlgorithmContext } from "../../context/Visualizer";
import { generateAnimationArray, sortingAlgorithmData } from "../../lib/utils";
import play from "../../assets/play.svg";
import restart from "../../assets/restart.svg";

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
          <div className="flex items-center justify-center gap-8 h-10 border-b-2 border-grey-light">
            <Slider
              isDisabled={isSorting}
              value={animationSpeed}
              handleChange={(e) => setAnimationSpeed(Number(e.target.value))}
            />
            <button
              className="group flex items-center justify-center gap-2 p-2"
              onClick={handlePlay}
            >
              {requiresReset ? (
                <>
                  <img
                    className="w-4 group-hover:scale-110"
                    src={restart}
                    alt="restart"
                  />
                  <p className="group-hover:font-bold">Restart</p>
                </>
              ) : (
                <>
                  <img
                    className="w-[14px] group-hover:scale-110"
                    src={play}
                    alt="play"
                  />
                  <p className="group-hover:font-bold">Play</p>
                </>
              )}
            </button>
          </div>
          <h2 className="text-lg text-center py-6">
            {sortingAlgorithmData[selectedAlgorithm].title}
          </h2>
          <div className="flex border-t-2 border-b-2 border-grey-light">
            <button
              onClick={toggle}
              disabled={value}
              className={`flex-1 hover:bg-grey-light py-2 cursor-pointer ${
                value && "bg-grey-light"
              }`}
            >
              Info
            </button>
            <button
              onClick={toggle}
              disabled={!value}
              className={`flex-1 hover:bg-grey-light py-2 cursor-pointer ${
                !value && "bg-grey-light"
              }`}
            >
              Code
            </button>
          </div>
          {value ? (
            <InfoView selectedAlgorithm={selectedAlgorithm} />
          ) : (
            <CodeView selectedAlgorithm={selectedAlgorithm} />
          )}
        </>
      )}
    </Sidebar>
  );
}
