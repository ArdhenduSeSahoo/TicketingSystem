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