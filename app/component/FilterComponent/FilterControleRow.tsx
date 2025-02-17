"use client";
import { FilterUIData } from "@/lib/Models/FilterModels/FilterModels";
import FilterFieldColumn from "./FilterFieldColumn";
import { useAppDispatch } from "@/lib/Redux/Hooks/HomePageHook";
import {
  addBlankFilter,
  removeFilterCondition,
} from "@/lib/Redux/Slices/commonSlices/FilterUIDataSlice";
import FilterFieldCondition from "./FilterFieldCondition";
import FilterFieldUserInputs from "./FilterFieldUserInputs";
interface filterProps {
  filterUiData: FilterUIData;
}
export default function FilterControlRow(props: filterProps) {
  const dispatch = useAppDispatch();
  function removecondition() {
    dispatch(
      removeFilterCondition({
        num: props.filterUiData.filterType,
        filter: props.filterUiData,
      }),
    );
  }
  function addAndCondition() {
    dispatch(
      addBlankFilter({
        filterType: props.filterUiData.filterType,
        whereConditionType: 1,
      }),
    );
  }
  // function addOrCondition() {
  //   dispatch(
  //     addBlankFilter({
  //       filterType: props.filterUiData.filterType,
  //       whereConditionType: 2,
  //     }),
  //   );
  // }
  return (
    <div>
      <div className="flex flex-row items-center gap-2">
        {props.filterUiData.whereCondition === 2 && (
          <div>
            <div className="rounded-md bg-slate-200 p-1">
              <p>Or</p>
            </div>
          </div>
        )}

        {/* <Dropdowncustom /> */}
        {/* <Dropdowntwo /> */}

        <FilterFieldColumn filterUIData={props.filterUiData} key={1} />
        <FilterFieldCondition filterUIData={props.filterUiData} key={2} />
        <FilterFieldUserInputs filterUIData={props.filterUiData} key={3} />
        <button
          className="btn btn-outline btn-info btn-sm"
          onClick={addAndCondition}
        >
          And
        </button>
        {/* <button
          className="btn btn-outline btn-info btn-sm"
          onClick={addOrCondition}
        >
          Or
        </button> */}
        <button
          className="btn btn-circle btn-outline btn-error btn-xs"
          onClick={removecondition}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
