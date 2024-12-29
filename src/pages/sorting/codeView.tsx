import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";
import { sortingAlgorithmData } from "../../lib/utils";
import { SortingAlgorithmType } from "../../lib/types";
import clipboard from "../../assets/clipboard.svg";
import checkmark from "../../assets/checkmark.svg";
import { useToggle } from "../../lib/hooks";

SyntaxHighlighter.registerLanguage("javascript", js);

export function CodeView({
  selectedAlgorithm,
}: {
  selectedAlgorithm: SortingAlgorithmType;
}) {
  if (!selectedAlgorithm) return;

  const [value, toggle] = useToggle(true);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      sortingAlgorithmData[selectedAlgorithm].codeSnippet
    );
    toggle();
    setTimeout(() => {
      toggle();
    }, 3000);
  };

  return (
    <div className="relative p-[10px]">
      <div className="relative">
        <button
          onClick={copyToClipboard}
          disabled={!value}
          className="flex items-center justify-center absolute right-0 h-[44px] w-[44px] cursor-pointer"
        >
          {value ? (
            <img
              className="p-2 ease-in-out duration-100 hover:scale-110"
              src={clipboard}
              alt="image of a clipboard"
            />
          ) : (
            <img
              className="p-2 ease-in-out duration-100 hover:scale-110"
              src={checkmark}
              alt="image of a checkmark"
            />
          )}
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
