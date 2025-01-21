"use client";

import { useAppDispatch, useAppSelector } from "@/lib/Redux/Hooks/HomePageHook";
import { selectFinalSelectedItem } from "@/lib/Redux/Selectors/CommonSelectors/FilterSelectors";

import { AddIncidentColumns } from "@/lib/Redux/Slices/MainPage/IncidentColumnsSlice";
import { fetchIncidentTableData } from "@/lib/Redux/Slices/MainPage/IncidentTableDataSlice";
import {
  removeAllColumnList,
  removeAllFinalModifyItem,
  removeAllSelectedItem,
} from "@/lib/Redux/Slices/commonSlices/SelectedItemSlice";

export default function SaveButtonConfigTable() {
  const dispatch = useAppDispatch();

  const selectFinalColumnList = useAppSelector(selectFinalSelectedItem);

  function btn_click() {
    //console.log(selectFinalColumnList);
    dispatch(AddIncidentColumns(selectFinalColumnList));

    dispatch(removeAllSelectedItem());
    dispatch(removeAllFinalModifyItem());
    dispatch(removeAllColumnList());
    dispatch(fetchIncidentTableData());
  }
  return (
    <div>
      <label
        htmlFor="my_modal_6"
        className="btn btn-info btn-sm"
        onClick={btn_click}
      >
        Saveclicked
      </label>
      {/* <button
        type="button"
        onClick={btn_click}
        className="btn-standard border border-blue-900 bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none"
        data-hs-overlay="#hs-vertically-centered-scrollable-modal"
      >
        Save
      </button> */}
    </div>
  );
}
