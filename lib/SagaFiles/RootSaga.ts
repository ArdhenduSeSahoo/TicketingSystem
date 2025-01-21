import { all, fork } from "redux-saga/effects";
import {
  fetchIncidentTableDataWatcher,
  fetchIncidentTableNextPageDataWatcher,
  fetchIncidentTablePrevPageDataWatcher,
  fetchRequestTableDataWatcher,
  fetchRequestTableNextPageDataWatcher,
  fetchRequestTablePrevPageDataWatcher,
} from "./MainPageSaga/MainPageSaga";
import { fetchFilterDataWatcher } from "./CommonSaga/FilterSaga";

export function* rootSaga() {
  yield all([
    fork(fetchIncidentTableDataWatcher),
    fork(fetchIncidentTableNextPageDataWatcher),
    fork(fetchIncidentTablePrevPageDataWatcher),
    fork(fetchFilterDataWatcher),
    fork(fetchRequestTableDataWatcher),
    fork(fetchRequestTableNextPageDataWatcher),
    fork(fetchRequestTablePrevPageDataWatcher),
  ]);
}
