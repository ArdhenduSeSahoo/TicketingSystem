import {
  removeAllColumnList,
  removeAllSelectedItem,
} from "../Redux/Slices/commonSlices/SelectedItemSlice";

import type { AppDispatch } from "@/lib/Redux/Stores/MainPageStore/MainPageStore";

export function DialogCloseAction(dispatch: AppDispatch) {
  dispatch(removeAllSelectedItem());
  dispatch(removeAllColumnList());
}
