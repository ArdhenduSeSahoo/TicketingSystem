"use client";
import * as React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import ConfigContentComponent from "./ConfigContentComponent";

import { DialogCloseAction } from "@/lib/OtherFunctions/TableConfigCloseBtnAction";
import { useAppDispatch, useAppSelector } from "@/lib/Redux/Hooks/HomePageHook";
import {
  addItemToRightSideList,
  addToAllColumnList,
  removeAllColumnList,
  removeAllFinalModifyItem,
  removeAllSelectedItem,
} from "@/lib/Redux/Slices/commonSlices/SelectedItemSlice";
import { fetchIncidentTableData } from "@/lib/Redux/Slices/MainPage/IncidentTableDataSlice";
import { IncidentAllColumnConfig } from "@/lib/DefaultData/FilterData/IncidentAllColumnConfigData";
import { IncidentDefaultColumnConfig } from "@/lib/DefaultData/IncidentDefaultColumns";
import { selectFinalSelectedItem } from "@/lib/Redux/Selectors/CommonSelectors/FilterSelectors";
import { PageDataType } from "@/lib/DefaultData/PageDataType";
import { RequestsDefaultColumnConfig } from "@/lib/DefaultData/Requests/RequestDefaultColumns";
import { RequestAllColumnConfig } from "@/lib/DefaultData/FilterData/RequestAllColumnConfigData";
import { selectColumnListData } from "@/lib/Redux/Selectors/CommonSelectors/ColumnListDataSelector";
import { ColumnConfig } from "@/lib/Models/ColumnConfigModel";
import {
  AddIncidentColumns,
  AddRequestColumns,
} from "@/lib/Redux/Slices/commonSlices/ColumnListSlice";

interface IModalTableConfig {
  pageDataLoadType: PageDataType;
}
export default function ModalTableConfig(props: IModalTableConfig) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const selectFinalColumnList = useAppSelector(selectFinalSelectedItem);
  const finalSelectedItems = useAppSelector(selectColumnListData);
  function closeBtnclick() {
    DialogCloseAction(dispatch);
    setIsOpen(false);
  }

  function btn_Save_Clicked() {
    //console.log(selectFinalColumnList);
    if (props.pageDataLoadType === PageDataType.IncidentData) {
      dispatch(AddIncidentColumns(selectFinalColumnList));
    } else if (props.pageDataLoadType === PageDataType.RequestData) {
      dispatch(AddRequestColumns(selectFinalColumnList));
    }
    dispatch(removeAllSelectedItem());
    dispatch(removeAllFinalModifyItem());
    dispatch(removeAllColumnList());
    dispatch(fetchIncidentTableData());
    setIsOpen(false);
  }

  function btn_OpenDialog() {
    let selected_Columns: ColumnConfig[] = [];
    if (props.pageDataLoadType === PageDataType.IncidentData) {
      dispatch(addToAllColumnList(IncidentAllColumnConfig));
      selected_Columns = finalSelectedItems.incidentColumnList.columnConfigList;
    } else if (props.pageDataLoadType === PageDataType.RequestData) {
      dispatch(addToAllColumnList(RequestAllColumnConfig));
      selected_Columns = finalSelectedItems.requestColumnList.columnConfigList;
    }

    if (selected_Columns.length === 0) {
      selected_Columns =
        props.pageDataLoadType === PageDataType.IncidentData
          ? IncidentDefaultColumnConfig
          : RequestsDefaultColumnConfig;
    }
    dispatch(removeAllSelectedItem());
    dispatch(removeAllFinalModifyItem());
    dispatch(addItemToRightSideList(selected_Columns));
    setIsOpen(true);
  }
  return (
    <div>
      <button onClick={btn_OpenDialog} className="btn btn-success btn-sm">
        Config
      </button>
      <Dialog open={isOpen} onClose={() => null} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg">
            <div className="pointer-events-auto flex max-h-full w-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm">
              <div className="flex items-center justify-between border-b px-4 py-3">
                <h3 className="font-bold">Table Config</h3>
                {/* <CloseButton2 /> */}
              </div>
              <ConfigContentComponent />
              <div className="modal-action flex items-center justify-end gap-x-2 border-t px-4 py-3">
                {/* <CloseButton /> */}
                <button
                  className="btn btn-error btn-sm"
                  onClick={closeBtnclick}
                >
                  Cancel
                </button>
                {/* <SaveButtonConfigTable /> */}
                <button
                  className="btn btn-info btn-sm"
                  onClick={btn_Save_Clicked}
                >
                  Save
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
