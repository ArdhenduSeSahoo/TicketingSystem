"use client";
import {
  FilterStringCondition,
  FilterUIData,
} from "@/lib/Models/FilterModels/FilterModels";

export interface IFilterStringConditionDdwItem {
  filterDataColumn: FilterStringCondition;
  filterRow: FilterUIData;
  isSelected: boolean;
}

export default function FilterStringConditionDdwItem(
  props: IFilterStringConditionDdwItem,
) {
  // function item_click() {}
  // const old_design = (
  //   <li
  //     onClick={item_click}
  //     className="flex items-start justify-start overflow-hidden rounded-lg px-2 text-start hover:bg-gray-200"
  //   >
  //     {props.filterDataColumn.name}
  //   </li>
  // );
  const new_design = (
    <>
      <option
        key={props.filterDataColumn.name}
        value={props.filterDataColumn.name}
        selected={props.isSelected}
      >
        {props.filterDataColumn.name}
      </option>
    </>
  );
  return new_design;
}
