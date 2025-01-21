import { all, fork } from "redux-saga/effects";
import { fetchGlobalSearchDataWatcher } from "./globalSearchSaga/globalSearchSaga";

export function* rootSagaGlobalSearch() {
  yield all([fork(fetchGlobalSearchDataWatcher)]);
}
