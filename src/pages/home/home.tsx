import { Link } from "react-router-dom";

function Home() {
  const createGrid = () => {
    let grid = [];
    for (let i = 0; i < 25; i++) {
      switch (i) {
        case 8:
          grid.push(
            <div
              key={i}
              className="bg-red-600 size-8 border-2 border-grey"
            ></div>
          );
          break;
        case 16:
          grid.push(
            <div
              key={i}
              className="bg-green-600 size-8 border-2 border-grey"
            ></div>
          );
          break;
        case 6:
        case 7:
        case 11:
          grid.push(
            <div
              key={i}
              className="bg-grey-light size-8 border-2 border-grey"
            ></div>
          );
          break;
        default:
          grid.push(
            <div key={i} className="bg-white size-8 border-2 border-grey"></div>
          );
      }
    }
    return grid;
  };

  return (
    <main className="flex justify-center h-screen w-screen bg-black text-white font-krub">
      <div className="flex flex-col h-full max-w-[1020px] w-full text-center">
        <div className="my-20">
          <h1 className="text-6xl uppercase">
            ALGO<span className="krub-bold">IN</span>SIGHT
          </h1>
          <p className="">Learning algorithms through visualizations.</p>
        </div>
        <div className="flex justify-center gap-8 my-auto">
          <Link to="/sorting-algorithms">
            <div className="flex flex-col bg-grey p-4 w-[250px] h-[250px] justify-center cursor-pointer">
              <h3 className="font-bold text-lg">Sorting</h3>
              <div className="flex gap-4 justify-center my-auto">
                <div className="flex flex-col justify-end">
                  <div className="w-6 h-[40px] bg-white"></div>
                  <div>1</div>
                </div>
                <div className="flex flex-col justify-end">
                  <div className="w-6 h-[60px] bg-white"></div>
                  <div>2</div>
                </div>
                <div className="flex flex-col justify-end">
                  <div className="w-6 h-[80px] bg-white"></div>
                  <div>3</div>
                </div>
                <div className="flex flex-col justify-end">
                  <div className="w-6 h-[100px] bg-white"></div>
                  <div>4</div>
                </div>
                <div className="flex flex-col justify-end">
                  <div className="w-6 h-[120px] bg-white"></div>
                  <div>5</div>
                </div>
              </div>
            </div>
          </Link>
          <div className="flex flex-col bg-grey p-4 w-[250px] h-[250px] cursor-pointer">
            <h3 className="font-bold text-lg">Pathfinding</h3>
            <div className="grid grid-cols-5 grid-rows-5 max-w-[160px] self-center my-auto">
              {createGrid()}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
