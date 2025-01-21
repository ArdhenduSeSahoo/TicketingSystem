import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatchBootSearch, AppStoreBotSearch, RootStateBotSearch } from "../Stores/BotSearchStore/BotSearchStore";

export const useAppDispatchBotSearch: () => AppDispatchBootSearch = useDispatch;
export const useAppSelectorBotSelector: TypedUseSelectorHook<RootStateBotSearch> =
  useSelector;
export const useAppStoreBotSearch: () => AppStoreBotSearch = useStore;