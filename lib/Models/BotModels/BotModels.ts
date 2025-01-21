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
export interface BotQueryResultData {
  botQuery: string;
  botResultType: "table" | null;
  botTopIntent: string;
  botResultData: null | BotResultGlobalListDataModel;
  botShowAllQuery: string;
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
}

export interface BotResultDataResponsModel {
  predictionnQuery: string;
  predictionnResult: string;
  topIntent: string;
  showAllQuery: string;
  hasError: boolean;
  errorMessage: string;
}