import { GlobalSearchModel } from "@/lib/Models/GlobalSearchModels";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initVal: GlobalSearchModel = {
  searchData: [],
  isLoading: true,
  errorMessage: "",
  totalCount: 0,
  searchString: "",
};
const GlobalSearchSlice = createSlice({
  name: "GlobalSearch",
  initialState: initVal,
  reducers: {
    fetchGlobalSearchData: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
      state.isLoading = true;
      //console.log(state.searchString);
    },
    fetchCompleteGlobalSearchData: (
      state,
      action: PayloadAction<GlobalSearchModel>,
    ) => {
      state.searchData = action.payload.searchData; //[...action.payload.searchData];
      state.errorMessage = action.payload.errorMessage;
      state.isLoading = false;
    },
  },
});
export default GlobalSearchSlice.reducer;
export const { fetchCompleteGlobalSearchData, fetchGlobalSearchData } =
  GlobalSearchSlice.actions;
