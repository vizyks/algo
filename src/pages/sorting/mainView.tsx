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
          id="content-container"
          className="bg-black flex-1 justify-center flex items-end mx-12"
        >
          {arrayToSort.map((value, index) => (
            <div
              key={index}
              className="array-line relative w-4 mx-0.5 shadow-lg opacity-70 rounded-lg default-line-color"
              style={{ height: `${value}px` }}
            ></div>
          ))}
        </div>
      </Panel>
      <PanelResizeHandle />
      <Panel title="Array">Bottom</Panel>
    </PanelGroup>
  );
}
