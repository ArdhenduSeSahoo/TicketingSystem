import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// export interface SearchDataModel {
//   number: string;
//   shortDescription: string;
//   typeOfData: 1 | 2;
// }
export interface GeneralSearchModel {
  searchData: object;
  searchString: string;
  isLoading: boolean;
  errorMessage: string;
  whoRequestingFor: string;
}
const initVal: GeneralSearchModel = {
  searchData: {},
  isLoading: true,
  errorMessage: "",
  searchString: "",
  whoRequestingFor: "",
};
const GeneralSearchSlice = createSlice({
  name: "GeneralSearch",
  initialState: initVal,
  reducers: {
    fetchGeneralSearchData: (
      state,
      action: PayloadAction<{ whoSearchfor: string; searchQuery: string }>,
    ) => {
      state.searchString = action.payload.searchQuery;
      state.whoRequestingFor = action.payload.whoSearchfor;
      state.searchData = {};
      state.errorMessage = "";
      state.isLoading = true;
      //console.log(state.searchString);
    },
    fetchCompleteGeneralSearchData: (
      state,
      action: PayloadAction<GeneralSearchModel>,
    ) => {
      state.searchData = action.payload.searchData; //[...action.payload.searchData];
      state.errorMessage = action.payload.errorMessage;
      state.whoRequestingFor = action.payload.whoRequestingFor;
      state.searchString = action.payload.searchString;
      state.isLoading = false;
    },
  },
});
export default GeneralSearchSlice.reducer;
export const { fetchCompleteGeneralSearchData, fetchGeneralSearchData } =
  GeneralSearchSlice.actions;
