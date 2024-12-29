import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";
import { sortingAlgorithmData } from "../../lib/utils";
import { SortingAlgorithmType } from "../../lib/types";
import clipboard from "../../assets/clipboard.svg";

SyntaxHighlighter.registerLanguage("javascript", js);

export function CodeView({
  selectedAlgorithm,
}: {
  selectedAlgorithm: SortingAlgorithmType;
}) {
  if (!selectedAlgorithm) return;

  // switch icon to checkmark when copied and the functionality when clicked to swap back to clipboard to copy again
  // or add a tooltip that just says "copied".

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      sortingAlgorithmData[selectedAlgorithm].codeSnippet
    );
  };

  return (
    <div className="relative p-[10px]">
      <div className="relative">
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center absolute right-0 p-2 h-[44px] w-[44px]"
        >
          <img
            className="hover:h-[27px] hover:w-[27px]"
            src={clipboard}
            alt="image of a clipboard"
          />
        </button>
        <SyntaxHighlighter
          language="typescript"
          style={atomOneDark}
          customStyle={{
            padding: "10px",
            fontSize: "10px",
            backgroundColor: "rgb(30, 30, 30)",
            borderRadius: "4px",
            height: "100%",
          }}
          showLineNumbers={true}
        >
          {sortingAlgorithmData[selectedAlgorithm].codeSnippet}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
