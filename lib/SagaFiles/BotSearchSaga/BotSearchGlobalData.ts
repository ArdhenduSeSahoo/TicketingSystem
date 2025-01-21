import { call, put, select, takeLatest } from "redux-saga/effects";
import { BotListDataSlice_fetchBotGlobalSearchData } from "../SagaActionKeys";
import { GlobalSearchDataModel, GlobalSearchModel } from "@/lib/Models/GlobalSearchModels";
import { selectBotListData } from "@/lib/Redux/Selectors/BotSearchSelectors/BotSearchSelectors";
import { AxiosGraphQlPostCall, hasResponseError } from "@/lib/AxiosFiles/AxiosGraphQlCall";
import { fetchCompleteBotGlobalSearchData } from "@/lib/Redux/Slices/BotSearchSlices/BotListDataSlice";


function* fetchSearchData() {
const globalSearchData: GlobalSearchModel = yield select(
    selectBotListData,
  );
  const queryg = `query {
  customFilterRequest(filterString: "${globalSearchData.searchString}", skip: 0, take: 1000) {
    items {
      number
            item {
        name
      }
        description
    }
      totalCount
  }
  customFilterIncident(filterString: "${globalSearchData.searchString}", skip: 0, take: 1000) {
    items {
      number
      shortDescription
      description
    }
    totalCount
  }
}`;
 if (globalSearchData.searchString !== "") {
    //console.log(queryg);
    const { response } = yield call(AxiosGraphQlPostCall, queryg);
        const errorMessage = hasResponseError(response);
        if (errorMessage === "") {
              //console.log(response);
              const allDataList: GlobalSearchDataModel[] = [];
              const requestData = response?.data?.data?.customFilterRequest
                .items as object[];
              const incidentData = response?.data?.data?.customFilterIncident
                .items as object[];
              //console.log(incidentData);
              incidentData.forEach((element) => {
                allDataList.push({
                  number: element.number,
                  shortDescription: element.shortDescription,
                  typeOfData: 1,
                  description: element.description,
                });
              });
              requestData.forEach((element) => {
                allDataList.push({
                  number: element.number,
                  shortDescription: element.item?.name,
                  typeOfData: 2,
                  description: element.description,
                });
              });
              //console.log(allDataList);
              //console.log("put in if");
              yield put(
                fetchCompleteBotGlobalSearchData({
                  errorMessage: "",
                  isLoading: false,
                  searchString: globalSearchData.searchString,
                  searchData: allDataList,
                  totalCount: allDataList.length,
                }),
              );
            } else {
              yield put(
                fetchCompleteBotGlobalSearchData({
                  errorMessage: errorMessage,
                  isLoading: false,
                  searchString: globalSearchData.searchString,
                  searchData: [],
                  totalCount: 0,
                }),
              );
            }
 }
 else {
     yield put(
       fetchCompleteBotGlobalSearchData({
         errorMessage: "",
         isLoading: false,
         searchString: globalSearchData.searchString,
         searchData: [],
         totalCount: 0,
       }),
     );
   }
}

export function* fetchBotGlobalSearchDataWatcher() {
  yield takeLatest(BotListDataSlice_fetchBotGlobalSearchData, fetchSearchData);
}