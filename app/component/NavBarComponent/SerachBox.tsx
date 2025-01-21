"use client";
import { useAppDispatchNavBar } from "@/lib/Redux/Hooks/NavBarHooks";
import { fetchSearchData } from "@/lib/Redux/Slices/commonSlices/NavBarSearchSlice";

import debounce from "lodash.debounce";
import SearchResultPanel from "./SearchResultPanel";

export default function SearchBoxComponent() {
  const dispatch = useAppDispatchNavBar();
  // const [IsLoading, setIsLoading] = useState(true);
  // const [FilteredData, setFilteredData] = useState<searchItemData[]>([]);
  // let listToDisplay = fruits;
  // let startedSearch = false;
  const handleChange = (e) => {
    //console.log(e.target.value);
    dispatch(fetchSearchData(e.target.value));
  };

  // const renderFruitList = () => {
  //   return listToDisplay.map((fruit, i) => <li key={i}>{fruit}</li>);
  // };

  // if (searchTerm !== "") {

  //   const [response] = AxiosGraphQlPostCall(qg);
  //   const errorMessage = hasResponseError(response);
  //   if (errorMessage === "") {
  //   } else {
  //   }
  // }
  // function debouncedResults() {
  //   //console.log("on change" + e.target.value);
  //   //debounce(callDispatcher, 300, { es: e.target.value });
  //   //dispatch(fetchSearchData(e.target.value));
  //   return debounce(callDispatcher, 300);
  // }
  //const debouncedResults = debounce(callDispatcher, 300);

  const debouncedResults = debounce(handleChange, 800);

  // const debouncedResults = useMemo(() => {
  //   return debounce(handleChange, 800);
  // }, []);

  // useEffect(() => {
  //   return () => {
  //     debouncedResults.cancel();
  //   };
  // });
  return (
    <div>
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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-72"
            placeholder="Search on large..."
            onChange={debouncedResults}
          />
        </div>
        <SearchResultPanel />
      </div>
    </div>
  );
}
