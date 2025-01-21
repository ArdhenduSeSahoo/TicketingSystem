"use client";

import FilterControlRow from "./FilterControleRow";
import { useAppDispatch, useAppSelector } from "@/lib/Redux/Hooks/HomePageHook";

import { setFinalFilterData } from "@/lib/Redux/Slices/commonSlices/FilterFinalQuerySlice";
import { addBlankFilter } from "@/lib/Redux/Slices/commonSlices/FilterUIDataSlice";
import { useState } from "react";
import { fetchIncidentTableData } from "@/lib/Redux/Slices/MainPage/IncidentTableDataSlice";
import ModalTableConfig from "../TableConfigComponent/modalHeadless";
import {
  selectFilterFinalDataQuery,
  selectFilterUIDataAll,
} from "@/lib/Redux/Selectors/CommonSelectors/FilterSelectors";
import { PageDataType } from "@/lib/DefaultData/PageDataType";
import { fetchRequestTableData } from "@/lib/Redux/Slices/RequestPage/RequestTableDataSlice";

interface filterProp {
  typeOfFilter: PageDataType;
}
export default function FilterPanel(prop: filterProp) {
  const [c_checked, setc_checked] = useState(false);

  function btn_OpenFilterPanel() {
    // setc_checked((prv) => {
    //   return !prv;
    // });
  }

  const filterUIDataSelect = useAppSelector(selectFilterUIDataAll);
  const filterFinalQuerySelect = useAppSelector(selectFilterFinalDataQuery);
  const dispatch = useAppDispatch();
  let filterList: JSX.Element[] = [];
  let FilterConditionString: string | null = "";
  filterList = [];

  if (prop.typeOfFilter === PageDataType.IncidentData) {
    filterUIDataSelect.incidentFilterUIData?.forEach((itm, idx) => {
      filterList.push(<FilterControlRow key={idx} filterUiData={itm} />);
    });
    FilterConditionString = filterFinalQuerySelect.incidentFilterFinalQuery;
  } else if (prop.typeOfFilter === PageDataType.RequestData) {
    filterUIDataSelect.requestNowFilterUIData?.forEach((itm, idx) => {
      filterList.push(<FilterControlRow key={idx} filterUiData={itm} />);
    });
    FilterConditionString = filterFinalQuerySelect.requestFilterFinalQuery;
  }

  if (filterList.length <= 0) {
    //console.log("Calling remove filter");
    //dispatch(removeFilterFinalCondition({ filterType: prop.typeOfFilter }));
  }

  async function btn_AddFilter() {
    dispatch(
      addBlankFilter({
        filterType: prop.typeOfFilter,
        whereConditionType: 1,
      }),
    );
    //     const { data } = await fetch("https://192.168.7.71:8091/graphql/", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         query: `
    //    query ssss {
    //   approval {
    //     totalCount
    //   }
    // }
    //   `,
    //       }),
    //     }).then((res) => {
    //       //console.log(res.json());
    //       return res.json();
    //     });
    //     console.log(data);
  }

  function btn_RunFilter() {
    dispatch(
      setFinalFilterData({
        filterType: prop.typeOfFilter,
        incidentFilter: filterUIDataSelect.incidentFilterUIData,
        requestFilter: filterUIDataSelect.requestNowFilterUIData,
      }),
    );
    setTimeout(() => {
      if (prop.typeOfFilter === PageDataType.IncidentData) {
        dispatch(fetchIncidentTableData());
      } else if (prop.typeOfFilter === PageDataType.RequestData) {
        dispatch(fetchRequestTableData());
      }
    }, 500);
  }

  const design3 = (
    <>
      <div className="px-2">
        <div className="flex w-full flex-col">
          <div className="flex flex-row justify-between py-1">
            <div className="flex flex-row gap-2">
              <div className="btn btn-sm" onClick={btn_OpenFilterPanel}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 10a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM7 14a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM9 18a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
                    fill="#000000"
                  />
                </svg>
                Filter
              </div>

              <p className="self-center">{FilterConditionString}</p>
            </div>
            <div className="flex flex-row gap-2">
              {/* <label htmlFor="my_modal_6" className="btn btn-sm">
                Config
              </label> */}
              <ModalTableConfig pageDataLoadType={prop.typeOfFilter} />
              {/* <BtnConfigDialogOpenButton /> */}
            </div>
          </div>
          <div className="relative flex flex-col rounded-md bg-gray-100">
            <input
              className="peer/showLabel absolute scale-0"
              type="checkbox"
              checked={c_checked}
              readOnly
            />

            <div className="relative flex max-h-0 flex-col shadow-sm transition-all duration-300 peer-checked/showLabel:max-h-96">
              <div>asdas</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  const design4 = (
    <>
      <div>
        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title p-0">
            <div className="flex flex-row justify-between py-1">
              <div className="flex flex-row gap-2">
                <div className="btn btn-sm" onClick={btn_OpenFilterPanel}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 10a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM7 14a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM9 18a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
                      fill="#000000"
                    />
                  </svg>
                  Filter
                </div>

                {/* <p className="self-center">{FilterConditionString}</p> */}
              </div>
            </div>
          </div>
          <div className="collapse-content">
            <div className="flex w-full flex-col gap-1 p-1">
              <div className="flex w-full flex-row justify-between">
                <div className="flex flex-row">
                  {(filterList === null || filterList.length === 0) && (
                    <>
                      <div
                        className="btn btn-info btn-sm"
                        onClick={btn_AddFilter}
                      >
                        Add
                      </div>
                    </>
                  )}
                  <div className="w-1">
                    <div></div>
                  </div>
                </div>

                <ModalTableConfig pageDataLoadType={prop.typeOfFilter} />
              </div>
              <div className="w-full">
                <ul className="flex max-h-60 flex-col gap-1 overflow-y-auto p-2">
                  {filterList}
                </ul>
              </div>
              <div className="flex">
                {(filterList !== null || filterList.length > 0) && (
                  <>
                    <div
                      className="btn btn-info btn-sm"
                      onClick={btn_RunFilter}
                    >
                      Run
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return design4;
}
