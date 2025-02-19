import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dashboradSlice from "../../Slices/dashboardSlice/DashboardSlice";
import createSagaMiddleware from "redux-saga";
import { rootSagaDashboard } from "@/lib/SagaFiles/RootSagaDashboard";
const reducerList = combineReducers({
  dashboradSlice
});

const sagaMiddleware = createSagaMiddleware();

export const makeStoreDashboard = () => {
  const store = configureStore({
    reducer: reducerList,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSagaDashboard);

  return store;
};
export type AppStoreDashboard = ReturnType<typeof makeStoreDashboard>;
export type RootStateDashboard = ReturnType<AppStoreDashboard["getState"]>;
export type AppDispatchDashboard = AppStoreDashboard["dispatch"];
