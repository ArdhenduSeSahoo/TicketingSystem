import { useDispatch, useSelector, useStore } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import {
  AppDispatchGlobal,
  AppStoreGlobal,
  RootStateGlobal,
} from "../Stores/globalSearchStore/globalSearchStore";

export const useAppDispatchGlobal: () => AppDispatchGlobal = useDispatch;
export const useAppSelectorGlobal: TypedUseSelectorHook<RootStateGlobal> =
  useSelector;
export const useAppStoreGlobal: () => AppStoreGlobal = useStore;
