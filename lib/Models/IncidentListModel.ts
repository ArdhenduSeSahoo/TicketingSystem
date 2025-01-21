import { PageDataType } from "../DefaultData/PageDataType";
import { ColumnConfig } from "./ColumnConfigModel";

export interface IncidentTableDataModel {
  loadingData: boolean;
  gQuery: string;
  dataJson: string;
  pageDataCount: number;
  currentPageNumber: number;
  errorFound: boolean;
  errorMessage: string;
}

export interface TableDataFetchModels {
  pageInfo: { hasNextPage: boolean; hasPreviousPage: boolean };
  totalCount: number;
  items: object[];
}

export interface AllColumnListModel {
  incidentColumnList: ColumnListSliceModel;
  requestColumnList: ColumnListSliceModel;
}
export const AllColumnListModel_DefaultValue: AllColumnListModel = {
  incidentColumnList: {
    columnConfigList: [],
    gQuery: "",
    NumberOfDataPerPage: 100,
    PageDataType: PageDataType.IncidentData,
  },
  requestColumnList: {
    columnConfigList: [],
    gQuery: "",
    NumberOfDataPerPage: 100,
    PageDataType: PageDataType.RequestData,
  },
};

export interface ColumnListSliceModel {
  columnConfigList: ColumnConfig[];
  gQuery: string;
  NumberOfDataPerPage: number;
  PageDataType: PageDataType;
}

export interface TableDataList {
  loadingData: boolean;
  errorFound: boolean;
  errorMessage: string;
  dataList: TableDataFetchModels | null;
  allData: [] | null;
  skip: number;
  take: number;
  fetchNext: boolean;
  fetchPrev: boolean;
}

export const TableDataList_Default_Object: TableDataList = {
  loadingData: true,
  errorFound: false,
  errorMessage: "",
  dataList: {
    items: [],
    totalCount: 0,
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
  },
  allData: null,
  skip: 0,
  take: 50,
  fetchNext: true,
  fetchPrev: false,
};

export const IncidentTableDataList_Default_Object: TableDataList = {
  loadingData: true,
  errorFound: false,
  errorMessage: "",
  dataList: {
    items: [],
    totalCount: 0,
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
  },
  allData: null,
  skip: 0,
  take: 50,
  fetchNext: true,
  fetchPrev: false,
};

export const RequestTableDataList_Default_Object: TableDataList = {
  loadingData: true,
  errorFound: false,
  errorMessage: "",
  dataList: {
    items: [],
    totalCount: 0,
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
  },
  allData: null,
  skip: 0,
  take: 50,
  fetchNext: true,
  fetchPrev: false,
};
