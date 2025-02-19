import { put, select, takeLatest } from "redux-saga/effects";
import {
  DashboardDataSlice_fetchDataChart_Four,
  DashboardDataSlice_fetchDataChart_One,
  DashboardDataSlice_fetchDataChart_Three,
  DashboardDataSlice_fetchDataChart_Two,
} from "../SagaActionKeys";
import { selectDashboardData } from "@/lib/Redux/Selectors/DashboardSelectors/DashboardSelectors";
import {
  DashboardChartDataModel,
  fetchDataChart_Four_Complete,
  fetchDataChart_One_Complete,
  fetchDataChart_Three_Complete,
  fetchDataChart_Two_Complete,
} from "@/lib/Redux/Slices/dashboardSlice/DashboardSlice";
import { BotResultDataResponsModel } from "@/lib/Models/BotModels/BotModels";
import { EndPoint_GetChartData_By_X_axis_Parameter } from "@/lib/DefaultData/BaseURLs";
import { ApiCall_Post } from "@/lib/api_call/ApiCall";

function* fetchChartOneData() {
  const selectordashbord: DashboardChartDataModel =
    yield select(selectDashboardData);
  const request_body = `{"generalquery": "${selectordashbord.chartOneData_X_axis_param}"}`;
  try {
    const response: BotResultDataResponsModel = yield ApiCall_Post(
      EndPoint_GetChartData_By_X_axis_Parameter,
      request_body,
    );
    //console.log(response);
    if (response !== undefined) {
      yield put(
        fetchDataChart_One_Complete({
          ...selectordashbord,
          chartOneData_X_axis_param: selectordashbord.chartOneData_X_axis_param,
          chartOneData: response.predictionnResult,
          chartOneLoading: false,
          errorMessageChartOne: response.errorMessage,
        }),
      );
    }
  } catch (error) {
    console.log(error);
  }
  //console.log(selectordashbord.chartOneData_X_axis_param);
}

function* fetchChartTwoData() {
  const selectordashbord: DashboardChartDataModel =
    yield select(selectDashboardData);
  const request_body = `{"generalquery": "${selectordashbord.chartTwoData_X_axis_param}"}`;
  try {
    const response: BotResultDataResponsModel = yield ApiCall_Post(
      EndPoint_GetChartData_By_X_axis_Parameter,
      request_body,
    );
    console.log(response);
    if (response !== undefined) {
      yield put(
        fetchDataChart_Two_Complete({
          ...selectordashbord,
          chartTwoData_X_axis_param: selectordashbord.chartTwoData_X_axis_param,
          chartTwoData: response.predictionnResult,
          chartTwoLoading: false,
          errorMessageChartTwo: response.errorMessage,
        }),
      );
    }
  } catch (error) {
    console.log(error);
  }
  //console.log(selectordashbord.chartOneData_X_axis_param);
}

function* fetchChartThreeData() {
  const selectordashbord: DashboardChartDataModel =
    yield select(selectDashboardData);
  const request_body = `{"generalquery": "${selectordashbord.chartThreeData_X_axis_param}"}`;
  try {
    const response: BotResultDataResponsModel = yield ApiCall_Post(
      EndPoint_GetChartData_By_X_axis_Parameter,
      request_body,
    );
    //console.log(response);
    if (response !== undefined) {
      yield put(
        fetchDataChart_Three_Complete({
          ...selectordashbord,
          chartThreeData_X_axis_param:
            selectordashbord.chartThreeData_X_axis_param,
          chartThreeData: response.predictionnResult,
          chartThreeLoading: false,
          errorMessageChartThree: response.errorMessage,
        }),
      );
    }
  } catch (error) {
    console.log(error);
  }
  //console.log(selectordashbord.chartOneData_X_axis_param);
}
function* fetchChartFourData() {
  const selectordashbord: DashboardChartDataModel =
    yield select(selectDashboardData);
  const request_body = `{"generalquery": "${selectordashbord.chartFourData_X_axis_param}"}`;
  try {
    const response: BotResultDataResponsModel = yield ApiCall_Post(
      EndPoint_GetChartData_By_X_axis_Parameter,
      request_body,
    );
    //console.log(response);
    if (response !== undefined) {
      yield put(
        fetchDataChart_Four_Complete({
          ...selectordashbord,
          chartFourData_X_axis_param:
            selectordashbord.chartFourData_X_axis_param,
          chartFourData: response.predictionnResult,
          chartFourLoading: false,
          errorMessageChartFour: response.errorMessage,
        }),
      );
    }
  } catch (error) {
    console.log(error);
  }
  //console.log(selectordashbord.chartOneData_X_axis_param);
}

export function* fetchDashboardChart_One_DataWatcher() {
  yield takeLatest(DashboardDataSlice_fetchDataChart_One, fetchChartOneData);
}
export function* fetchDashboardChart_Two_DataWatcher() {
  yield takeLatest(DashboardDataSlice_fetchDataChart_Two, fetchChartTwoData);
}
export function* fetchDashboardChart_Three_DataWatcher() {
  yield takeLatest(DashboardDataSlice_fetchDataChart_Three, fetchChartThreeData);
}
export function* fetchDashboardChart_Four_DataWatcher() {
  yield takeLatest(DashboardDataSlice_fetchDataChart_Four, fetchChartFourData);
}