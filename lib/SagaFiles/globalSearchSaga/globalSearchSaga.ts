import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  GeneralSearch_fetchSearchData,
  GlobalSearch_fetchGlobalSearchData,
} from "../SagaActionKeys";

import {
  AxiosGraphQlPostCall,
  hasResponseError,
} from "@/lib/AxiosFiles/AxiosGraphQlCall";
import {
  fetchCompleteGlobalSearchData,
} from "@/lib/Redux/Slices/globlaSearchSlice/globalSearchSlices";
import { selectGlobalSearchData } from "@/lib/Redux/Selectors/globalSearch/globalSearchSelector";
import { GlobalSearchDataModel, GlobalSearchModel } from "@/lib/Models/GlobalSearchModels";

interface incidentDataModel {}

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
