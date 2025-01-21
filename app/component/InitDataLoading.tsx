"use client";
import { IncidentDefaultColumnConfig } from "@/lib/DefaultData/IncidentDefaultColumns";
import { PageDataType } from "@/lib/DefaultData/PageDataType";
import { RequestsDefaultColumnConfig } from "@/lib/DefaultData/Requests/RequestDefaultColumns";
import { useAppDispatch, useAppSelector } from "@/lib/Redux/Hooks/HomePageHook";
import { selectColumnListData } from "@/lib/Redux/Selectors/CommonSelectors/ColumnListDataSelector";
import {
  loadIncidentInitStateData,
  loadRequestInitStateData,
} from "@/lib/Redux/Slices/commonSlices/ColumnListSlice";

import { fetchIncidentTableData } from "@/lib/Redux/Slices/MainPage/IncidentTableDataSlice";
import { fetchRequestTableData } from "@/lib/Redux/Slices/RequestPage/RequestTableDataSlice";
import { useEffect } from "react";

export interface IInitDataLoadingProps {
  filterType: PageDataType;
}

export default function InitDataLoading(props: IInitDataLoadingProps) {
  const columnsListDataSelector = useAppSelector(selectColumnListData);

  const dispatch = useAppDispatch();
  useEffect(() => {
    // const localstorecolumnconfig = localStorage.getItem(
    //   IncidentColumnConfigKey,
    // );
    // if (localstorecolumnconfig?.trim().length !== 0) {
    //   try {
    //     const columnConfigList = JSON.parse(
    //       localstorecolumnconfig!,
    //     ) as ColumnConfig[];
    //     dispatch(loadInitStateData(columnConfigList));
    //   } catch (error) {
    //     console.error(error);
    //     dispatch(loadInitStateData(IncidentDefaultColumnConfig));
    //   }
    // } else {
    //   dispatch(loadInitStateData(IncidentDefaultColumnConfig));
    // }
    //dispatch(fetchIncidentTableData());
    if (props.filterType === PageDataType.IncidentData) {
      if (
        columnsListDataSelector.incidentColumnList.columnConfigList.length === 0
      ) {
        dispatch(loadIncidentInitStateData(IncidentDefaultColumnConfig));
        setTimeout(() => {
          dispatch(fetchIncidentTableData());
        }, 500);
      } else {
        dispatch(fetchIncidentTableData());
      }
    } else if (props.filterType === PageDataType.RequestData) {
      if (
        columnsListDataSelector.requestColumnList.columnConfigList.length === 0
      ) {
        dispatch(loadRequestInitStateData(RequestsDefaultColumnConfig));
        setTimeout(() => {
          dispatch(fetchRequestTableData());
        }, 500);
      } else {
        dispatch(fetchRequestTableData());
      }
    }
  });
  return <></>;
}
