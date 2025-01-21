import {
  FilterColumnValue,
  FilterDataFieldInput,
} from "@/lib/Models/FilterModels/FilterModels";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFilterDataFetchDDW {
  filterColumnValue: FilterColumnValue;
  filterDatainputFields: FilterDataFieldInput[];
}

export interface IFilterDataFetchList {
  filterDataFetchList: IFilterDataFetchDDW[];
  isLoading: -1 | 0 | 1;
  requestedFilterUIDataToFetch: FilterColumnValue | null;
  hasError: boolean | null;
  errorMessage: string | null;
}

const initData: IFilterDataFetchList = {
  filterDataFetchList: [],
  requestedFilterUIDataToFetch: null,
  isLoading: -1,
  hasError: null,
  errorMessage: null,
};
const FilterDataFieldDDW = createSlice({
  name: "FilterDataFieldDDW",
  initialState: initData,
  reducers: {
    fetchFilterDataField: (state, action: PayloadAction<FilterColumnValue>) => {
      state.requestedFilterUIDataToFetch = action.payload;
      state.isLoading = 1;
    },
    fetchCompletedFilterDataField: (
      state,
      action: PayloadAction<{
        data: IFilterDataFetchDDW | null;
        hasError: boolean;
        errorMessage: string;
      }>,
    ) => {
      //console.log(action.payload.data);
      state.errorMessage = action.payload.errorMessage;
      if (action.payload.data !== null) {
        //console.log(state.filterDataFetchList);
        state.filterDataFetchList.push(action.payload.data);
      }

      state.hasError = action.payload.hasError;
      state.isLoading = 0;

      //state.requestedFilterUIDataToFetch = null;
    },
    alreadyExistDataField: (state) => {
      state.isLoading = 0;
      state.errorMessage = "";
      state.hasError = false;
      //console.log("Already exist");
    },
  },
});
export default FilterDataFieldDDW.reducer;
export const {
  fetchFilterDataField,
  fetchCompletedFilterDataField,
  alreadyExistDataField,
} = FilterDataFieldDDW.actions;
