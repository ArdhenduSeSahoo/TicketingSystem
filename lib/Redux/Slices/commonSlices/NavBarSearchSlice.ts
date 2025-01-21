import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface SearchDataModel {
  number: string;
  shortDescription: string;
  typeOfData: 1 | 2;
}
export interface NavBarSearchModel {
  searchData: SearchDataModel[];
  searchString: string;
  isLoading: boolean;
  errorMessage: string;
}
const initVal: NavBarSearchModel = {
  searchData: [],
  isLoading: true,
  errorMessage: "",
  searchString: "",
};
const NavBarSearchSlice = createSlice({
  name: "NavBarSearch",
  initialState: initVal,
  reducers: {
    fetchSearchData: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
      state.isLoading = true;
      //console.log(state.searchString);
    },
    fetchCompleteSearchData: (
      state,
      action: PayloadAction<NavBarSearchModel>,
    ) => {
      state.searchData = action.payload.searchData; //[...action.payload.searchData];
      state.errorMessage = action.payload.errorMessage;
      state.isLoading = false;
    },
  },
});
export default NavBarSearchSlice.reducer;
export const { fetchCompleteSearchData, fetchSearchData } =
  NavBarSearchSlice.actions;
