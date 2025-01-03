import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "../../components/resizable-panels/index";
import { useSortingAlgorithmContext } from "../../context/Visualizer";

export function MainView() {
  const { arrayToSort } = useSortingAlgorithmContext();

  return (
    <PanelGroup>
      <Panel title="Chart">
        <div
          id="chart-container"
          className="bg-black flex-1 flex items-end justify-center mx-12 mb-2"
        >
          {arrayToSort.map((value, index) => (
            <div
              key={index}
              className="array-line relative w-6 mx-0.5 shadow-lg opacity-70 default-line-color"
              style={{ height: `${value}%` }}
            ></div>
          ))}
        </div>
      </Panel>
      <PanelResizeHandle />
      <Panel title="Array">
        <div
          id="array-container"
          className="flex flex-1 h-full justify-center items-center"
        >
          <div className="flex flex-col">
            <div className="grid grid-flow-col gap-[1px] p-[1px]">
              {arrayToSort.map((value, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center size-7 text-grey-light"
                >
                  {index}
                </div>
              ))}
            </div>
            <div className="grid grid-flow-col bg-grey-light gap-[1px] p-[1px]">
              {arrayToSort.map((value, index) => (
                <div
                  className="array-box flex justify-center items-center bg-grey size-7"
                  key={index}
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Panel>
    </PanelGroup>
  );
}
