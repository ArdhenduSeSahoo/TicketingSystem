import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";
import { AppDispatchDashboard, AppStoreDashboard, RootStateDashboard } from "../Stores/DashboardStore/DashboardStore";

export const useAppDispatchDashboard: () => AppDispatchDashboard = useDispatch;
export const useAppSelectorDashboard: TypedUseSelectorHook<RootStateDashboard> =
  useSelector;
export const useAppStoreDashboard: () => AppStoreDashboard = useStore;
