import { combineReducers, configureStore } from "@reduxjs/toolkit";
import BotsearchChartSlice from "../../Slices/BotSearchSlices/BotChartSlices";
import BotResultSlice from "../../Slices/BotSearchSlices/BotResultSlice";
import BotListDataSlice from "../../Slices/BotSearchSlices/BotListDataSlice";
import createSagaMiddleware from "redux-saga";
import { rootSagaBotSearch } from "@/lib/SagaFiles/RootSagaBotSearch";

const reducerList = combineReducers({ BotsearchChartSlice,BotResultSlice,BotListDataSlice });

const sagaMiddleware = createSagaMiddleware();

export const makeStoreBotSearch = () => {
  const store = configureStore({
    reducer: reducerList,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });
  
  sagaMiddleware.run(rootSagaBotSearch);

  return store;
};
export type AppStoreBotSearch = ReturnType<typeof makeStoreBotSearch>;
export type RootStateBotSearch = ReturnType<AppStoreBotSearch["getState"]>;
export type AppDispatchBootSearch = AppStoreBotSearch["dispatch"];
