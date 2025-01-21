"use client";
import { PageDataType } from "@/lib/DefaultData/PageDataType";
import LeftItem from "./LeftItemsComponent";
import { ColumnConfig } from "@/lib/Models/ColumnConfigModel";
import { useAppSelector } from "@/lib/Redux/Hooks/HomePageHook";
import {
  selectAllItemList,
  selectLeftSelectedItem,
} from "@/lib/Redux/Selectors/CommonSelectors/FilterSelectors";

interface ILeftItemListComponent {
  pageDataLoadType: PageDataType;
}
export default function LeftItemListComponent(props: ILeftItemListComponent) {
  const allItemListSelectedItems = useAppSelector(selectAllItemList);
  const leftSelectedItems = useAppSelector(selectLeftSelectedItem);
  const itemlist = allItemListSelectedItems.map(
    (val: ColumnConfig, index: number) => {
      const is_selected = leftSelectedItems.some((lsi) => {
        return lsi.name === val.name;
      });
      return (
        <li key={index}>
          <LeftItem columnConfig={val} isselected={is_selected} />
        </li>
      );
    },
  );
  return (
    <div>
      <div className="relative mx-1 my-1 w-48">
        <ol className="flex flex-col gap-1">{itemlist}</ol>
      </div>
    </div>
  );
}
