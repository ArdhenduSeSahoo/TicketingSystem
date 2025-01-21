
import { GlobalSearchDataModel } from "@/lib/Models/GlobalSearchModels";
import Link from "next/link";
import * as React from "react";

export interface ISearchItemProps {
  dataItem: GlobalSearchDataModel;
}

export default function SearchItem(props: ISearchItemProps) {
  return (
    <>
      <li>
        <div className="flex border-spacing-3 flex-row overflow-clip rounded-lg border border-gray-400">
          <div className="flex max-h-full w-1 bg-blue-300">
            <div className="hidden">{" a"}</div>
          </div>
          <div className="flex flex-col p-2 lg:min-w-[50rem]">
            <div>
              <Link
                href={
                  props.dataItem.typeOfData === 1
                    ? `/lyt2/a/incidentdetails/${props.dataItem.number}`
                    : `/lyt2/a/requestdetails/${props.dataItem.number}`
                }
                target="_blank"
                className="font-semibold text-blue-700"
              >
                {props.dataItem.number}
              </Link>
            </div>
            <div className="flex max-h-44 min-w-80 max-w-[70rem] flex-col overflow-auto text-black">
              <div className="text-sm">
                Short Desc: {props.dataItem.shortDescription}
              </div>
              <div className="text-sm">Desc: {props.dataItem.description}</div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
