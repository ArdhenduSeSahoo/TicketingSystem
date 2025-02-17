import { put, select, takeLatest } from "redux-saga/effects";
import { GlobalSearch_fetchGlobalSearchData } from "../SagaActionKeys";

import { fetchCompleteGlobalSearchData } from "@/lib/Redux/Slices/globlaSearchSlice/globalSearchSlices";
import { selectGlobalSearchData } from "@/lib/Redux/Selectors/globalSearch/globalSearchSelector";
import {
  api_respons_incident,
  api_respons_request,
  GlobalSearchDataModel,
  GlobalSearchModel,
} from "@/lib/Models/GlobalSearchModels";
import {
  ApiResponsErrorModel,
  ApiResponsModel,
} from "@/lib/Models/ApiResponsModel";
import { ApiCall_GraphQl, hasGQResponseError } from "@/lib/api_call/ApiCall";

function* fetchSearchData() {
  const globalSearchData: GlobalSearchModel = yield select(
    selectGlobalSearchData,
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
    // const { response } = yield call(AxiosGraphQlPostCall, queryg);
    // const errorMessage = hasResponseError(response);
    //console.log("Fetch api");
    const response: ApiResponsModel | ApiResponsErrorModel =
      yield ApiCall_GraphQl(queryg);
    //console.log(response);
    const errorMessage: string = hasGQResponseError(response);
    if (errorMessage === "") {
      //console.log(response);
      const allDataList: GlobalSearchDataModel[] = [];
      const requestData = (response as ApiResponsModel)?.data
        .customFilterRequest.items as api_respons_request[];
      const incidentData = (response as ApiResponsModel)?.data
        .customFilterIncident.items as api_respons_incident[];
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
      yield put(
        fetchCompleteGlobalSearchData({
          errorMessage: "",
          isLoading: false,
          searchString: globalSearchData.searchString,
          searchData: allDataList,
          totalCount: allDataList.length,
        }),
      );
    } else {
      yield put(
        fetchCompleteGlobalSearchData({
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
      fetchCompleteGlobalSearchData({
        errorMessage: "",
        isLoading: false,
        searchString: globalSearchData.searchString,
        searchData: [],
        totalCount: 0,
      }),
    );
  }

  //console.log(navSearchData.searchString);
}
export function* fetchGlobalSearchDataWatcher() {
  yield takeLatest(GlobalSearch_fetchGlobalSearchData, fetchSearchData);
}
