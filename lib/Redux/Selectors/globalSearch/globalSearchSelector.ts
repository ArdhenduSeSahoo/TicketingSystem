import { RootStateGlobal } from "../../Stores/globalSearchStore/globalSearchStore";

export const selectGlobalSearchData = (state: RootStateGlobal) =>
  state.GlobalSearch;
