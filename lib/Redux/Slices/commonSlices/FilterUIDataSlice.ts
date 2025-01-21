import { PageDataType } from "@/lib/DefaultData/PageDataType";
import {
  FilterBooleanCondition,
  FilterBooleanInput,
  FilterColumnValue,
  FilterDataFieldCondition,
  FilterDataFieldInput,
  FilterStringCondition,
  FilterStringInput,
  FilterUIData,
  filterUIData_Default_Incident_Object,
  filterUIData_Default_Request_Object,
  FilterUIDataAll,
} from "@/lib/Models/FilterModels/FilterModels";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const FilterUIDataList: FilterUIDataAll = {
  incidentFilterUIData: [],
  requestNowFilterUIData: [],
};
const filterUIDataSlice = createSlice({
  name: "FilterUIData",
  initialState: FilterUIDataList,
  reducers: {
    addBlankFilter: (
      state,
      actions: PayloadAction<{
        filterType: number;
        whereConditionType: 0 | 1 | 2;
      }>,
    ) => {
      if (actions.payload.filterType === PageDataType.IncidentData) {
        const newObject = filterUIData_Default_Incident_Object;
        if (
          state.incidentFilterUIData !== null &&
          state.incidentFilterUIData?.length > 0
        ) {
          let maxID = 1;
          state.incidentFilterUIData.forEach((element) => {
            if (maxID < element.id) {
              maxID = element.id;
            }
          });
          newObject.id = maxID + 1;
        } else {
          newObject.id = 1;
        }
        newObject.whereCondition = actions.payload.whereConditionType;
        state.incidentFilterUIData?.push({ ...newObject });
      }
      if (actions.payload.filterType === PageDataType.RequestData) {
        const newObject = filterUIData_Default_Request_Object;
        if (
          state.requestNowFilterUIData !== null &&
          state.requestNowFilterUIData?.length > 0
        ) {
          let maxID = 1;
          state.requestNowFilterUIData?.forEach((element) => {
            if (maxID < element.id) {
              maxID = element.id;
            }
          });
          newObject.id = maxID + 1;
        } else {
          newObject.id = 1;
        }
        newObject.whereCondition = actions.payload.whereConditionType;
        state.requestNowFilterUIData?.push({
          ...newObject,
        });
      }
    },
    removeFilterCondition: (
      state,
      actions: PayloadAction<{ num: number; filter: FilterUIData }>,
    ) => {
      if (actions.payload.num === PageDataType.IncidentData) {
        const itemIdToRemove = state.incidentFilterUIData?.findIndex((itm) => {
          return itm.id === actions.payload.filter.id;
        });
        if (itemIdToRemove !== undefined) {
          state.incidentFilterUIData?.splice(itemIdToRemove, 1);
        }
      }
      if (actions.payload.num === PageDataType.RequestData) {
        const itemIdToRemove = state.requestNowFilterUIData?.findIndex(
          (itm) => {
            return itm.id === actions.payload.filter.id;
          },
        );
        if (itemIdToRemove !== undefined) {
          state.requestNowFilterUIData?.splice(itemIdToRemove, 1);
        }
      }
    },
    restoreFromLocalStore: (
      state,
      action: PayloadAction<{
        filterType: PageDataType;
        incidentFilter: FilterUIData[] | null;
        requestFilter: FilterUIData[] | null;
      }>,
    ) => {
      if (action.payload.filterType === PageDataType.IncidentData) {
        if (action.payload.incidentFilter !== null) {
          state.incidentFilterUIData = [];
          state.incidentFilterUIData.push(...action.payload.incidentFilter);
        }
      }
      if (action.payload.filterType === PageDataType.RequestData) {
        if (action.payload.requestFilter !== null) {
          state.requestNowFilterUIData = [];
          state.requestNowFilterUIData.push(...action.payload.requestFilter);
        }
      }
    },
    changeFilterColumn: (
      state,
      action: PayloadAction<{
        newFilterColumn: FilterColumnValue;
        filterRow: FilterUIData;
      }>,
    ) => {
      if (action.payload.filterRow.filterType === PageDataType.IncidentData) {
        state.incidentFilterUIData?.forEach((itm) => {
          if (itm.id === action.payload.filterRow.id) {
            itm.firstFilter = action.payload.newFilterColumn;
            itm.condition = null;
            itm.inputValue = null;
          }
        });
      }
      if (action.payload.filterRow.filterType === PageDataType.RequestData) {
        state.requestNowFilterUIData?.forEach((itm) => {
          if (itm.id === action.payload.filterRow.id) {
            itm.firstFilter = action.payload.newFilterColumn;
            itm.condition = null;
            itm.inputValue = null;
          }
        });
      }
    },
    changeFilterCondition: (
      state,
      action: PayloadAction<{
        filterRow: FilterUIData;
        newFilterCondition:
          | FilterBooleanCondition
          | FilterDataFieldCondition
          | FilterStringCondition
          | null;
      }>,
    ) => {
      if (action.payload.filterRow.filterType === PageDataType.IncidentData) {
        state.incidentFilterUIData?.forEach((itm) => {
          if (itm.id === action.payload.filterRow.id) {
            itm.condition = action.payload.newFilterCondition;
          }
        });
      }
      if (action.payload.filterRow.filterType === PageDataType.RequestData) {
        state.requestNowFilterUIData?.forEach((itm) => {
          if (itm.id === action.payload.filterRow.id) {
            itm.condition = action.payload.newFilterCondition;
          }
        });
      }
    },
    changeFilterUserInput: (
      state,
      action: PayloadAction<{
        filterRow: FilterUIData;
        newFilterUserDataInput:
          | FilterBooleanInput
          | FilterDataFieldInput
          | FilterStringInput
          | null;
      }>,
    ) => {
      console.log(action.payload.newFilterUserDataInput);
      if (action.payload.filterRow.filterType === PageDataType.IncidentData) {
        state.incidentFilterUIData?.forEach((itm) => {
          if (itm.id === action.payload.filterRow.id) {
            itm.inputValue = action.payload.newFilterUserDataInput;
          }
        });
      }
      if (action.payload.filterRow.filterType === PageDataType.RequestData) {
        //console.log(action.payload.newFilterUserDataInput);
        state.requestNowFilterUIData?.forEach((itm) => {
          if (itm.id === action.payload.filterRow.id) {
            itm.inputValue = action.payload.newFilterUserDataInput;
          }
        });
      }
    },
  },
});

export default filterUIDataSlice.reducer;
export const {
  addBlankFilter,
  removeFilterCondition,
  changeFilterColumn,
  changeFilterCondition,
  changeFilterUserInput,
  restoreFromLocalStore,
} = filterUIDataSlice.actions;
