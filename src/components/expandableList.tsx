import arrowRight from "../assets/arrowRight.svg";
import arrowDown from "../assets/arrowDown.svg";
import { useState } from "react";
import { SortingAlgorithmType } from "../lib/types";

export default function expandableList(
  lists: object,
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

  for (let [key, value] of Object.entries(lists)) {
    divs.push(
      <>
        <div key={key} className="flex flex-col">
          <button
            onClick={(e) => toggleLists(key)}
            className={`flex w-full justify-between items-center p-2 ${
              expandedList?.includes(key)
                ? "bg-grey-light font-bold"
                : "bg-grey hover:bg-grey-light hover:font-bold"
            }`}
          >
            <h3> {key} </h3>
            <img
              src={expandedList?.includes(key) ? arrowDown : arrowRight}
            ></img>
          </button>
        </div>
        {expandedList?.includes(key) && (
          <div className="flex flex-col">
            {value.map((item: SortingAlgorithmType) => (
              <button
                onClick={() => setAlgo(item)}
                key={item}
                className={`py-2 px-4 text-left ${
                  selectedAlgorithm === item
                    ? "bg-grey-dark"
                    : "hover:bg-grey-dark"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </>
    );
  }
  return divs;
}
