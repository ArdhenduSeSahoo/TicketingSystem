import { PageDataType } from "@/lib/DefaultData/PageDataType";
import { EnumFilterConditionType } from "./FilterEnums";

export interface FilterUIData {
  id: number;
  filterType: PageDataType;
  firstFilter: FilterColumnValue | null;
  condition:
    | FilterBooleanCondition
    | FilterDataFieldCondition
    | FilterStringCondition
    | null;
  inputValue:
    | FilterBooleanInput
    | string
    | FilterDataFieldInput
    | FilterStringInput
    | null;
  whereCondition: 1 | 2 | 0;
}

export const filterUIData_Default_Incident_Object: FilterUIData = {
  id: -1,
  filterType: 1,
  condition: null,
  inputValue: null,
  firstFilter: null,
  whereCondition: 0,
};

export const filterUIData_Default_Request_Object: FilterUIData = {
  id: -1,
  filterType: 2,
  condition: null,
  inputValue: null,
  firstFilter: null,
  whereCondition: 0,
};

export interface FilterColumnValue {
  name: string;
  conditionType: EnumFilterConditionType;
  inputValueType: EnumFilterConditionType;
  inputDataFetchQuery: string;
  tableName: string;
  tablePIdName: string;
  query: string;
  filterQueryTemplate: string;
}

export interface FilterUIDataAll {
  incidentFilterUIData: FilterUIData[] | null;
  requestNowFilterUIData: FilterUIData[] | null;
}

export interface FilterDataFinalRun {
  incidentFilterUIData: FilterUIData[] | null;
  requestNowFilterUIData: FilterUIData[] | null;
  incidentFilterFinalQuery: string | null;
  requestFilterFinalQuery: string | null;
}

export interface FilterBooleanCondition {
  name: string;
  query: string;
}
export interface FilterStringCondition {
  name: string;
  query: string;
}
export interface FilterDataFieldCondition {
  name: string;
  query: string;
}

export interface ICommonInput {
  inputValue: string | null;
  name: string | null;
}

export interface FilterBooleanInput extends ICommonInput {
  tempbolval: string;
}
export interface FilterStringInput extends ICommonInput {
  tempVal: string;
}
export interface FilterDataFieldInput extends ICommonInput {
  id: number;
  inputValue: string;
}
