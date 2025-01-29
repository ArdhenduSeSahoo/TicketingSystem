import { put, select, takeLatest } from "redux-saga/effects";
import { BotListDataSlice_fetchBotGlobalSearchData } from "../SagaActionKeys";
import {
  GlobalSearchDataModel,
  GlobalSearchModel,
} from "@/lib/Models/GlobalSearchModels";
import { selectBotListData } from "@/lib/Redux/Selectors/BotSearchSelectors/BotSearchSelectors";
import { fetchCompleteBotGlobalSearchData } from "@/lib/Redux/Slices/BotSearchSlices/BotListDataSlice";
import { ApiCall_GraphQl, hasGQResponseError } from "@/lib/api_call/ApiCall";
import {
  ApiResponsErrorModel,
  ApiResponsModel,
} from "@/lib/Models/ApiResponsModel";

function* fetchSearchData() {
  const globalSearchData: GlobalSearchModel = yield select(selectBotListData);
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
    // const { response } = yield call(AxiosGraphQlPostCall, queryg);
    //     const errorMessage = hasResponseError(response);
    const response: ApiResponsModel | ApiResponsErrorModel =
      yield ApiCall_GraphQl(queryg);
    //console.log(response);

    const errorMessage: string = hasGQResponseError(response);
    if (errorMessage === "") {
      //console.log(response);
      const allDataList: GlobalSearchDataModel[] = [];
      const requestData = (response as ApiResponsModel)?.data
        .customFilterRequest.items as object[];
      const incidentData = (response as ApiResponsModel)?.data
        .customFilterIncident.items as object[];
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
  } else {
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
