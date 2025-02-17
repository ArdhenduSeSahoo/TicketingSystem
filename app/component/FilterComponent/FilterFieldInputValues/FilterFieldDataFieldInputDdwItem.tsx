"use client";

import {
  FilterDataFieldInput,
  FilterUIData,
} from "@/lib/Models/FilterModels/FilterModels";

export interface IFilterFieldDataFieldInputDdwItem {
  filterDataField: FilterDataFieldInput;
  filterRow: FilterUIData;
  keyval: number;
  isSelected: boolean;
}

export default function FilterFieldDataFieldInputDdwItem(
  props: IFilterFieldDataFieldInputDdwItem,
) {
  // const dispatch = useAppDispatch();
  // function item_click() {
  //   dispatch(
  //     changeFilterUserInput({
  //       filterRow: props.filterRow,
  //       newFilterUserDataInput: props.filterDataField,
  //     }),
  //   );
  //   // dispatch(
  //   //   changeFilterCondition({
  //   //     filterRow: props.filterRow,
  //   //     filterType: props.filterType,
  //   //     newFilterCondition: props.filterDataColumn,
  //   //   }),
  //   // );
  // }
  // const old_design = (
  //   <li
  //     onClick={item_click}
  //     className="flex items-start justify-start overflow-hidden rounded-lg px-2 text-start hover:bg-gray-200"
  //   >
  //     {props.filterDataField.name}
  //   </li>
  // );
  const new_design = (
    <option
      value={props.filterDataField.id}
      key={props.keyval}
      selected={props.isSelected}
    >
      {props.filterDataField.name}
    </option>
  );
  return new_design;
}
