import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BotChartModel{
    //chartId:number;
    chartText:string;
    chartType:"user"|"bot";
}
export interface BotChartListModel{
    chartList:BotChartModel[];
    botFetchingData:boolean;
    botQuery:string;
    errorMessage:string;
}

const initVal:BotChartListModel={
    chartList:[],
    botFetchingData:false,
    errorMessage:"",
    botQuery:"",
}
const BotChartSlice = createSlice({
  name: "BotChartSlice",
  initialState: initVal,
  reducers: {
    addChartToList: (state, action: PayloadAction<BotChartModel>) => {
      state.chartList.push({ ...action.payload });
    },
    setBotQuery: (state, action: PayloadAction<string>) => {
      state.botQuery = action.payload;
    },
    setBotQueryDataLoading: (state, action: PayloadAction<{isLoading: boolean,errorMessage:string}>) => {
      state.botFetchingData = action.payload.isLoading;
      state.errorMessage=action.payload.errorMessage;
    },
  },
});
export default BotChartSlice.reducer;
export const {addChartToList,setBotQuery,setBotQueryDataLoading}=BotChartSlice.actions;