"use client";

import {
  FilterBooleanCondition,
  FilterUIData,
} from "@/lib/Models/FilterModels/FilterModels";
import { useAppDispatch } from "@/lib/Redux/Hooks/HomePageHook";
import { changeFilterCondition } from "@/lib/Redux/Slices/commonSlices/FilterUIDataSlice";

export interface IFilterBooleanDdwItem {
  filterDataColumn: FilterBooleanCondition;
  filterRow: FilterUIData;
  isSelected: boolean;
}

export default function FilterBooleanDdwItem(props: IFilterBooleanDdwItem) {
  function item_click() {}
  const old_design = (
    <li
      onClick={item_click}
      className="flex items-start justify-start overflow-hidden rounded-lg px-2 text-start hover:bg-gray-200"
    >
      {props.filterDataColumn.name}
    </li>
  );
  const newdesign = (
    <>
      <option value={props.filterDataColumn.name} selected={props.isSelected}>
        {props.filterDataColumn.name}
      </option>
    </>
  );
  return newdesign;
}
