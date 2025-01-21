import { useAppSelectorNavBar } from "@/lib/Redux/Hooks/NavBarHooks";
import { selectNavBarSearchData } from "@/lib/Redux/Selectors/CommonSelectors/NavBarSelector";
import * as React from "react";
import SearchItem from "./SearchItem";
import Image from "next/image";

// export interface ISearchResultPanelProps {}

export default function SearchResultPanel() {
  const searchResultSelector = useAppSelectorNavBar(selectNavBarSearchData);
  let showPanel = searchResultSelector.searchString !== "";
  const isLoading =
    searchResultSelector.isLoading &&
    searchResultSelector.searchString !== "" &&
    searchResultSelector.errorMessage === "";
  const hasError =
    !searchResultSelector.isLoading && searchResultSelector.errorMessage !== "";
  let noDataFound = false;
  let dataItems: JSX.Element[] = [];
  if (Array.isArray(searchResultSelector.searchData)) {
    //console.log(searchResultSelector.searchData);

    searchResultSelector.searchData.forEach((itm, index) => {
      dataItems.push(<SearchItem key={index} dataItem={itm}></SearchItem>);
    });
    if (
      !searchResultSelector.isLoading &&
      searchResultSelector.errorMessage === ""
    ) {
      showPanel = true;
    }
  }
  if (searchResultSelector.searchString === "") {
    showPanel = false;
    dataItems = [];
  }

  if (
    searchResultSelector.searchString !== "" &&
    !searchResultSelector.isLoading &&
    searchResultSelector.searchData.length === 0
  ) {
    dataItems = [];
    noDataFound = true;
  }

  return (
    <div>
      {/* ${startedSearch ? "" : "hidden"} */}
      <div
        className={`${showPanel ? "" : "hidden"} absolute z-50 mt-2 w-full overflow-clip rounded-xl border border-gray-200 bg-white`}
      >
        <div className="">
          <div className="flex flex-col gap-2 rounded-b-lg">
            <div className="flex max-h-72 flex-grow overflow-y-scroll py-1">
              <ul className="flex w-full flex-col gap-1">
                {/* {renderFruitList()} */}
                {!isLoading && dataItems}
                {isLoading && (
                  <li className="flex justify-center p-4">
                    <span className="loading loading-spinner text-blue-700"></span>
                  </li>
                )}
                {noDataFound && (
                  <li className="flex flex-col items-center justify-center p-4">
                    <Image
                      src={"/images/DataNotFound4.png"}
                      alt="data not found"
                      height={150}
                      width={150}
                    ></Image>
                    No Data
                  </li>
                )}
                {hasError && <li>Has error in data</li>}
              </ul>
            </div>
            {/* <div className="flex flex-row items-center justify-center border-t-2">
              <>
                <a className="m-1 rounded-lg bg-pink-100 p-1 text-base">
                  See More(33)
                </a>
              </>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
