"use client";

import {
  FilterBooleanInput,
  FilterUIData,
} from "@/lib/Models/FilterModels/FilterModels";

export interface IFilterFieldBooleanInputDdwItem {
  filterDataField: FilterBooleanInput;
  //filterRow: FilterUIData;
  isSelected: boolean;
}

export default function FilterFieldBooleanInputDdwItem(
  props: IFilterFieldBooleanInputDdwItem,
) {
  function item_click() {}
  const old_design = (
    <li
      onClick={item_click}
      className="flex items-start justify-start overflow-hidden rounded-lg px-2 text-start hover:bg-gray-200"
    >
      {props.filterDataField.name}
    </li>
  );
  const new_design = (
    <>
      <option value={props.filterDataField.name}>
        {props.filterDataField.name}
      </option>
    </>
  );
  return new_design;
}
