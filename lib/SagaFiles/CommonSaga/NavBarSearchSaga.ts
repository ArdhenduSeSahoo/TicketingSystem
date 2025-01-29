import { put, select, takeLatest } from "redux-saga/effects";
import { NavBarSearch_fetchSearchData } from "../SagaActionKeys";
import { selectNavBarSearchData } from "@/lib/Redux/Selectors/CommonSelectors/NavBarSelector";
import {
  fetchCompleteSearchData,
  NavBarSearchModel,
  SearchDataModel,
} from "@/lib/Redux/Slices/commonSlices/NavBarSearchSlice";

import { ApiCall_GraphQl, hasGQResponseError } from "@/lib/api_call/ApiCall";
import {
  ApiResponsErrorModel,
  ApiResponsModel,
} from "@/lib/Models/ApiResponsModel";

function* fetchSearchData() {
  const navSearchData: NavBarSearchModel = yield select(selectNavBarSearchData);
  const queryg1 = `query {
  customFilterRequest(filterString: "${navSearchData.searchString}", skip: 0, take: 10) {
    items {
      number
      item {
      name
      }
      description
    }
      totalCount
  }
  customFilterIncident(filterString: "${navSearchData.searchString}", skip: 0, take: 10) {
    items {
      number
      shortDescription
      description
    }
    totalCount
  }
}`;

  const queryg = `query {
   request(
    where: {
      or: {
        commentsAndWorkNotes: { contains: "${navSearchData.searchString}" }
        description: { contains: "${navSearchData.searchString}" }
        shortDescription: { contains: "${navSearchData.searchString}" }
      }
    }
    skip: 0
    take: 10
    order: { id: DESC }
  ) {
    items {
      number
      shortDescription
    }
  }
  incidents(
    order: { id: DESC }
    skip: 0
    take: 10
    where: {
      or: {
        commentsWorknotes: { contains: "${navSearchData.searchString}" }
        description: { contains: "${navSearchData.searchString}" }
        shortDescription: { contains: "${navSearchData.searchString}" }
      }
    }
  ) {
    items {
      number
      shortDescription
    }
  }
}`;
  if (navSearchData.searchString !== "") {
    // const { response } = yield call(AxiosGraphQlPostCall, queryg1);
    // const errorMessage = hasResponseError(response);
    const response: ApiResponsModel | ApiResponsErrorModel =
      yield ApiCall_GraphQl(queryg1);
    const errorMessage = hasGQResponseError(response);
    if (errorMessage === "") {
      const allDataList: SearchDataModel[] = [];
      const requestData = (response as ApiResponsModel)?.data
        ?.customFilterRequest.items as object[];
      const incidentData = (response as ApiResponsModel)?.data
        ?.customFilterIncident.items as object[];
      //console.log(incidentData);
      incidentData.forEach((element) => {
        allDataList.push({
          number: element.number,
          shortDescription: element.shortDescription,
          typeOfData: 1,
        });
      });
      requestData.forEach((element) => {
        allDataList.push({
          number: element.number,
          shortDescription: element.item?.name,
          typeOfData: 2,
        });
      });
      //console.log(allDataList);
      yield put(
        fetchCompleteSearchData({
          errorMessage: "",
          isLoading: false,
          searchString: navSearchData.searchString,
          searchData: allDataList,
        }),
      );
    } else {
      yield put(
        fetchCompleteSearchData({
          errorMessage: errorMessage,
          isLoading: false,
          searchString: navSearchData.searchString,
          searchData: [],
        }),
      );
    }
  } else {
    yield put(
      fetchCompleteSearchData({
        errorMessage: "",
        isLoading: false,
        searchString: navSearchData.searchString,
        searchData: [],
      }),
    );
  }

  //console.log(navSearchData.searchString);
}
export function* fetchNavSearchDataWatcher() {
  yield takeLatest(NavBarSearch_fetchSearchData, fetchSearchData);
}
