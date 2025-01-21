import { all, fork } from "redux-saga/effects";
import { fetchGeneralSearchDataWatcher } from "./CommonSaga/GeneralRequestSaga";

export function* rootSagaGeneralSearch() {
  yield all([fork(fetchGeneralSearchDataWatcher)]);
}
