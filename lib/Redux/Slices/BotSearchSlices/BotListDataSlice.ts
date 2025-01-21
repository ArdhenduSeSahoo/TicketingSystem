import { GlobalSearchModel } from "@/lib/Models/GlobalSearchModels";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initVal: GlobalSearchModel = {
  searchData: [],
  isLoading: false,
  errorMessage: "",
  totalCount: 0,
  searchString: "",
};

const BotListDataSlice = createSlice({
  name: "BotListDataSlice",
  initialState: initVal,
  reducers: {
    fetchBotGlobalSearchData: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
      state.isLoading = true;
      state.errorMessage="";
      //console.log(state.searchString);
    },
    fetchCompleteBotGlobalSearchData: (
      state,
      action: PayloadAction<GlobalSearchModel>,
    ) => {
      //console.log(action.payload);
      state.searchData = action.payload.searchData; //[...action.payload.searchData];
      state.errorMessage = action.payload.errorMessage;
      state.isLoading = false;
    },
  },
});

export default BotListDataSlice.reducer;
export const {
    fetchBotGlobalSearchData,
    fetchCompleteBotGlobalSearchData
}=BotListDataSlice.actions;