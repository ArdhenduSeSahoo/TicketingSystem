"use client";

import {
  FilterBooleanCondition,
  FilterUIData,
} from "@/lib/Models/FilterModels/FilterModels";

export interface IFilterBooleanDdwItem {
  filterDataColumn: FilterBooleanCondition;
  filterRow: FilterUIData;
  isSelected: boolean;
}

export default function FilterBooleanDdwItem(props: IFilterBooleanDdwItem) {

  const newdesign = (
    <>
      <option value={props.filterDataColumn.name} selected={props.isSelected}>
        {props.filterDataColumn.name}
      </option>
    </>
  );
  return newdesign;
}
