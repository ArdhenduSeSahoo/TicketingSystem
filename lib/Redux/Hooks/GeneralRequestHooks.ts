import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";
import {
  AppDispatchGeneral,
  AppStoreGeneral,
  RootStateGeneral,
} from "../Stores/CommonStore/GeneralRequestStore";

export const useAppDispatchGeneralRequest: () => AppDispatchGeneral =
  useDispatch;
export const useAppSelectorGeneralRequest: TypedUseSelectorHook<RootStateGeneral> =
  useSelector;
export const useAppStoreGeneralRequest: () => AppStoreGeneral = useStore;
