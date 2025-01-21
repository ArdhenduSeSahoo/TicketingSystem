import {
  FilterBooleanCondition,
  FilterBooleanInput,
  FilterDataFieldCondition,
  FilterStringCondition,
} from "@/lib/Models/FilterModels/FilterModels";
import { filterQueryTemplatePlaceholder } from "../commonData/QueryTemplet";

export const AllBooleanConditions: FilterBooleanCondition[] = [
  {
    name: "Is",
    query: `eq: ${filterQueryTemplatePlaceholder},`,
  },
  {
    name: "Is Not",
    query: `neq: ${filterQueryTemplatePlaceholder},`,
  },
];

export const AllBooleanDataInputs: FilterBooleanInput[] = [
  {
    name: "True",
    inputValue: "true",
  },
  {
    name: "False",
    inputValue: "false",
  },
];

export const AllDataFieldConditions: FilterDataFieldCondition[] = [
  {
    name: "Is",
    query: `eq: ${filterQueryTemplatePlaceholder},`,
  },
  {
    name: "Is Not",
    query: `neq: ${filterQueryTemplatePlaceholder},`,
  },
  {
    name: "Is Empty",
    query: `eq: null,`,
  },
  {
    name: "Is Not",
    query: `neq: ${filterQueryTemplatePlaceholder},`,
  },
  {
    name: "Grater than",
    query: `gt: ${filterQueryTemplatePlaceholder},`,
  },
  {
    name: "Less than",
    query: `lt: ${filterQueryTemplatePlaceholder},`,
  },
];

export const AllStringConditions: FilterStringCondition[] = [
  {
    name: "Is",
    query: `eq: ${filterQueryTemplatePlaceholder},`,
  },
  {
    name: "Is Not",
    query: `neq: ${filterQueryTemplatePlaceholder},`,
  },
  {
    name: "Contains",
    query: `contains: ${filterQueryTemplatePlaceholder},`,
  },
  {
    name: "Not Contains",
    query: `ncontains: ${filterQueryTemplatePlaceholder},`,
  },
  {
    name: "Starts With",
    query: `startsWith: ${filterQueryTemplatePlaceholder},`,
  },
  {
    name: "Not Starts With",
    query: `nstartsWith: ${filterQueryTemplatePlaceholder},`,
  },
  {
    name: "End With",
    query: `endsWith: ${filterQueryTemplatePlaceholder},`,
  },
  {
    name: "Not End With",
    query: `nendsWith: ${filterQueryTemplatePlaceholder},`,
  },
  {
    name: "In",
    query: `in: ${filterQueryTemplatePlaceholder},`,
  },
  {
    name: "Not In",
    query: `nin: ${filterQueryTemplatePlaceholder},`,
  },
];
