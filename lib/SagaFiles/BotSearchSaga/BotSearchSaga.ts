import { call, put, select, takeLatest } from "redux-saga/effects";
import { BotResultData_fetchDataFromQuery, BotResultData_fetchingBotGlobalSearch } from "../SagaActionKeys";
import { selectBotResultData } from "@/lib/Redux/Selectors/BotSearchSelectors/BotSearchSelectors";

import { Api_PostCall } from "@/lib/AxiosFiles/AxiosGraphQlCall";
import { EndPoint_Azure_Prediction } from "@/lib/DefaultData/BaseURLs";
import { BotQueryResultData, BotResultDataResponsModel } from "@/lib/Models/BotModels/BotModels";
import { fetchDataFromQueryComplete } from "@/lib/Redux/Slices/BotSearchSlices/BotResultSlice";
import { fetchBotGlobalSearchData } from "@/lib/Redux/Slices/BotSearchSlices/BotListDataSlice";


function* fetchBotGloblaSearchQuery() {}

function* fetchBotResultFromQuery() {
  const selectBotResultWithQuery: BotQueryResultData =
    yield select(selectBotResultData);

  const request_body = `{
                              "generalquery": "${selectBotResultWithQuery.botQuery}"
                            }`;
  //console.log(request_body);
  const { response } = yield call(
    Api_PostCall,
    EndPoint_Azure_Prediction,
    request_body,
  );
  const botrespons: BotResultDataResponsModel =
    response.data as BotResultDataResponsModel;
  //var toobj=response.data as BotResultDataResponsModel;

  //console.log(botrespons);
  //console.log(response.data);
  yield put(
    fetchDataFromQueryComplete({
      botQuery: selectBotResultWithQuery.botQuery,
      botResultType: "table",
      botResultData: null,
      botTopIntent: botrespons.topIntent,
      botShowAllQuery:botrespons.hasError?"": botrespons.showAllQuery,
      isLoading: false,
      hasError: botrespons.hasError,
      errorMessage: botrespons.errorMessage,

    }), 
  );

  if (
    botrespons.topIntent.includes("show all") &&
    botrespons.showAllQuery !== "" &&
    botrespons.hasError == false
  ) {
    yield put(fetchBotGlobalSearchData(botrespons.showAllQuery));
  }
  
}

export function* fetchBotGloblaSearchQueryWatcher() {
  yield takeLatest(
    BotResultData_fetchingBotGlobalSearch,
    fetchBotGloblaSearchQuery,
  );
}

export function* fetchBotResultFromQueryWatcher() {
  yield takeLatest(BotResultData_fetchDataFromQuery, fetchBotResultFromQuery);
}