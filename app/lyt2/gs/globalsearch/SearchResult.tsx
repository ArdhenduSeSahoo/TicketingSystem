"use client";
import { useAppSelectorGlobal } from "@/lib/Redux/Hooks/globalSearchHooks";
import { selectGlobalSearchData } from "@/lib/Redux/Selectors/globalSearch/globalSearchSelector";
import SearchItem from "./SearchItem";
import Image from "next/image";

export default function SearchResult() {
  const globalSearchDataSelector = useAppSelectorGlobal(selectGlobalSearchData);
  //console.log(globalSearchDataSelector.searchData);
  let showPanel = true; //globalSearchDataSelector.searchString !== "";
  let totalItemSearch: number = 0;
  // const isLoading =
  //   globalSearchDataSelector.isLoading &&
  //   globalSearchDataSelector.searchString !== "" &&
  //   globalSearchDataSelector.errorMessage === "";
  // const hasError =
  //   !globalSearchDataSelector.isLoading &&
  //   globalSearchDataSelector.errorMessage !== "";
  let noDataFound = false;
  let dataItems: JSX.Element[] = [];
  if (Array.isArray(globalSearchDataSelector.searchData)) {
    if (
      globalSearchDataSelector.isLoading &&
      globalSearchDataSelector.errorMessage === ""
    ) {
      showPanel = true;
      dataItems = [];
      totalItemSearch = 0;
    } else {
      showPanel = false;
      totalItemSearch = globalSearchDataSelector.searchData.length;
      globalSearchDataSelector.searchData.forEach((itm, index) => {
        dataItems.push(<SearchItem key={index} dataItem={itm}></SearchItem>);
      });
    }
    //console.log(searchResultSelector.searchData);
  }
  if (globalSearchDataSelector.searchString === "") {
    showPanel = false;
    dataItems = [];
  }

  if (
    globalSearchDataSelector.searchString !== "" &&
    !globalSearchDataSelector.isLoading &&
    globalSearchDataSelector.searchData.length === 0
  ) {
    dataItems = [];
    noDataFound = true;
  }
  return (
    <div>
      {totalItemSearch !== 0 && (
        <div className="flex"> Total Result:{totalItemSearch}</div>
      )}
      <ul className="flex flex-col gap-2">
        {showPanel && (
          <>
            <li>
              <div className="mt-3 flex flex-col rounded-lg bg-slate-100 p-2 lg:min-w-[50rem]">
                <div>
                  <div className="skeleton h-7 w-40"></div>
                </div>
                <div className="flex max-h-44 min-w-80 max-w-[70rem] flex-col overflow-auto text-black">
                  <div className="text-sm">
                    Short Desc: <div className="skeleton h-12 w-full"></div>
                  </div>
                  <div className="text-sm">
                    Desc: <div className="skeleton h-16 w-full"></div>
                  </div>
                </div>
              </div>
            </li>
          </>
        )}
        {noDataFound && (
          <>
            <li>
              <Image
                src={"/images/DataNotFound4.png"}
                alt="data not found"
                height={250}
                width={250}
              ></Image>
            </li>
          </>
        )}
        {dataItems}
      </ul>
    </div>
  );
}
