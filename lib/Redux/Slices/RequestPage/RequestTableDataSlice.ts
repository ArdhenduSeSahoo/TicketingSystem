import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TableDataList,
  RequestTableDataList_Default_Object,
} from "../../../Models/IncidentListModel";

const RequestTableData = createSlice({
  name: "RequestTableData",
  initialState: RequestTableDataList_Default_Object,
  reducers: {
    fetchRequestTableData: (state) => {
      state.skip = 0;

      state.loadingData = true;
    },
    fetchCompleteRequestTableData: (
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
    fetchNextReqPageData: (state) => {
      state.loadingData = true;
    },
    fetchPrevReqPageData: (state) => {
      state.loadingData = true;
    },
  },
});

export default RequestTableData.reducer;
export const {
  fetchCompleteRequestTableData,
  fetchRequestTableData,
  fetchNextReqPageData,
  fetchPrevReqPageData,
} = RequestTableData.actions;
