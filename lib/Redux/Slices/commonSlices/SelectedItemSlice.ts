import { ColumnConfig } from "@/lib/Models/ColumnConfigModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColumnModification {
  leftSelectedColumn: ColumnConfig[];
  rightSelectedColumn: ColumnConfig[];
  finalModifiedList: ColumnConfig[];
  allColumnList: ColumnConfig[];
  allColumnListBackup: ColumnConfig[];
}
const initstate: ColumnModification = {
  leftSelectedColumn: [],
  rightSelectedColumn: [],
  finalModifiedList: [],
  allColumnList: [],
  allColumnListBackup: [],
};
const selectedColumn = createSlice({
  name: "SelectedColumn",
  initialState: initstate,
  reducers: {
    addToLeftSelectedItem: (state, action: PayloadAction<ColumnConfig[]>) => {
      state.leftSelectedColumn?.push(...action.payload);
      action.payload.forEach((item) => {
        if (!state.leftSelectedColumn.includes(item)) {
          state.leftSelectedColumn.push(item);
        }
      });
    },
    removeLeftSelectedItem: (state, action: PayloadAction<ColumnConfig[]>) => {
      action.payload.forEach((itemToremove) => {
        const indexToRemove = state.leftSelectedColumn?.findIndex((item) => {
          return item.name === itemToremove.name;
        });
        {
          if (state.leftSelectedColumn?.length === 1) {
            state.leftSelectedColumn?.splice(
              0,
              state.leftSelectedColumn?.length,
            );
          } else {
            state.leftSelectedColumn?.splice(indexToRemove, 1);
          }
        }
      });
    },
    addToRightSelectedItem: (state, action: PayloadAction<ColumnConfig[]>) => {
      //state.rightSelectedColumn?.push(...action.payload);
      action.payload.forEach((item) => {
        if (!state.rightSelectedColumn.includes(item)) {
          state.rightSelectedColumn.push(item);
        }
      });
    },
    removeRightSelectedItem: (state, action: PayloadAction<ColumnConfig[]>) => {
      action.payload.forEach((itemToremove) => {
        const indexToRemove = state.rightSelectedColumn?.findIndex((item) => {
          return item.name === itemToremove.name;
        });
        {
          if (state.rightSelectedColumn?.length === 1) {
            state.rightSelectedColumn?.splice(
              0,
              state.rightSelectedColumn?.length,
            );
          } else {
            state.rightSelectedColumn?.splice(indexToRemove, 1);
          }
        }
      });
    },
    removeAllSelectedItem: (state) => {
      state.leftSelectedColumn?.splice(0, state.leftSelectedColumn?.length);
      state.rightSelectedColumn?.splice(0, state.rightSelectedColumn?.length);
    },

    removeAllFinalModifyItem: (state) => {
      state.finalModifiedList.splice(0, state.finalModifiedList.length);
    },
    addItemToRightSideList: (state, action: PayloadAction<ColumnConfig[]>) => {
      action.payload.forEach((item) => {
        if (!state.finalModifiedList.includes(item)) {
          state.finalModifiedList.push(item);
        }
      });
      action.payload.forEach((itemToremove) => {
        const indexToRemove = state.allColumnList.findIndex((item) => {
          return item.name === itemToremove.name;
        });
        state.allColumnList.splice(indexToRemove, 1);
      });
      state.leftSelectedColumn?.splice(0, state.leftSelectedColumn?.length);
    },
    addItemToLeftSideList: (state, action: PayloadAction<ColumnConfig[]>) => {
      state.allColumnList.push(...action.payload);
      action.payload.forEach((itemToremove) => {
        const indexToRemove = state.finalModifiedList.findIndex((item) => {
          return item.name === itemToremove.name;
        });
        state.finalModifiedList.splice(indexToRemove, 1);
      });
      state.rightSelectedColumn?.splice(0, state.rightSelectedColumn?.length);
    },
    addToAllColumnList: (state, action: PayloadAction<ColumnConfig[]>) => {
      state.allColumnList = action.payload;
      state.allColumnListBackup = action.payload;
    },
    removeAllColumnList: (state) => {
      state.allColumnList.splice(0, state.allColumnList.length);
      state.allColumnListBackup.splice(0, state.allColumnListBackup.length);
    },
    removeFromAllColumnList: (state, action: PayloadAction<ColumnConfig[]>) => {
      action.payload.forEach((itemToremove) => {
        const indexToRemove = state.allColumnList.findIndex((item) => {
          return item.name === itemToremove.name;
        });
        if (indexToRemove !== -1) {
          state.allColumnList.splice(indexToRemove, 1);
        }
      });
    },
    moveUPSelectColumn: (state, action: PayloadAction<ColumnConfig>) => {
      const CurrentPosition = state.finalModifiedList.findIndex((item) => {
        return item.name === action.payload.name;
      });

      if (CurrentPosition !== 0) {
        const prevarr = state.finalModifiedList.slice(0, CurrentPosition - 1);
        const justprevious = state.finalModifiedList.slice(
          CurrentPosition - 1,
          CurrentPosition,
        );
        const affterarr = state.finalModifiedList.slice(
          CurrentPosition + 1,
          state.finalModifiedList.length,
        );
        const modifiedarray = [
          ...prevarr,
          action.payload,
          ...justprevious,
          ...affterarr,
        ];
        state.finalModifiedList = modifiedarray;
      }
    },
    moveDownSelectColumn: (state, action: PayloadAction<ColumnConfig>) => {
      const CurrentPosition = state.finalModifiedList.findIndex((item) => {
        return item.name === action.payload.name;
      });

      if (CurrentPosition + 1 < state.finalModifiedList.length) {
        const PreviousItems = state.finalModifiedList.slice(0, CurrentPosition);
        const JustAfterItem = state.finalModifiedList.slice(
          CurrentPosition + 1,
          CurrentPosition + 2,
        );
        const AffterItems = state.finalModifiedList.slice(CurrentPosition + 2);
        const modifiedarray = [
          ...PreviousItems,
          ...JustAfterItem,
          action.payload,
          ...AffterItems,
        ];
        state.finalModifiedList = modifiedarray;
      }
    },
    setDefaultColumns: (state, action: PayloadAction<ColumnConfig[]>) => {
      //state.finalModifiedList.splice(0, state.finalModifiedList.length);
      state.finalModifiedList = action.payload;
      //state.allColumnList.splice(0, state.allColumnList.length);
      const filterarray = state.allColumnListBackup.filter((b_item) => {
        return !action.payload.some((fm) => {
          return b_item.name === fm.name;
        });
      });

      state.allColumnList = filterarray;
    },
  },
});

export default selectedColumn.reducer;
export const {
  addToLeftSelectedItem,
  removeLeftSelectedItem,
  removeAllSelectedItem,
  addItemToLeftSideList,
  addItemToRightSideList,
  addToRightSelectedItem,
  removeRightSelectedItem,
  removeAllColumnList,
  addToAllColumnList,
  removeFromAllColumnList,
  moveUPSelectColumn,
  moveDownSelectColumn,
  setDefaultColumns,
  removeAllFinalModifyItem,
} = selectedColumn.actions;
