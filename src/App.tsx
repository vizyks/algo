import { useEffect } from "react";
import { useSortingAlgorithmContext } from "./context/Visualizer";

function App() {
  const { arrayToSort, isSorting } = useSortingAlgorithmContext();

  useEffect(() => {
    console.log(arrayToSort);
    console.log(isSorting);
  }, []);

  return (
    <>
      <main className="absolute top-0 h-screen w-screen bg-[#222831]"></main>
    </>
  );
}

export default App;
