/* eslint-disable @typescript-eslint/no-unused-vars */
import { IncidentTableDataModel } from "@/lib/Models/IncidentListModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { incidentListDefaultQuery } from "../../../DefaultData/IncidentListQueryDefault";
const initState: IncidentTableDataModel = {
  loadingData: false,
  gQuery: incidentListDefaultQuery,
  dataJson: "",
  currentPageNumber: 1,
  pageDataCount: 50,
  errorFound: false,
  errorMessage: "",
};
const incidentList = createSlice({
  name: "incidentList",
  initialState: initState,
  reducers: {
    fetchIncidentList: (state) => {
      state.loadingData = true;
    },
    fetchSuccessIncidentList: (
      state,
      action: PayloadAction<IncidentTableDataModel>,
    ) => {
      const datamodel = action.payload;
      datamodel.loadingData = false;
      state = datamodel;
    },
  },
});
export default incidentList.reducer;
export const { fetchIncidentList, fetchSuccessIncidentList } =
  incidentList.actions;
