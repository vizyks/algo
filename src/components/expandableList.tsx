import arrowRight from "../assets/arrowRight.svg";
import arrowDown from "../assets/arrowDown.svg";
import { useEffect, useState } from "react";
import { SortingAlgorithmType, SortingAlgorithmOptions } from "../lib/types";
import { Link, useMatch } from "react-router-dom";

export default function expandableList(
  list: SortingAlgorithmOptions,
  selectedAlgorithm: SortingAlgorithmType,
  setAlgo: (algo: SortingAlgorithmType) => void
) {
  const [expandedList, setExpandedList] = useState<string[]>([]);
  const match = useMatch("/sorting-algorithms/:category/:algorithm");

  // useEffect to set UI state based on if an algorithm/category is accessed directly
  // by URL and not clicking list buttons
  useEffect(() => {
    if (!match) return;
    let algorithm = match.params.algorithm;
    let category = match.params.category;
    if (!algorithm || !category) return;

    // convert URL params to fit the type required
    const recreate = (url: string) => {
      // if word = and don't capitalize (temp fix to not capitalize certain words)
      return url
        .split("-")
        .map((word: string) => {
          if (word === "and") return word;
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    };

    setAlgo(recreate(algorithm) as SortingAlgorithmType);
    toggleLists(recreate(category));
  }, []);

  const toggleLists = (listName: string) => {
    if (expandedList.includes(listName)) {
      setExpandedList(expandedList.filter((item) => item !== listName));
    } else {
      setExpandedList([...expandedList, listName]);
    }
  };

  const generateCleanUrl = (url: string) => {
    return url.replace(/\s+/g, "-").toLowerCase();
  };

  let divs = [];

  for (const value of Object.values(list)) {
    divs.push(
      <div key={value.cat} data-id={value.cat} className="flex flex-col">
        <button
          onClick={() => toggleLists(value.cat)}
          className={`flex w-full justify-between items-center p-2 ${
            expandedList?.includes(value.cat)
              ? "bg-grey-light font-bold"
              : "bg-grey hover:bg-grey-light hover:font-bold"
          }`}
        >
          <h3>{value.cat}</h3>
          <img
            src={expandedList?.includes(value.cat) ? arrowDown : arrowRight}
          ></img>
        </button>
        {expandedList?.includes(value.cat) && (
          <div className="flex flex-col">
            {value.types.map((item: SortingAlgorithmType) => {
              return (
                <Link
                  onClick={() => setAlgo(item)}
                  key={item}
                  to={generateCleanUrl(`${value.cat}/${item}`)}
                  className={`py-2 px-4 text-left ${
                    selectedAlgorithm === item
                      ? "bg-grey-dark"
                      : "hover:bg-grey-dark"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return divs;
}
