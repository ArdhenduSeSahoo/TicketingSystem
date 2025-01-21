import { RootState } from "../../Stores/MainPageStore/MainPageStore";

export const selectLeftSelectedItem = (state: RootState) =>
  state.selectedItem.leftSelectedColumn;
export const selectRightSelectedItem = (state: RootState) =>
  state.selectedItem.rightSelectedColumn;
export const selectFinalSelectedItem = (state: RootState) =>
  state.selectedItem.finalModifiedList;
export const selectAllItemList = (state: RootState) =>
  state.selectedItem.allColumnList;

export const selectFilterUIDataAll = (state: RootState) => state.filterUiData;
export const selectFilterDataFieldDdw = (state: RootState) =>
  state.filterDataFieldDdw;
export const selectFilterFinalDataQuery = (state: RootState) =>
  state.FilterFinalDataQuery;
