import { takeLatest, select, put } from "redux-saga/effects";
import {
  IncidentTableData_fetchIncidentTableData,
  IncidentTableData_fetchIncNextPageData,
  IncidentTableData_fetchIncPrevPageData,
  RequestTableData_fetchNextPageData,
  RequestTableData_fetchPrevPageData,
  RequestTableData_fetchRequestTableData,
} from "../SagaActionKeys";
import { selectIncidentTableData } from "../../Redux/Selectors/MainPage/MainPageSelector";
import {
  TableDataList,
  TableDataFetchModels,
  AllColumnListModel,
} from "@/lib/Models/IncidentListModel";
import {
  incidentQueryTemplate,
  PlaceholderAllColumn,
  PlaceholderSkip,
  PlaceholderTake,
  PlaceholderWhereCondition,
  requestQueryTemplate,
} from "@/lib/DefaultData/TableDataQueryTemplet";
import { ColumnConfig } from "@/lib/Models/ColumnConfigModel";
import { IncidentDefaultColumnConfig } from "@/lib/DefaultData/IncidentDefaultColumns";
import { fetchCompleteIncidentTableData } from "@/lib/Redux/Slices/MainPage/IncidentTableDataSlice";
import { FilterDataFinalRun } from "@/lib/Models/FilterModels/FilterModels";
import { selectFilterFinalDataQuery } from "@/lib/Redux/Selectors/CommonSelectors/FilterSelectors";
import { PageDataType } from "@/lib/DefaultData/PageDataType";
import { RequestsDefaultColumnConfig } from "@/lib/DefaultData/Requests/RequestDefaultColumns";
import { selectRequestTableData } from "@/lib/Redux/Selectors/Requests/RequestPageSelector";
import { fetchCompleteRequestTableData } from "@/lib/Redux/Slices/RequestPage/RequestTableDataSlice";
import { selectColumnListData } from "@/lib/Redux/Selectors/CommonSelectors/ColumnListDataSelector";
import { ApiCall_GraphQl, hasGQResponseError } from "@/lib/api_call/ApiCall";
import {
  ApiResponsErrorModel,
  ApiResponsModel,
} from "@/lib/Models/ApiResponsModel";

function* fetchIncDataResolver() {
  yield fetchTableDataResolver({
    prev: false,
    next: false,
    fetchDataType: PageDataType.IncidentData,
  });
}
function* fetchIncDataResolverNextPage() {
  console.log("Next called reducer");
  yield fetchTableDataResolver({
    prev: false,
    next: true,
    fetchDataType: PageDataType.IncidentData,
  });
}

function* fetchIncDataResolverPrevPage() {
  yield fetchTableDataResolver({
    prev: true,
    next: false,
    fetchDataType: PageDataType.IncidentData,
  });
}

function* fetchReqDataResolver() {
  yield fetchTableDataResolver({
    prev: false,
    next: false,
    fetchDataType: PageDataType.RequestData,
  });
}
function* fetchReqDataResolverNextPage() {
  yield fetchTableDataResolver({
    prev: false,
    next: true,
    fetchDataType: PageDataType.RequestData,
  });
}

function* fetchReqDataResolverPrevPage() {
  yield fetchTableDataResolver({
    prev: true,
    next: false,
    fetchDataType: PageDataType.RequestData,
  });
}

