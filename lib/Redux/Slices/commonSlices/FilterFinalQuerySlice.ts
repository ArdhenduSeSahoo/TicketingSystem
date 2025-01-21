import { filterQueryTemplatePlaceholder } from "@/lib/DefaultData/commonData/QueryTemplet";
import { PageDataType } from "@/lib/DefaultData/PageDataType";
import {
  FilterDataFinalRun,
  FilterUIData,
  ICommonInput,
} from "@/lib/Models/FilterModels/FilterModels";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initData: FilterDataFinalRun = {
  incidentFilterUIData: null,
  incidentFilterFinalQuery: null,
  requestNowFilterUIData: null,
  requestFilterFinalQuery: null,
};

interface conditionObjects {
  conditionName: string;
  conditionQuery: string;
  fullQueryTemplate: string;
  fullQuery: string;
  whereConditionType: 1 | 2 | 0;
}

const FilterDataFinalRunSlice = createSlice({
  name: "FilterDataFinalRun",
  initialState: initData,
  reducers: {
    setFinalFilterData: (
      state,
      action: PayloadAction<{
        filterType: PageDataType;
        incidentFilter: FilterUIData[] | null;
        requestFilter: FilterUIData[] | null;
      }>,
    ) => {
      if (action.payload.filterType === PageDataType.IncidentData) {
        state.incidentFilterUIData = [];
        //remove items which has no input
        //add items which only have inputs.
        //add not null item to local storage
        if (action.payload.incidentFilter !== null) {
          const itemsWithInput: FilterUIData[] = [];
          console.log(action.payload.incidentFilter);
          action.payload.incidentFilter.forEach((itm) => {
            if (itm.inputValue !== null && itm.condition !== null) {
              //state.incidentFilterUIData?.push(itm);
              const already_added_condition = itemsWithInput.findIndex(
                (a_itm) => {
                  return (
                    a_itm.firstFilter?.name === itm.firstFilter?.name &&
                    a_itm.condition?.name === itm.condition?.name &&
                    a_itm.whereCondition === itm.whereCondition
                  );
                },
              );
              if (already_added_condition < 0) {
                itemsWithInput.push(itm);
              }
            }
          });
          state.incidentFilterUIData.push(...itemsWithInput);
          const conditionList: conditionObjects[] = [];
          console.log(itemsWithInput);
          itemsWithInput.forEach((itm) => {
            const hasAddedCondition = conditionList.findIndex((citm) => {
              return (
                citm.conditionName === itm.firstFilter?.name &&
                citm.whereConditionType === itm.whereCondition
              );
            });
            if (hasAddedCondition !== -1) {
              //has value
              let new_condition = itm.condition?.query;
              let prev_condition =
                conditionList[hasAddedCondition].conditionQuery;
              const fullQueryTemplate =
                conditionList[hasAddedCondition].fullQueryTemplate;
              const userInputValue = (itm.inputValue as ICommonInput)
                .inputValue;
              if (userInputValue != null) {
                new_condition = new_condition?.replace(
                  filterQueryTemplatePlaceholder,
                  userInputValue,
                );
                prev_condition += " " + new_condition;
                const fullQuery = fullQueryTemplate.replace(
                  filterQueryTemplatePlaceholder,
                  prev_condition,
                );
                conditionList[hasAddedCondition].conditionQuery =
                  prev_condition;
                conditionList[hasAddedCondition].fullQuery = fullQuery;
              }
            } else {
              //add new one
              if (itm.firstFilter?.name != undefined) {
                let conditionQuery = itm.condition?.query;
                //let input_val = "";
                if (conditionQuery != undefined && itm.inputValue != null) {
                  const userInputValue = (itm.inputValue as ICommonInput)
                    .inputValue;
                  if (userInputValue != null) {
                    conditionQuery = conditionQuery.replace(
                      filterQueryTemplatePlaceholder,
                      userInputValue,
                    );
                    let queryFirst = itm.firstFilter.filterQueryTemplate;
                    queryFirst = queryFirst.replace(
                      filterQueryTemplatePlaceholder,
                      conditionQuery,
                    );
                    conditionList.push({
                      conditionName: itm.firstFilter?.name,
                      conditionQuery: conditionQuery,
                      fullQuery: queryFirst,
                      fullQueryTemplate: itm.firstFilter.filterQueryTemplate,
                      whereConditionType: itm.whereCondition,
                    });
                  }
                }
              }
            }
          });
          if (conditionList.length > 0) {
            let allAndConditions = "";
            let allOrConditions = "";
            conditionList.forEach((itm) => {
              if (itm.whereConditionType === 1) {
                allAndConditions += " " + itm.fullQuery + ",";
              }
              if (itm.whereConditionType === 2) {
                allOrConditions += " " + itm.fullQuery + ",";
              }
            });
            state.incidentFilterFinalQuery = `{ and: { ${allAndConditions} }, or: { ${allOrConditions} } }`;
          } else {
            state.incidentFilterFinalQuery = null;
          }
        }
      }
      if (action.payload.filterType === PageDataType.RequestData) {
        state.requestNowFilterUIData = [];
        //remove items which has no input
        //add items which only have inputs.
        //add not null item to local storage
        if (action.payload.requestFilter !== null) {
          const itemsWithInput: FilterUIData[] = [];
          action.payload.requestFilter.forEach((itm) => {
            if (itm.inputValue !== null && itm.condition !== null) {
              //state.incidentFilterUIData?.push(itm);
              const already_added_condition = itemsWithInput.findIndex(
                (a_itm) => {
                  return (
                    a_itm.firstFilter?.name === itm.firstFilter?.name &&
                    a_itm.condition?.name === itm.condition?.name &&
                    a_itm.whereCondition === itm.whereCondition
                  );
                },
              );
              if (already_added_condition < 0) {
                itemsWithInput.push(itm);
              }
            }
          });
          state.requestNowFilterUIData.push(...itemsWithInput);
          const conditionList: conditionObjects[] = [];

          itemsWithInput.forEach((itm) => {
            const hasAddedCondition = conditionList.findIndex((citm) => {
              return (
                citm.conditionName === itm.firstFilter?.name &&
                citm.whereConditionType === itm.whereCondition
              );
            });
            if (hasAddedCondition !== -1) {
              //has value
              let new_condition = itm.condition?.query;
              let prev_condition =
                conditionList[hasAddedCondition].conditionQuery;
              const fullQueryTemplate =
                conditionList[hasAddedCondition].fullQueryTemplate;
              const userInputValue = (itm.inputValue as ICommonInput)
                .inputValue;
              if (userInputValue != null) {
                new_condition = new_condition?.replace(
                  filterQueryTemplatePlaceholder,
                  userInputValue,
                );
                prev_condition += " " + new_condition;
                const fullQuery = fullQueryTemplate.replace(
                  filterQueryTemplatePlaceholder,
                  prev_condition,
                );
                conditionList[hasAddedCondition].conditionQuery =
                  prev_condition;
                conditionList[hasAddedCondition].fullQuery = fullQuery;
              }
            } else {
              //add new one
              if (itm.firstFilter?.name != undefined) {
                let conditionQuery = itm.condition?.query;
                //let input_val = "";
                if (conditionQuery != undefined && itm.inputValue != null) {
                  const userInputValue = (itm.inputValue as ICommonInput)
                    .inputValue;
                  if (userInputValue != null) {
                    conditionQuery = conditionQuery.replace(
                      filterQueryTemplatePlaceholder,
                      userInputValue,
                    );
                    let queryFirst = itm.firstFilter.filterQueryTemplate;
                    queryFirst = queryFirst.replace(
                      filterQueryTemplatePlaceholder,
                      conditionQuery,
                    );
                    conditionList.push({
                      conditionName: itm.firstFilter?.name,
                      conditionQuery: conditionQuery,
                      fullQuery: queryFirst,
                      fullQueryTemplate: itm.firstFilter.filterQueryTemplate,
                      whereConditionType: itm.whereCondition,
                    });
                  }
                }
              }
            }
          });
          if (conditionList.length > 0) {
            let allAndConditions = "";
            let allOrConditions = "";
            conditionList.forEach((itm) => {
              if (itm.whereConditionType === 1) {
                allAndConditions += " " + itm.fullQuery + ",";
              }
              if (itm.whereConditionType === 2) {
                allOrConditions += " " + itm.fullQuery + ",";
              }
            });
            state.requestFilterFinalQuery = `{ and: { ${allAndConditions} }, or: { ${allOrConditions} } }`;
          } else {
            state.requestFilterFinalQuery = null;
          }
        }
      }
    },
    removeFilterFinalCondition: (
      state,
      action: PayloadAction<{ filterType: number }>,
    ) => {
      if (action.payload.filterType === 1) {
        state.incidentFilterFinalQuery = null;
        state.incidentFilterUIData = [];
      }
      if (action.payload.filterType === 2) {
        state.requestFilterFinalQuery = null;
        state.requestNowFilterUIData = [];
      }
    },
  },
});
export default FilterDataFinalRunSlice.reducer;
export const { setFinalFilterData, removeFilterFinalCondition } =
  FilterDataFinalRunSlice.actions;

// const isFilterBooleanInput = (
//   value: string | FilterBooleanInput | FilterDataFieldInput,
// ): value is FilterBooleanInput => {
//   return "name" in (value as FilterBooleanInput);
// };
