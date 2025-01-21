import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TableDataList,
  IncidentTableDataList_Default_Object,
} from "../../../Models/IncidentListModel";

const IncidentTableData = createSlice({
  name: "IncidentTableData",
  initialState: IncidentTableDataList_Default_Object,
  reducers: {
    fetchIncidentTableData: (state) => {
      state.skip = 0;
      state.loadingData = true;
    },
    fetchCompleteIncidentTableData: (
      state,
      action: PayloadAction<TableDataList>,
    ) => {
      const incomingdata = action.payload;
      state.allData = incomingdata.allData;
      state.dataList = incomingdata.dataList;
      state.errorFound = incomingdata.errorFound;
      state.errorMessage = incomingdata.errorMessage;
      state.skip = incomingdata.skip;
      state.fetchNext = incomingdata.fetchNext;
      state.fetchPrev = incomingdata.fetchPrev;
      state.loadingData = false;
    },
    fetchIncNextPageData: (state) => {
      state.loadingData = true;
    },
    fetchIncPrevPageData: (state) => {
      state.loadingData = true;
    },
  },
});

export default IncidentTableData.reducer;
export const {
  fetchIncidentTableData,
  fetchCompleteIncidentTableData,
  fetchIncNextPageData,
  fetchIncPrevPageData,
} = IncidentTableData.actions;