function* fetchTableDataResolver(parm: {
  prev: boolean;
  next: boolean;
  fetchDataType: PageDataType;
}) {
  const ColumnListDataSelector: AllColumnListModel =
    yield select(selectColumnListData);

  const selectIncidentDataList: TableDataList = yield select(
    selectIncidentTableData,
  );
  const selectRequestDataList: TableDataList = yield select(
    selectRequestTableData,
  );
  const selectIncidentFinalWhereConditions: FilterDataFinalRun = yield select(
    selectFilterFinalDataQuery,
  );
  const incidentDataList = { ...selectIncidentDataList };
  const DataList = { ...selectIncidentDataList };
  const requestDataList = { ...selectRequestDataList };

  const req_data_for = parm.fetchDataType; //parm.fetchDataType===PageDataType.IncidentData? incidentCollomList.PageDataType:RequestCollomList.PageDataType;

  let gQueryI =
    req_data_for === PageDataType.IncidentData
      ? ColumnListDataSelector.incidentColumnList.gQuery
      : ColumnListDataSelector.requestColumnList.gQuery;
  if (gQueryI.trim().length === 0) {
    gQueryI =
      req_data_for === PageDataType.IncidentData
        ? prepareDefaultQuery(IncidentDefaultColumnConfig)
        : prepareDefaultQuery(RequestsDefaultColumnConfig);
  }
  if (gQueryI.length !== 0) {
    let gQuery =
      req_data_for === PageDataType.IncidentData
        ? (" " + incidentQueryTemplate).slice(1)
        : (" " + requestQueryTemplate).slice(1); //for copy variable to variable
    gQuery = gQuery.replace(PlaceholderAllColumn, gQueryI);

    gQuery =
      req_data_for === PageDataType.IncidentData
        ? gQuery.replace(
            PlaceholderTake,
            ColumnListDataSelector.incidentColumnList.NumberOfDataPerPage.toString(),
          )
        : gQuery.replace(
            PlaceholderTake,
            ColumnListDataSelector.requestColumnList.NumberOfDataPerPage.toString(),
          );
    let skipValue =
      req_data_for === PageDataType.IncidentData
        ? incidentDataList.skip
        : requestDataList.skip;

    const pagesize =
      req_data_for === PageDataType.IncidentData
        ? ColumnListDataSelector.incidentColumnList.NumberOfDataPerPage
        : ColumnListDataSelector.requestColumnList.NumberOfDataPerPage;
    if (parm.next === false && parm.prev === false) {
      skipValue = 0;
      incidentDataList.skip = 0;
    } else if (parm.next === true && parm.prev === false) {
      skipValue = skipValue + pagesize;
      console.log(skipValue);
    } else if (parm.next === false && parm.prev === true) {
      skipValue = skipValue - pagesize;
      if (skipValue < 0) {
        skipValue = 0;
      }
    }
    gQuery = gQuery.replace(PlaceholderSkip, skipValue.toString());

    const whereConditions =
      req_data_for === PageDataType.IncidentData
        ? selectIncidentFinalWhereConditions.incidentFilterFinalQuery
        : selectIncidentFinalWhereConditions.requestFilterFinalQuery;
    if (whereConditions !== null) {
      gQuery = gQuery.replace(PlaceholderWhereCondition, whereConditions);
    } else {
      gQuery = gQuery.replace(PlaceholderWhereCondition, "{}");
    }
    //console.log(gQuery);
    try {
      const response: ApiResponsModel | ApiResponsErrorModel =
        yield ApiCall_GraphQl(gQuery); //call(AxiosGraphQlPostCall, gQuery);
      //console.log(response);
      //console.log(response.data.incidents);

      const getErrorMessage = hasGQResponseError(response);
      if (getErrorMessage.length === 0) {
        if (req_data_for === PageDataType.IncidentData) {
          const incidentData = (response as ApiResponsModel)?.data
            .incidents as TableDataFetchModels;
          incidentDataList.dataList = incidentData;
          incidentDataList.errorFound = false;
          incidentDataList.errorMessage = "";
          incidentDataList.skip = skipValue;
          incidentDataList.fetchNext = incidentData.pageInfo.hasNextPage;
          incidentDataList.fetchPrev = incidentData.pageInfo.hasPreviousPage;

          yield put(fetchCompleteIncidentTableData(incidentDataList));
        } else {
          const requestData = (response as ApiResponsModel)?.data
            .request as TableDataFetchModels;
          requestDataList.dataList = requestData;
          requestDataList.errorFound = false;
          requestDataList.errorMessage = "";
          requestDataList.skip = skipValue;
          requestDataList.fetchNext = requestData.pageInfo.hasNextPage;
          requestDataList.fetchPrev = requestData.pageInfo.hasPreviousPage;
          yield put(fetchCompleteRequestTableData(requestDataList));
        }
      } else {
        DataList.errorFound = true;
        DataList.errorMessage = getErrorMessage;
        DataList.dataList = null;
        DataList.skip = 0;
        DataList.fetchNext = false;
        DataList.fetchPrev = false;
        if (req_data_for === PageDataType.IncidentData) {
          yield put(fetchCompleteIncidentTableData(incidentDataList));
        } else {
          yield put(fetchCompleteRequestTableData(incidentDataList));
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export function* fetchIncidentTableDataWatcher() {
  yield takeLatest(
    IncidentTableData_fetchIncidentTableData,
    fetchIncDataResolver,
  );
}
export function* fetchIncidentTableNextPageDataWatcher() {
  yield takeLatest(
    IncidentTableData_fetchIncNextPageData,
    fetchIncDataResolverNextPage,
  );
}
export function* fetchIncidentTablePrevPageDataWatcher() {
  yield takeLatest(
    IncidentTableData_fetchIncPrevPageData,
    fetchIncDataResolverPrevPage,
  );
}

export function* fetchRequestTableDataWatcher() {
  yield takeLatest(
    RequestTableData_fetchRequestTableData,
    fetchReqDataResolver,
  );
}
export function* fetchRequestTableNextPageDataWatcher() {
  yield takeLatest(
    RequestTableData_fetchNextPageData,
    fetchReqDataResolverNextPage,
  );
}
export function* fetchRequestTablePrevPageDataWatcher() {
  yield takeLatest(
    RequestTableData_fetchPrevPageData,
    fetchReqDataResolverPrevPage,
  );
}

function prepareDefaultQuery(columns: ColumnConfig[]): string {
  let querys = "";
  columns.forEach((itm) => {
    querys += itm.queryG + "\n";
  });
  return querys;
}
