import { RootState } from "../../Stores/MainPageStore/MainPageStore";

export const selectIncidentTableData = (state: RootState) =>
  state.incidentTableData;
