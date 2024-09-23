function Home() {
  return (
    <main className="flex justify-center h-screen w-screen bg-black text-white font-krub">
      <div className=" h-full max-w-[1020px] w-full text-center">
        <div className="">
          <h1 className="text-6xl uppercase">
            ALGO<span className="krub-bold">IN</span>SIGHT
          </h1>
          <p className="">Learning algorithms through visualizations.</p>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col bg-grey p-4 max-h-[250px] max-w-[250px] flex-1">
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
            <div className="flex flex-col bg-grey p-4 max-h-[250px] max-w-[250px] flex-1">
              <h3 className="font-bold text-lg">Pathfinding</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
