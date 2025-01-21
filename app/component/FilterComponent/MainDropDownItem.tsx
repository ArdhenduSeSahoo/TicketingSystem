"use client";

import {
  FilterColumnValue,
  FilterUIData,
} from "@/lib/Models/FilterModels/FilterModels";

export interface IMainDropDownItemProps {
  filterDataColumn: FilterColumnValue;
  filterRow: FilterUIData;
  isSelected: boolean;
  optionKey: number;
}

export default function MainDropDownItem(props: IMainDropDownItemProps) {
  const opetiondesign = (
    <option
      value={props.filterDataColumn.name}
      selected={props.isSelected}
      key={props.optionKey}
    >
      {props.filterDataColumn.name}
    </option>
  );
  return opetiondesign;
}
