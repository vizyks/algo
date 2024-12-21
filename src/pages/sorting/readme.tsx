import { Panel } from "../../components/resizable-panels/index";

export default function ReadMe() {
  return (
    <Panel title="README" inGroup={false}>
      <div className="flex flex-col m-8 my-12 gap-2">
        <h1 className="text-2xl font-bold">ALGOINSIGHT</h1>
        <h2 className="text-xl font-bold">Introduction</h2>
        <p>
          Welcome to Algoinsight, a web-based visualizer for sorting algorithms.
          Whether you are a student or a professional, the site is designed to
          help you learn and understand algorithms through visualization.
        </p>
        <h2 className="text-xl font-bold">Languages and Frameworks Used</h2>
        <p>HTML, CSS, Javascript, Typescript, React, Jest</p>
        <h2 className="text-xl font-bold">Features</h2>
        <h3 className="text-l font-bold">Algorithm Variety</h3>
        <p>
          Provides a large range of sorting algorithms to choose from. Each
          algorithm showcasing a detailed view containing time complexity,
          description, code examples, and references to learn more.
        </p>
        <h3 className="text-l font-bold">Visualizer</h3>
        <p>
          Each algorithm has a visualizer that as the name suggests, visualizes
          how an algorithm works step by step. Some algorithms consits of
          different visualizers such as chart, and array. The speed of these
          visualizers can also be controlled by a slider.
        </p>
        <h3 className="text-l font-bold">Code</h3>
        <p>
          Code of these algorithms is also provided to help you understand how
          they are made and how they work. Code is also tested using jest to
          ensure the algorithm are working properly for your peace of mind.
        </p>
        <h2 className="text-xl font-bold">How it Works</h2>
        <p>
          Select a algorithm from the list of sorted categories on theleft
          sidebar. The visualizers will then appear in the middle of the site
          which can be resized to your liking. On the right side is where the
          algorithm information will be shown, such as time complexity, code
          example aswell as references to learn deeper about these algorithms.
          Finally above the algorithm name on the right sidebar is a slider to
          control the speed of the algorithm and to the right of the slider is a
          start button which is replaced with a reset function when the
          algorithm finishes running.
        </p>
      </div>
    </Panel>
  );
}
