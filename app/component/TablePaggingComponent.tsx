"use client";

import { PageDataType } from "@/lib/DefaultData/PageDataType";
import { useAppDispatch, useAppSelector } from "@/lib/Redux/Hooks/HomePageHook";
import { selectColumnListData } from "@/lib/Redux/Selectors/CommonSelectors/ColumnListDataSelector";
import { selectIncidentTableData } from "@/lib/Redux/Selectors/MainPage/MainPageSelector";
import { selectRequestTableData } from "@/lib/Redux/Selectors/Requests/RequestPageSelector";
import {
  fetchIncNextPageData,
  fetchIncPrevPageData,
} from "@/lib/Redux/Slices/MainPage/IncidentTableDataSlice";
import {
  fetchNextReqPageData,
  fetchPrevReqPageData,
} from "@/lib/Redux/Slices/RequestPage/RequestTableDataSlice";

interface ITablePagingComponent {
  pageDataType: PageDataType;
}

export default function TablePagingComponent(props: ITablePagingComponent) {
  const dispatch = useAppDispatch();
  const incidentData = useAppSelector(selectIncidentTableData);
  const requestData = useAppSelector(selectRequestTableData);
  const ColumnDataList = useAppSelector(selectColumnListData);
  let pageRangeTo = 0;
  let PageRange = "";
  let TotalCount: number | undefined = 0;
  let showPrev: boolean = false;
  let showNext: boolean = false;
  if (props.pageDataType === PageDataType.IncidentData) {
    pageRangeTo =
      incidentData.skip + ColumnDataList.incidentColumnList.NumberOfDataPerPage;
    if (
      incidentData.dataList?.totalCount &&
      pageRangeTo > incidentData.dataList?.totalCount
    ) {
      pageRangeTo = incidentData.dataList?.totalCount;
    }
    PageRange = `${incidentData.skip} to ${pageRangeTo}`;
    TotalCount = incidentData.dataList?.totalCount;
    showNext = incidentData.fetchNext;
    showPrev = incidentData.fetchPrev;
  } else if (props.pageDataType === PageDataType.RequestData) {
    pageRangeTo =
      requestData.skip + ColumnDataList.requestColumnList.NumberOfDataPerPage;
    if (
      requestData.dataList?.totalCount &&
      pageRangeTo > requestData.dataList?.totalCount
    ) {
      pageRangeTo = requestData.dataList?.totalCount;
    }
    PageRange = `${requestData.skip} to ${pageRangeTo}`;
    TotalCount = requestData.dataList?.totalCount;
    showNext = requestData.fetchNext;
    showPrev = requestData.fetchPrev;
  }

  function btn_FetchNext() {
    if (props.pageDataType === PageDataType.IncidentData) {
      dispatch(fetchIncNextPageData());
    } else if (props.pageDataType === PageDataType.RequestData) {
      dispatch(fetchNextReqPageData());
    }
  }
  function btn_fetchPrevData() {
    if (props.pageDataType === PageDataType.IncidentData) {
      dispatch(fetchIncPrevPageData());
    } else if (props.pageDataType === PageDataType.RequestData) {
      dispatch(fetchPrevReqPageData());
    }
  }
  const disableProps_Prev = showPrev
    ? {
        className: "btn join-item btn-sm justify-items-center",
        disabled: false,
      }
    : {
        className: "btn join-item btn-sm justify-items-center btn-disabled",
        disabled: true,
      };
  const disableProps_Next = showNext
    ? {
        className: "btn join-item btn-sm justify-items-center",
        disabled: false,
      }
    : {
        className: "btn join-item btn-sm justify-items-center btn-disabled",
        disabled: true,
      };
  return (
    <div className="p-2">
      <div className="join items-center justify-items-center gap-2 bg-gray-100">
        <button {...disableProps_Prev} onClick={btn_fetchPrevData}>
          <span>Prev</span>
        </button>
        <div className="join-item">{PageRange}</div>
        <div className="join-item">| Total {TotalCount}</div>
        <button {...disableProps_Next} onClick={btn_FetchNext}>
          <span>Next</span>
        </button>
      </div>
    </div>
  );
}
