import { BotResultChartDataModel } from "@/lib/Models/BotModels/BotModels";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DashboardChartDataModel {
  chartOneLoading: boolean;
  chartOneData: null | BotResultChartDataModel;
  chartOneData_X_axis_param: string;
  errorMessageChartOne: string;
  chartTwoLoading: boolean;
  chartTwoData: null | BotResultChartDataModel;
  chartTwoData_X_axis_param: string;
  errorMessageChartTwo: string;
  chartThreeLoading: boolean;
  chartThreeData: null | BotResultChartDataModel;
  chartThreeData_X_axis_param: string;
  errorMessageChartThree: string;
  chartFourLoading: boolean;
  chartFourData: null | BotResultChartDataModel;
  chartFourData_X_axis_param: string;
  errorMessageChartFour: string;
}


const initVal: DashboardChartDataModel = {
  chartOneLoading: true,
  chartOneData: null,
  chartOneData_X_axis_param:"",
  errorMessageChartOne:"",
  chartTwoLoading: true,
  chartTwoData: null,
  chartTwoData_X_axis_param:"",
  errorMessageChartTwo:"",
  chartThreeLoading: true,
  chartThreeData: null,
  chartThreeData_X_axis_param: "",
  errorMessageChartThree: "",
  chartFourData:null,
  chartFourData_X_axis_param:"",
  chartFourLoading:true,
  errorMessageChartFour:"",
};



const dashboardSlice = createSlice({
  name: "DashboardDataSlice",
  initialState: initVal,
  reducers: {
    fetchDataChart_One: (state, action: PayloadAction<string>) => {
      state.chartOneData_X_axis_param = action.payload;
      state.chartOneLoading = true;
      state.chartOneData = null;
    },
    fetchDataChart_One_Complete: (
      state,
      action: PayloadAction<DashboardChartDataModel>,
    ) => {
      //console.log(action.payload);
      state.chartOneData_X_axis_param =
        action.payload.chartOneData_X_axis_param;
      state.chartOneData = action.payload.chartOneData;
      state.chartOneLoading = false;
    },
    fetchDataChart_Two: (state, action: PayloadAction<string>) => {
      state.chartTwoData_X_axis_param = action.payload;
      state.chartTwoLoading = true;
      state.chartTwoData = null;
    },
    fetchDataChart_Two_Complete: (
      state,
      action: PayloadAction<DashboardChartDataModel>,
    ) => {
      //console.log(action.payload);
      state.chartTwoData_X_axis_param =
        action.payload.chartTwoData_X_axis_param;
      state.chartTwoData = action.payload.chartTwoData;
      state.chartTwoLoading = false;
      //console.log(state);
    },
    fetchDataChart_Three: (state, action: PayloadAction<string>) => {
      state.chartThreeData_X_axis_param = action.payload;
      state.chartThreeLoading = true;
      state.chartThreeData = null;
    },
    fetchDataChart_Three_Complete: (
      state,
      action: PayloadAction<DashboardChartDataModel>,
    ) => {
      //console.log(action.payload);
      state.chartThreeData_X_axis_param =
        action.payload.chartThreeData_X_axis_param;
      state.chartThreeData = action.payload.chartThreeData;
      state.chartThreeLoading = false;
    },
    fetchDataChart_Four: (state, action: PayloadAction<string>) => {
      state.chartFourData_X_axis_param = action.payload;
      state.chartFourLoading = true;
      state.chartFourData = null;
    },
    fetchDataChart_Four_Complete: (
      state,
      action: PayloadAction<DashboardChartDataModel>,
    ) => {
      //console.log(action.payload);
      state.chartFourData_X_axis_param =
        action.payload.chartFourData_X_axis_param;
      state.chartFourData = action.payload.chartFourData;
      state.chartFourLoading = false;
    },
  },
});

export default dashboardSlice.reducer;
export const {
    fetchDataChart_One,
    fetchDataChart_One_Complete,
    fetchDataChart_Four,
    fetchDataChart_Four_Complete,
    fetchDataChart_Three,
    fetchDataChart_Three_Complete,
    fetchDataChart_Two,
    fetchDataChart_Two_Complete,
}=dashboardSlice.actions;