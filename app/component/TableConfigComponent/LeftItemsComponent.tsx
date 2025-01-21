"use client";
import { ColumnConfig } from "@/lib/Models/ColumnConfigModel";
import { useAppDispatch } from "@/lib/Redux/Hooks/HomePageHook";
import {
  addToLeftSelectedItem,
  removeLeftSelectedItem,
} from "@/lib/Redux/Slices/commonSlices/SelectedItemSlice";
import * as React from "react";

export interface IItemProps {
  isselected?: boolean;
  columnConfig: ColumnConfig;
}

export default function LeftItem(props: IItemProps) {
  const dispatch = useAppDispatch();
  function onClickItem() {
    if (!props.isselected) {
      dispatch(addToLeftSelectedItem([props.columnConfig]));
    } else {
      dispatch(removeLeftSelectedItem([props.columnConfig]));
    }
  }
  return (
    <div
      className={`px-1 hover:bg-blue-200 rounded-md  ${props.isselected ? "bg-purple-300" : ""}`}
      onClick={onClickItem}
    >
      {props.columnConfig?.name}
    </div>
  );
}
