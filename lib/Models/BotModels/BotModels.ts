export interface BotResultGlobalListDataModel {
  number: string;
  shortDescription: string;
  description: string;
  typeOfData: 1 | 2;
}
export interface BotResultListModel {
  searchData: BotResultGlobalListDataModel[];
  errorMessage: "";
}
export interface ChartDataSet {
  label: string;
  y: number;
}

export interface BotResultChartDataModel {
  x_axis_lable: string;
  x_axis_data: string[];
  y_axis_lable: string;
  y_axis_data: number[];
  chartDataSet: ChartDataSet[];
}
export interface BotQueryResultData {
  botQuery: string;
  botResultType: "table" | null;
  botTopIntent: string;
  botResultData:
    | null
    | string
    | BotResultGlobalListDataModel
    | BotResultChartDataModel;
  botShowAllQuery: string;
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
}

export interface BotResultDataResponsModel {
  predictionnQuery: string;
  predictionnResult: null | BotResultChartDataModel;
  topIntent: string;
  showAllQuery: string;
  hasError: boolean;
  errorMessage: string;
}