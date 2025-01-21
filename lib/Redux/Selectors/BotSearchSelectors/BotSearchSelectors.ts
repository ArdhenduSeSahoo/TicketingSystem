import { RootStateBotSearch } from "../../Stores/BotSearchStore/BotSearchStore";

export const selectBotCharts = (state: RootStateBotSearch) =>
  state.BotsearchChartSlice;
export const selectBotResultData = (state: RootStateBotSearch) =>
  state.BotResultSlice;
export const selectBotListData = (state: RootStateBotSearch) =>
  state.BotListDataSlice;