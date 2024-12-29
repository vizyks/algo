import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";
import { sortingAlgorithmData } from "../../lib/utils";
import { SortingAlgorithmType } from "../../lib/types";

SyntaxHighlighter.registerLanguage("javascript", js);

export function CodeView({
  selectedAlgorithm,
}: {
  selectedAlgorithm: SortingAlgorithmType;
}) {
  if (!selectedAlgorithm) return;
  return (
    <div className="p-[10px]">
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
  );
}
