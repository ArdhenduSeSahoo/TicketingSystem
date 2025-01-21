"use client";
import { IncidentDefaultColumnConfig } from "@/lib/DefaultData/IncidentDefaultColumns";
import { useAppDispatch } from "@/lib/Redux/Hooks/HomePageHook";
import {
  removeAllFinalModifyItem,
  removeAllSelectedItem,
  setDefaultColumns,
} from "@/lib/Redux/Slices/commonSlices/SelectedItemSlice";

export default function DefaultButton() {
  const dispatch = useAppDispatch();
  function btn_click() {
    dispatch(removeAllSelectedItem());
    dispatch(removeAllFinalModifyItem());
    dispatch(setDefaultColumns(IncidentDefaultColumnConfig));
  }
  return (
    <div>
      <button
        className="btn-standard bg-blue-300 hover:bg-blue-400"
        onClick={btn_click}
      >
        Default
      </button>
    </div>
  );
}
