import { useDispatch, useSelector, useStore } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import {
  AppDispatchNavBar,
  AppStoreNavBar,
  RootStateNavBar,
} from "../Stores/NavBarStore/NavBarStore";

export const useAppDispatchNavBar: () => AppDispatchNavBar = useDispatch;
export const useAppSelectorNavBar: TypedUseSelectorHook<RootStateNavBar> =
  useSelector;
export const useAppStoreNavBar: () => AppStoreNavBar = useStore;
