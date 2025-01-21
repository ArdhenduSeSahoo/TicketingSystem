"use client";
import { ColumnConfig } from "@/lib/Models/ColumnConfigModel";
import { useAppSelector } from "@/lib/Redux/Hooks/HomePageHook";

import RightItem from "./RightListItem";
import {
  selectFinalSelectedItem,
  selectRightSelectedItem,
} from "@/lib/Redux/Selectors/CommonSelectors/FilterSelectors";

export default function RightItemListComponent() {
  const right_SelectedColumn = useAppSelector(selectRightSelectedItem);
  const final_SelectedColumn = useAppSelector(selectFinalSelectedItem);
  const all_columns = [...final_SelectedColumn];

  const itemlist = all_columns.map((val: ColumnConfig, index: number) => {
    const is_Selected = right_SelectedColumn.some((rsi) => {
      return rsi.name === val.name;
    });
    return (
      <li key={index}>
        <RightItem columnConfig={val} isselected={is_Selected} />
      </li>
    );
  });
  return (
    <div>
      <div className="relative mx-1 my-1 w-48">
        <ol>{itemlist}</ol>
      </div>
    </div>
  );
}
