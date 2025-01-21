// import { ColumnConfig } from "@/lib/Models/ColumnConfigModel";
// import { AllColumnListModel_DefaultValue } from "@/lib/Models/IncidentListModel";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // const initstate: ColumnListSliceModel = {
// //   columnConfigList: [],
// //   gQuery: "",
// //   NumberOfDataPerPage: 100,
// //   PageDataType: PageDataType.IncidentData,
// // };
// const incidentColumns = createSlice({
//   name: "IncidentColumns",
//   initialState: AllColumnListModel_DefaultValue,
//   reducers: {
//     loadIncidentInitStateData: (
//       state,
//       action: PayloadAction<ColumnConfig[]>,
//     ) => {
//       let generategquery = "";
//       action.payload.forEach((que) => {
//         generategquery += que.queryG + "\n";
//       });
//       state.incidentColumnList.columnConfigList = action.payload;
//       state.incidentColumnList.gQuery = generategquery;
//     },
//     AddIncidentColumns: (state, action: PayloadAction<ColumnConfig[]>) => {
//       let generategquery = "";
//       action.payload.forEach((que) => {
//         generategquery += que.queryG + "\n";
//       });
//       state.incidentColumnList.columnConfigList = action.payload;
//       state.incidentColumnList.gQuery = generategquery;
//     },
//     setNumberOfDataPerPage: (state, action: PayloadAction<number>) => {
//       state.incidentColumnList.NumberOfDataPerPage = action.payload;
//     },
//   },
// });

// export default incidentColumns.reducer;
// export const { loadIncidentInitStateData, AddIncidentColumns } =
//   incidentColumns.actions;
