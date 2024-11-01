import arrowRight from "../assets/arrowRight.svg";
import arrowDown from "../assets/arrowDown.svg";
import { useState } from "react";
import { SortingAlgorithmType, SortingAlgorithmOptions } from "../lib/types";

export default function expandableList(
  list: SortingAlgorithmOptions,
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

  for (const value of Object.values(list)) {
    divs.push(
      <div key={value.cat} data-id={value.cat} className="flex flex-col">
        <button
          onClick={(e) => toggleLists(value.cat)}
          className={`flex w-full justify-between items-center p-2 ${
            expandedList?.includes(value.cat)
              ? "bg-grey-light font-bold"
              : "bg-grey hover:bg-grey-light hover:font-bold"
          }`}
        >
          <h3> {value.cat} </h3>
          <img
            src={expandedList?.includes(value.cat) ? arrowDown : arrowRight}
          ></img>
        </button>
        {expandedList?.includes(value.cat) && (
          <div className="flex flex-col">
            {value.types.map((item: SortingAlgorithmType) => {
              return (
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
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return divs;
}
