import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import NavbarSearch from "../../Slices/commonSlices/NavBarSearchSlice";
import { rootSagaNavBar } from "@/lib/SagaFiles/RootSagaNavBar";

const sagaMiddleware = createSagaMiddleware();

const reducerList = combineReducers({ NavbarSearch });

export const makeStoreNavBar = () => {
  const store = configureStore({
    reducer: reducerList,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });
  sagaMiddleware.run(rootSagaNavBar);

  return store;
};
export type AppStoreNavBar = ReturnType<typeof makeStoreNavBar>;
export type RootStateNavBar = ReturnType<AppStoreNavBar["getState"]>;
export type AppDispatchNavBar = AppStoreNavBar["dispatch"];
