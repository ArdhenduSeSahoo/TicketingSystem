import { call, put, select, takeLatest } from "redux-saga/effects";
import { GeneralSearch_fetchSearchData } from "../SagaActionKeys";

import {
  AxiosGraphQlPostCall,
  hasResponseError,
} from "@/lib/AxiosFiles/AxiosGraphQlCall";
import { selectGeneralSearchData } from "@/lib/Redux/Selectors/CommonSelectors/GeneralRequestSelector";
import {
  fetchCompleteGeneralSearchData,
  GeneralSearchModel,
} from "@/lib/Redux/Slices/commonSlices/GeneralRequestSlice";

function* fetchGeneralSearchData() {
  const generalSearchDataSelector: GeneralSearchModel = yield select(
    selectGeneralSearchData,
  );

  if (generalSearchDataSelector.searchString !== "") {
    const { response } = yield call(
      AxiosGraphQlPostCall,
      generalSearchDataSelector.searchString,
    );
    const errorMessage = hasResponseError(response);

    if (errorMessage === "") {
      const general_SearchData = response?.data;

      //console.log(allDataList);
      yield put(
        fetchCompleteGeneralSearchData({
          errorMessage: "",
          isLoading: false,
          whoRequestingFor: generalSearchDataSelector.whoRequestingFor,
          searchString: generalSearchDataSelector.searchString,
          searchData: general_SearchData,
        }),
      );
    } else {
      yield put(
        fetchCompleteGeneralSearchData({
          errorMessage: errorMessage,
          isLoading: false,
          whoRequestingFor: generalSearchDataSelector.whoRequestingFor,
          searchString: generalSearchDataSelector.searchString,
          searchData: {},
        }),
      );
    }
  } else {
    yield put(
      fetchCompleteGeneralSearchData({
        errorMessage: "",
        isLoading: false,
        whoRequestingFor: generalSearchDataSelector.whoRequestingFor,
        searchString: generalSearchDataSelector.searchString,
        searchData: {},
      }),
    );
  }

  //console.log(navSearchData.searchString);
}
export function* fetchGeneralSearchDataWatcher() {
  yield takeLatest(GeneralSearch_fetchSearchData, fetchGeneralSearchData);
}
