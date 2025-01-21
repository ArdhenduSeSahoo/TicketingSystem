import { all, fork } from "redux-saga/effects";
import { fetchNavSearchDataWatcher } from "./CommonSaga/NavBarSearchSaga";

export function* rootSagaNavBar() {
  yield all([fork(fetchNavSearchDataWatcher)]);
}
