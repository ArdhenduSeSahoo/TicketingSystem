import { put, select, takeLatest } from "redux-saga/effects";
import { BotResultData_fetchDataFromQuery } from "../SagaActionKeys";
import { selectBotResultData } from "@/lib/Redux/Selectors/BotSearchSelectors/BotSearchSelectors";

import { EndPoint_Azure_Prediction } from "@/lib/DefaultData/BaseURLs";
import {
  BotQueryResultData,
  BotResultDataResponsModel,
} from "@/lib/Models/BotModels/BotModels";
import { fetchDataFromQueryComplete } from "@/lib/Redux/Slices/BotSearchSlices/BotResultSlice";
import { fetchBotGlobalSearchData } from "@/lib/Redux/Slices/BotSearchSlices/BotListDataSlice";
import { ApiCall_Post } from "@/lib/api_call/ApiCall";

function* fetchBotResultFromQuery() {
  const selectBotResultWithQuery: BotQueryResultData =
    yield select(selectBotResultData);

  const request_body = `{"generalquery": "${selectBotResultWithQuery.botQuery}"}`;

  try {
    // const retval = yield ApiCall_Post(EndPoint_Azure_Prediction, request_body);
    // console.log(retval);

    // const { response } = yield call(
    //   Api_PostCall,
    //   EndPoint_Azure_Prediction,
    //   request_body,
    // );
    const response: BotResultDataResponsModel = yield ApiCall_Post(
      EndPoint_Azure_Prediction,
      request_body,
    );
    //console.log(response);
    const botrespons: BotResultDataResponsModel =
      response as BotResultDataResponsModel;
    //console.log(botrespons);
    if (botrespons !== undefined) {
      yield put(
        fetchDataFromQueryComplete({
          botQuery: selectBotResultWithQuery.botQuery,
          botResultType: "table",
          botResultData: botrespons.predictionnResult,
          botTopIntent: botrespons.topIntent,
          botShowAllQuery: botrespons.hasError ? "" : botrespons.showAllQuery,
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
  } catch (error) {
    console.log("In chatch");

    console.log(error);
  }
}

export function* fetchBotResultFromQueryWatcher() {
  yield takeLatest(BotResultData_fetchDataFromQuery, fetchBotResultFromQuery);
}
