export interface GlobalSearchDataModel {
  number: string;
  shortDescription: string;
  description: string;
  typeOfData: 1 | 2;
}
export interface GlobalSearchModel {
  searchData: GlobalSearchDataModel[];
  searchString: string;
  totalCount: number;
  isLoading: boolean;
  errorMessage: string;
}

export interface api_respons_request {
  number: string;
  item: {
    name: string;
  };
  description: string;
}
export interface api_respons_incident {
  number: string;
  shortDescription: string;
  description: string;
}