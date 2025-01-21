import { ColumnConfig } from "@/lib/Models/ColumnConfigModel";
import { AllColumnListModel_DefaultValue } from "@/lib/Models/IncidentListModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const ColumnsListData = createSlice({
  name: "ColumnsListData",
  initialState: AllColumnListModel_DefaultValue,
  reducers: {
    loadIncidentInitStateData: (
      state,
      action: PayloadAction<ColumnConfig[]>,
    ) => {
      let generategquery = "";
      action.payload.forEach((que) => {
        generategquery += que.queryG + "\n";
      });
      state.incidentColumnList.columnConfigList = action.payload;
      state.incidentColumnList.gQuery = generategquery;
    },
    AddIncidentColumns: (state, action: PayloadAction<ColumnConfig[]>) => {
      let generategquery = "";
      action.payload.forEach((que) => {
        generategquery += que.queryG + "\n";
      });
      //console.log(generategquery);
      state.incidentColumnList.columnConfigList = action.payload;
      state.incidentColumnList.gQuery = generategquery;
    },
    setNumberOfDataPerPageInc: (state, action: PayloadAction<number>) => {
      state.incidentColumnList.NumberOfDataPerPage = action.payload;
    },
    loadRequestInitStateData: (
      state,
      action: PayloadAction<ColumnConfig[]>,
    ) => {
      let generategquery = "";
      action.payload.forEach((que) => {
        generategquery += que.queryG + "\n";
      });
      state.requestColumnList.columnConfigList = action.payload;
      state.requestColumnList.gQuery = generategquery;
    },
    AddRequestColumns: (state, action: PayloadAction<ColumnConfig[]>) => {
      let generategquery = "";
      action.payload.forEach((que) => {
        generategquery += que.queryG + "\n";
      });
      state.requestColumnList.columnConfigList = action.payload;
      state.requestColumnList.gQuery = generategquery;
    },
    setNumberOfDataPerPageReq: (state, action: PayloadAction<number>) => {
      state.requestColumnList.NumberOfDataPerPage = action.payload;
    },
  },
});

export default ColumnsListData.reducer;
export const {
  loadIncidentInitStateData,
  AddIncidentColumns,
  AddRequestColumns,
  loadRequestInitStateData,
  setNumberOfDataPerPageInc,
  setNumberOfDataPerPageReq,
} = ColumnsListData.actions;
