import { SearchDataModel } from "@/lib/Redux/Slices/commonSlices/NavBarSearchSlice";
import Link from "next/link";

export interface ISearchItemProps {
  dataItem: SearchDataModel;
}

export default function SearchItem(props: ISearchItemProps) {
  return (
    <li>
      <Link
        href={
          props.dataItem.typeOfData == 1
            ? `/lyt2/a/incidentdetails/${props.dataItem.number}`
            : `/lyt2/a/requestdetails/${props.dataItem.number}`
        }
        target="_blank"
      >
        <div className="mx-1 flex h-20 flex-col overflow-clip rounded-md bg-gray-100 p-1 hover:bg-blue-100">
          <p className="truncate text-sm font-semibold">
            {props.dataItem.shortDescription}
          </p>
          <p className="text-sm">ID: {props.dataItem.number}</p>
        </div>
      </Link>
    </li>
  );
}
