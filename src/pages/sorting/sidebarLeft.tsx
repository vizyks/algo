import { Sidebar } from "../../components/sidebar";
import expandableList from "../../components/expandableList";
import { useSortingAlgorithmContext } from "../../context/Visualizer";
import { sortingAlgorithmOptions } from "../../lib/utils";
import { Link } from "react-router-dom";

export function SidebarLeft() {
  const { selectedAlgorithm, setSelectedAlgorithm } =
    useSortingAlgorithmContext();

  return (
    <Sidebar style={"left"}>
      <Link to="/">
        <h1 className="text-3xl text-center uppercase border-b-2 border-grey-light py-6">
          ALGO<span className="krub-bold">IN</span>SIGHT
        </h1>
      </Link>
      <h2 className="text-lg text-center py-6">Sorting Algorithms</h2>
      <div className="flex flex-col text-sm">
        {expandableList(
          sortingAlgorithmOptions,
          selectedAlgorithm,
          setSelectedAlgorithm
        )}
      </div>
    </Sidebar>
  );
}
