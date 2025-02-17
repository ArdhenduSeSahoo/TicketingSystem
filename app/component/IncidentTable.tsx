"use client";
import { IncidentDefaultColumnConfig } from "@/lib/DefaultData/IncidentDefaultColumns";
import { PageDataType } from "@/lib/DefaultData/PageDataType";
import { RequestsDefaultColumnConfig } from "@/lib/DefaultData/Requests/RequestDefaultColumns";
import { ColumnConfig } from "@/lib/Models/ColumnConfigModel";
import {
  TableDataList,
  TableDataList_Default_Object,
} from "@/lib/Models/IncidentListModel";
import { useAppSelector } from "@/lib/Redux/Hooks/HomePageHook";
import { selectColumnListData } from "@/lib/Redux/Selectors/CommonSelectors/ColumnListDataSelector";
import { selectIncidentTableData } from "@/lib/Redux/Selectors/MainPage/MainPageSelector";
import { selectRequestTableData } from "@/lib/Redux/Selectors/Requests/RequestPageSelector";
import Image from "next/image";
import Link from "next/link";
//import nodataimage from "/images/DataNotFound.PNG";
interface ITableConfig {
  pageDataType: PageDataType;
}
export default function IncidentTable(props: ITableConfig) {
  const ColumnsDataList = useAppSelector(selectColumnListData);
  const incidentData = useAppSelector(selectIncidentTableData);
  const requestData = useAppSelector(selectRequestTableData);

  let headerColumnList: JSX.Element[] = [<></>];
  let selectedColumnHeaders: ColumnConfig[] = [];

  const DataItems = [];
  let tableDataList: TableDataList = TableDataList_Default_Object;
  let detailsPageURl = "";

  function columnCellDesign(pro: { index: number; value: string }) {
    return (
      <th key={pro.index} scope="col" className="min-w-10 px-6 py-3">
        <div className="flex items-center justify-center">{pro.value}</div>
      </th>
    );
  }

  function dataCellDesign(pro: { cellValue: string }) {
    return (
      <>
        <td>
          <div className="flex max-h-36 justify-start overflow-x-auto text-left">
            <div>{pro.cellValue}</div>
          </div>
        </td>
      </>
    );
  }
  if (props.pageDataType === PageDataType.IncidentData) {
    let incidentColumnList =
      ColumnsDataList.incidentColumnList.columnConfigList;
    if (incidentColumnList.length === 0) {
      incidentColumnList = IncidentDefaultColumnConfig;
    }
    selectedColumnHeaders = incidentColumnList;
    headerColumnList = incidentColumnList.map(
      (val: ColumnConfig, index: number) => {
        return columnCellDesign({ index: index, value: val.name });
      },
    );
    tableDataList = { ...incidentData };
    detailsPageURl = "/lyt2/a/incidentdetails";
  } else if (props.pageDataType === PageDataType.RequestData) {
    let requestColumnList = ColumnsDataList.requestColumnList.columnConfigList;
    if (requestColumnList.length === 0) {
      requestColumnList = RequestsDefaultColumnConfig;
    }
    selectedColumnHeaders = requestColumnList;
    headerColumnList = requestColumnList.map(
      (val: ColumnConfig, index: number) => {
        return columnCellDesign({ index: index, value: val.name });
      },
    );
    tableDataList = { ...requestData };
    detailsPageURl = "/lyt2/a/requestdetails";
  }

  if (tableDataList.errorFound) {
    DataItems.push(
      <tr>
        <td colSpan={100}>
          <div className="flex items-center justify-center">
            <div className="">{tableDataList.errorMessage} </div>
          </div>
        </td>
      </tr>,
    );
  } else if (tableDataList.loadingData) {
    //loader
    const columnList_loader = selectedColumnHeaders.map(
      (val: ColumnConfig, index: number) => {
        return (
          <td key={index}>
            <div className="z-10 flex animate-pulse items-center justify-center">
              <div className="h-7 w-32 rounded-md bg-gray-300"></div>
            </div>
          </td>
        );
      },
    );

    for (let i = 0; i < 10; i++) {
      DataItems.push(
        <tr
          key={i}
          className="border-b bg-white font-medium text-black hover:bg-blue-100"
        >
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
              />
              <label htmlFor="checkbox-all-search" className="sr-only">
                checkbox
              </label>
            </div>
          </th>
          {columnList_loader}
        </tr>,
      );
    }
  } else {
    //show data
    if (
      tableDataList.dataList === null ||
      tableDataList.dataList === undefined ||
      tableDataList.dataList.items.length <= 0
    ) {
      DataItems.push(
        <tr>
          <td colSpan={100}>
            <div className="flex items-center justify-center p-5">
              <Image
                alt="no data"
                src={"/images/DataNotFound.PNG"}
                height={300}
                width={300}
                className="object-cover"
              />
            </div>
          </td>
        </tr>,
      );
    } else {
      tableDataList.dataList?.items.forEach((itm, index) => {
        const cellData = [];
        //let keyval = 1;
        for (const [dkey, value] of Object.entries(itm)) {
          if (typeof value === "object") {
            //get First data of Object and add to cell.
            // it is important to place display data as first key - value pair in object.
            let has_sub_data = false;
            if (value != null && value != undefined) {
              for (const [skey, svalue] of Object.entries(value)) {
                console.log(skey);
                cellData.push(dataCellDesign({ cellValue: String(svalue) }));
                //keyval++;
                has_sub_data = true;
                break;
              }
            }
            if (!has_sub_data) {
              cellData.push(dataCellDesign({ cellValue: String("NA") }));
            }
          } else {
            if (dkey === "number") {
              cellData.push(
                <td className="pl-1 pr-2">
                  <Link
                    href={{
                      pathname: `${detailsPageURl}/${value}`,
                    }}
                    scroll={false}
                    target="_blank"
                    className="text-blue-500"
                  >
                    {String(value)}
                  </Link>
                </td>,
              );
            } else {
              cellData.push(dataCellDesign({ cellValue: String(value) }));
            }

            //keyval++;
          }
        }
        //keyval = 1;
        DataItems.push(
          <tr
            key={index}
            className="border-b bg-white font-medium text-black hover:bg-blue-100"
          >
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            {cellData}
          </tr>,
        );
      });
    }
  }

  return (
    <>
      <div className="relative">
        <table className="w-full text-left text-xs text-gray-500 rtl:text-right">
          <thead className="sticky top-0 rounded-tl-md rounded-tr-md bg-gray-700 text-xs uppercase text-white">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 ring-offset-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-gray-800"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>

              {headerColumnList}
            </tr>
          </thead>
          <tbody>{DataItems}</tbody>
        </table>
      </div>
    </>
  );
}
