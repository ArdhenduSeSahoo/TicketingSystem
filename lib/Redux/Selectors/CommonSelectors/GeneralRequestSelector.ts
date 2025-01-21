import { RootStateGeneral } from "../../Stores/CommonStore/GeneralRequestStore";

export const selectGeneralSearchData = (state: RootStateGeneral) =>
  state.GeneralSearch;
