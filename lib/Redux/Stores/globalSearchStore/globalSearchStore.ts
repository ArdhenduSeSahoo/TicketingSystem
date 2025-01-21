import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import GlobalSearch from "../../Slices/globlaSearchSlice/globalSearchSlices";
import { rootSagaGlobalSearch } from "@/lib/SagaFiles/RootSagaGlobalSearch";

const sagaMiddleware = createSagaMiddleware();

const reducerList = combineReducers({ GlobalSearch });

export const makeStoreGlobal = () => {
  const store = configureStore({
    reducer: reducerList,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });
  sagaMiddleware.run(rootSagaGlobalSearch);

  return store;
};
export type AppStoreGlobal = ReturnType<typeof makeStoreGlobal>;
export type RootStateGlobal = ReturnType<AppStoreGlobal["getState"]>;
export type AppDispatchGlobal = AppStoreGlobal["dispatch"];
