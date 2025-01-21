"use client";
import { PageDataType } from "@/lib/DefaultData/PageDataType";
import { useAppDispatch, useAppSelector } from "@/lib/Redux/Hooks/HomePageHook";
import { selectFilterFinalDataQuery } from "@/lib/Redux/Selectors/CommonSelectors/FilterSelectors";

import { restoreFromLocalStore } from "@/lib/Redux/Slices/commonSlices/FilterUIDataSlice";
import { useEffect } from "react";

export interface IFilterPanelInitDataLoaderProps {
  filterType: PageDataType;
}

export default function FilterPanelInitDataLoader(
  props: IFilterPanelInitDataLoaderProps,
) {
  const dispatch = useAppDispatch();
  const FilterFinalDataQuery = useAppSelector(selectFilterFinalDataQuery);
  useEffect(() => {
    dispatch(
      restoreFromLocalStore({
        filterType: props.filterType,
        incidentFilter: FilterFinalDataQuery.incidentFilterUIData,
        requestFilter: FilterFinalDataQuery.requestNowFilterUIData,
      }),
    );
  });
  return <></>;
}
