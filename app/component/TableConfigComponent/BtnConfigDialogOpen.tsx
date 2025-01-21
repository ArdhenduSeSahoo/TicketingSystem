"use client";
import { IncidentAllColumnConfig } from "@/lib/DefaultData/FilterData/IncidentAllColumnConfigData";
import { IncidentDefaultColumnConfig } from "@/lib/DefaultData/IncidentDefaultColumns";
import { useAppDispatch, useAppSelector } from "@/lib/Redux/Hooks/HomePageHook";
import {
  addItemToRightSideList,
  addToAllColumnList,
  removeAllFinalModifyItem,
  removeAllSelectedItem,
} from "@/lib/Redux/Slices/commonSlices/SelectedItemSlice";
import ConfigContentComponent from "./ConfigContentComponent";
import { selectColumnListData } from "@/lib/Redux/Selectors/CommonSelectors/ColumnListDataSelector";

export default function BtnConfigDialogOpenButton() {
  const finalSelectedItems = useAppSelector(selectColumnListData);

  const dispatch = useAppDispatch();

  function btn_click() {
    dispatch(addToAllColumnList(IncidentAllColumnConfig));
    let selected_Columns =
      finalSelectedItems.incidentColumnList.columnConfigList;
    if (selected_Columns.length === 0) {
      selected_Columns = IncidentDefaultColumnConfig;
    }
    dispatch(removeAllSelectedItem());
    dispatch(removeAllFinalModifyItem());
    dispatch(addItemToRightSideList(selected_Columns));
  }
  return (
    <>
      <label htmlFor="my_modal_6" className="btn btn-sm" onClick={btn_click}>
        Config
      </label>
      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
        readOnly
      />
      <div className="modal" role="dialog">
        <div className="modal-box p-0">
          <ConfigContentComponent pageDataLoadType={1} />
          {/* <h3 className="text-lg font-bold">Hello!</h3>
                  <p className="py-4">
                    This modal works with a hidden checkbox!
                  </p>
                  <div className="modal-action">
                    <label htmlFor="my_modal_6" className="btn">
                      Close!
                    </label>
                  </div> */}
        </div>
      </div>
    </>
  );
}
