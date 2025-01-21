// import { ColumnConfig } from "@/lib/Models/ColumnConfigModel";
// import { AllColumnListModel_DefaultValue } from "@/lib/Models/IncidentListModel";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // const initstate: ColumnListSliceModel = {
// //   columnConfigList: [],
// //   gQuery: "",
// //   NumberOfDataPerPage: 100,
// //   PageDataType: PageDataType.RequestData,
// // };
// const requestColumns = createSlice({
//   name: "RequestColumns",
//   initialState: AllColumnListModel_DefaultValue,
//   reducers: {
//     loadRequestInitStateData: (
//       state,
//       action: PayloadAction<ColumnConfig[]>,
//     ) => {
//       let generategquery = "";
//       action.payload.forEach((que) => {
//         generategquery += que.queryG + "\n";
//       });
//       state.requestColumnList.columnConfigList = action.payload;
//       state.requestColumnList.gQuery = generategquery;
//     },
//     AddRequestColumns: (state, action: PayloadAction<ColumnConfig[]>) => {
//       let generategquery = "";
//       action.payload.forEach((que) => {
//         generategquery += que.queryG + "\n";
//       });
//       state.requestColumnList.columnConfigList = action.payload;
//       state.requestColumnList.gQuery = generategquery;
//     },
//     setNumberOfDataPerPageRequest: (state, action: PayloadAction<number>) => {
//       state.requestColumnList.NumberOfDataPerPage = action.payload;
//     },
//   },
// });

// export default requestColumns.reducer;
// export const {
//   loadRequestInitStateData,
//   AddRequestColumns,
//   setNumberOfDataPerPageRequest,
// } = requestColumns.actions;
