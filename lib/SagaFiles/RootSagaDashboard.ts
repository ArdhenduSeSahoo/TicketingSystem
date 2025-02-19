import { all, fork } from "redux-saga/effects";
import { fetchDashboardChart_Four_DataWatcher, fetchDashboardChart_One_DataWatcher, fetchDashboardChart_Three_DataWatcher, fetchDashboardChart_Two_DataWatcher } from "./DashboardSaga/DashboardSaga";

export function* rootSagaDashboard() {
  yield all([
    fork(fetchDashboardChart_One_DataWatcher),
    fork(fetchDashboardChart_Two_DataWatcher),
    fork(fetchDashboardChart_Three_DataWatcher),
    fork(fetchDashboardChart_Four_DataWatcher),
  ]);
}