"use client";

import { FilterDataFieldCondition } from "@/lib/Models/FilterModels/FilterModels";

export interface IFilterDataFieldConditionDdwItem {
  filterDataColumn: FilterDataFieldCondition;
  isSelected: boolean;
  //filterRow: FilterUIData;
}

export default function FilterDataFieldConditionDdwItem(
  props: IFilterDataFieldConditionDdwItem,
) {
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
