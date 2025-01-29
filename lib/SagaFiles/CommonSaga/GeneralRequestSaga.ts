import { put, select, takeLatest } from "redux-saga/effects";
import { GeneralSearch_fetchSearchData } from "../SagaActionKeys";

import { selectGeneralSearchData } from "@/lib/Redux/Selectors/CommonSelectors/GeneralRequestSelector";
import {
  fetchCompleteGeneralSearchData,
  GeneralSearchModel,
} from "@/lib/Redux/Slices/commonSlices/GeneralRequestSlice";
import { ApiCall_GraphQl, hasGQResponseError } from "@/lib/api_call/ApiCall";
import {
  ApiResponsModel,
  ApiResponsErrorModel,
} from "@/lib/Models/ApiResponsModel";

function* fetchGeneralSearchData() {
  const generalSearchDataSelector: GeneralSearchModel = yield select(
    selectGeneralSearchData,
  );

  if (generalSearchDataSelector.searchString !== "") {
    // const { response } = yield call(
    //   AxiosGraphQlPostCall,
    //   generalSearchDataSelector.searchString,
    // );
    console.log("General fetchs");

    const response: ApiResponsModel | ApiResponsErrorModel =
      yield ApiCall_GraphQl(generalSearchDataSelector.searchString);
    const errorMessage = hasGQResponseError(response);
    //console.log(response);
    if (errorMessage === "") {
      const general_SearchData = (response as ApiResponsModel)?.data;

      console.log(general_SearchData);
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
