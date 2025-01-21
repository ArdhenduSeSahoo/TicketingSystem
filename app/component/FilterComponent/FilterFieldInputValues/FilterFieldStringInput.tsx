"use client";

import { PageDataType } from "@/lib/DefaultData/PageDataType";
import {
  FilterStringInput,
  FilterUIData,
} from "@/lib/Models/FilterModels/FilterModels";
import { useAppDispatch, useAppSelector } from "@/lib/Redux/Hooks/HomePageHook";
import { selectFilterUIDataAll } from "@/lib/Redux/Selectors/CommonSelectors/FilterSelectors";

import { changeFilterUserInput } from "@/lib/Redux/Slices/commonSlices/FilterUIDataSlice";

export interface IFilterFieldStringInputProps {
  filterUIData: FilterUIData;
}

export default function FilterFieldStringInput(
  props: IFilterFieldStringInputProps,
) {
  const selectfilterUiData = useAppSelector(selectFilterUIDataAll);
  const dispatch = useAppDispatch();
  let selectedValue: string | null | undefined = "";

  try {
    if (props.filterUIData.filterType === PageDataType.IncidentData) {
      selectfilterUiData.incidentFilterUIData?.forEach((itm) => {
        if (itm.id === props.filterUIData.id) {
          if (itm.inputValue !== null) {
            const inputSelectedValue = (itm.inputValue as FilterStringInput)
              .inputValue;
            selectedValue = inputSelectedValue?.substring(
              1,
              inputSelectedValue.length - 1,
            );
          }
        }
      });
    } else if (props.filterUIData.filterType === PageDataType.RequestData) {
      selectfilterUiData.requestNowFilterUIData?.forEach((itm) => {
        if (itm.id === props.filterUIData.id) {
          if (itm.inputValue !== null) {
            const inputSelectedValue = (itm.inputValue as FilterStringInput)
              .inputValue;
            selectedValue = inputSelectedValue?.substring(
              1,
              inputSelectedValue.length - 1,
            );
          }
        }
      });
    }
  } catch (err) {
    console.error(err);
  }

  function textChanged(val: string) {
    dispatch(
      changeFilterUserInput({
        filterRow: props.filterUIData,
        newFilterUserDataInput: { inputValue: `"${val}"`, tempVal: "" },
      }),
    );
  }
  return (
    <div>
      <input
        type="text"
        id="first_name"
        className="block w-48 rounded-lg border border-gray-300 bg-white px-1 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        defaultValue={selectedValue}
        onChange={(e) => textChanged(e.target.value)}
      />
    </div>
  );
}
