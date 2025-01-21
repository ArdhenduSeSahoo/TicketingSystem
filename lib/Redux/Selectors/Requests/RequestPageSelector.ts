import { RootState } from "../../Stores/MainPageStore/MainPageStore";

export const selectRequestTableData = (state: RootState) =>
  state.requestTableData;
