import arrowRight from "../assets/arrowRight.svg";
import arrowDown from "../assets/arrowDown.svg";
import { useState } from "react";
import { SortingAlgorithmType } from "../lib/types";

interface algoRec {
  categories: { catName: string; types: object[] }[];
}

export default function expandableList(
  lists: algoRec,
  selectedAlgorithm: SortingAlgorithmType,
  setAlgo: (algo: SortingAlgorithmType) => void
) {
  const [expandedList, setExpandedList] = useState<string[]>([]);

  const toggleLists = (listName: string) => {
    if (expandedList.includes(listName)) {
      setExpandedList(expandedList.filter((item) => item !== listName));
    } else {
      setExpandedList([...expandedList, listName]);
    }
  };

  let divs = [];

  for (let i = 0; i < lists.categories.length; i++) {
    divs.push(
      <>
        <div key={lists.categories[i].catName} className="flex flex-col">
          <button
            onClick={(e) => toggleLists(lists.categories[i].catName)}
            className={`flex w-full justify-between items-center p-2 ${
              expandedList?.includes(lists.categories[i].catName)
                ? "bg-grey-light font-bold"
                : "bg-grey hover:bg-grey-light hover:font-bold"
            }`}
          >
            <h3> {lists.categories[i].catName} </h3>
            <img
              src={
                expandedList?.includes(lists.categories[i].catName)
                  ? arrowDown
                  : arrowRight
              }
            ></img>
          </button>
        </div>
        {expandedList?.includes(lists.categories[i].catName) && (
          <div className="flex flex-col">
            {lists.categories[i].types.map((item: SortingAlgorithmType) => (
              <button
                onClick={() => setAlgo(item.name)}
                key={item.name}
                className={`py-2 px-4 text-left ${
                  selectedAlgorithm === item.name
                    ? "bg-grey-dark"
                    : "hover:bg-grey-dark"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </>
    );
  }

  return divs;
}
