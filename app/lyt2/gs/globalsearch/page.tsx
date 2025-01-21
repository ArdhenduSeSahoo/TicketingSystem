"use client";
import SearchResult from "./SearchResult";
import { useAppDispatchGlobal } from "@/lib/Redux/Hooks/globalSearchHooks";
import { fetchGlobalSearchData } from "@/lib/Redux/Slices/globlaSearchSlice/globalSearchSlices";
import debounce from "lodash.debounce";
import SpeechComponent from "./SpeechComponent";
import SpeechComp2 from "./SpeechComp2";

export default function Page() {
  const dispatch = useAppDispatchGlobal();
  const handleChange = (e) => {
    //console.log(e.target.value);
    dispatch(fetchGlobalSearchData(e.target.value));
  };
  const debouncedResults = debounce(handleChange, 800);

  function btnclick() {
    dispatch(fetchGlobalSearchData("Health"));
  }
  return (
    <>
      <div className="flex flex-col overflow-y-auto">
        <div className="sticky top-0 flex w-full items-center justify-center bg-slate-200 p-3">
          <div className="flex flex-col">
            <SpeechComp2></SpeechComp2>
            <div className="relative">
              <div className="relative md:block">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <svg
                    className="h-4 w-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <div></div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-72 rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-[40rem]"
                  placeholder="Search from all data....."
                  onChange={debouncedResults}
                />
              </div>
            </div>
            <div className="px-2 text-xs">
              Search fields are:Description, ShortDescription, Comments,
              WorkNotes.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <SearchResult />
        </div>
      </div>
    </>
  );
}
