import { all, fork } from "redux-saga/effects";
import { fetchBotResultFromQueryWatcher } from "./BotSearchSaga/BotSearchSaga";
import { fetchBotGlobalSearchDataWatcher } from "./BotSearchSaga/BotSearchGlobalData";

export function* rootSagaBotSearch() {
  yield all([
    //fork(fetchBotGloblaSearchQueryWatcher),
    fork(fetchBotResultFromQueryWatcher),
    fork(fetchBotGlobalSearchDataWatcher),
  ]);
}