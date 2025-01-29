import { put, select, takeLatest } from "redux-saga/effects";
import { FilterDataFieldDDW_fetchFilterDataField } from "../SagaActionKeys";

import {
  alreadyExistDataField,
  fetchCompletedFilterDataField,
  IFilterDataFetchDDW,
  IFilterDataFetchList,
} from "@/lib/Redux/Slices/commonSlices/FilterDataFieldDdwSlice";

import {
  GQueryTemplate,
  GQueryTemplate_AllQuery,
} from "@/lib/DefaultData/commonData/QueryTemplet";
import { FilterDataFieldInput } from "@/lib/Models/FilterModels/FilterModels";
import { selectFilterDataFieldDdw } from "@/lib/Redux/Selectors/CommonSelectors/FilterSelectors";
import { ApiCall_GraphQl, hasGQResponseError } from "@/lib/api_call/ApiCall";
import {
  ApiResponsErrorModel,
  ApiResponsModel,
} from "@/lib/Models/ApiResponsModel";

function* fetchDataFieldData() {
  const SelectFilterDataFieldDdw: IFilterDataFetchList = yield select(
    selectFilterDataFieldDdw,
  );
  const filterDataFieldDdw = SelectFilterDataFieldDdw; // ObjectsDeepCopy<IFilterDataFetchList>(
  //   SelectFilterDataFieldDdw,
  // );
  const query_PartOfFilter =
    filterDataFieldDdw.requestedFilterUIDataToFetch?.query;

  try {
    //console.log(filterDataFieldDdw.filterDataFetchList);
    //console.log(filterDataFieldDdw.requestedFilterUIDataToFetch);
    if (
      filterDataFieldDdw.filterDataFetchList.find((itm) => {
        return (
          itm.filterColumnValue.name ===
          filterDataFieldDdw.requestedFilterUIDataToFetch?.name
        );
      })
    ) {
      //data has already in array
      //delay(2000);
      yield put(alreadyExistDataField());
    } else {
      if (query_PartOfFilter !== undefined) {
        const full_query = GQueryTemplate.replace(
          GQueryTemplate_AllQuery,
          query_PartOfFilter,
        );

        const response: ApiResponsModel | ApiResponsErrorModel =
          yield ApiCall_GraphQl(full_query);
        // console.log(response);

        const getErrorMessage: string = hasGQResponseError(response);
        if (getErrorMessage.length === 0) {
          //FilterDataFieldInput
          const alldatas = (response as ApiResponsModel)?.data?.filterTable
            ?.items as FilterDataFieldInput[];
          const objectofarray: IFilterDataFetchDDW = {
            filterColumnValue: filterDataFieldDdw.requestedFilterUIDataToFetch!,
            filterDatainputFields: alldatas,
          };
          //delay(2000);
          yield put(
            fetchCompletedFilterDataField({
              data: objectofarray,
              errorMessage: "",
              hasError: false,
            }),
          );
        } else {
          yield put(
            fetchCompletedFilterDataField({
              data: null,
              errorMessage: getErrorMessage,
              hasError: true,
            }),
          );
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export function* fetchFilterDataWatcher() {
  yield takeLatest(FilterDataFieldDDW_fetchFilterDataField, fetchDataFieldData);
}
