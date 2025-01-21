import { RootStateNavBar } from "../../Stores/NavBarStore/NavBarStore";

export const selectNavBarSearchData = (state: RootStateNavBar) =>
  state.NavbarSearch;
