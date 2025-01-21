import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import GeneralSearch from "../../Slices/commonSlices/GeneralRequestSlice";
import { rootSagaGeneralSearch } from "@/lib/SagaFiles/RootSagaGeneralSearch";

const sagaMiddleware = createSagaMiddleware();

const reducerList = combineReducers({ GeneralSearch });

export const makeStoreGeneral = () => {
  const store = configureStore({
    reducer: reducerList,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });
  sagaMiddleware.run(rootSagaGeneralSearch);

  return store;
};
export type AppStoreGeneral = ReturnType<typeof makeStoreGeneral>;
export type RootStateGeneral = ReturnType<AppStoreGeneral["getState"]>;
export type AppDispatchGeneral = AppStoreGeneral["dispatch"];
