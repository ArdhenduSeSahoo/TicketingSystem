import { BotQueryResultData } from "@/lib/Models/BotModels/BotModels";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initVal: BotQueryResultData = {
  botResultType: null,
  botQuery: "",
  botTopIntent:"",
  botResultData: null,
  botShowAllQuery:"",
  isLoading:false,
  errorMessage:"",
  hasError:false,
};
const BotResultSlice = createSlice({
  name: "BotResultData",
  initialState: initVal,
  reducers: {
    fetchDataFromQuery: (state, action: PayloadAction<string>) => {
      state.botQuery = action.payload;
      state.isLoading=true;
      state.errorMessage="";
      state.hasError=false;
    },
    fetchDataFromQueryComplete: (
      state,
      action: PayloadAction<BotQueryResultData>,
    ) => {
        //console.log(action.payload);
        state.botQuery=action.payload.botQuery;
        state.botResultData=action.payload.botResultData;
        state.botResultType=action.payload.botResultType;
        state.botTopIntent=action.payload.botTopIntent;
        state.botShowAllQuery=action.payload.botShowAllQuery;
        state.errorMessage=action.payload.errorMessage;
        state.hasError=action.payload.hasError;
        state.isLoading=false;
        
    },
    
  },
});
export default BotResultSlice.reducer;
export const {
    fetchDataFromQuery,
    fetchDataFromQueryComplete,
    
}=BotResultSlice.actions;