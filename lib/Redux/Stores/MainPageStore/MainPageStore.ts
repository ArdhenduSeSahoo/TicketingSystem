import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../../../SagaFiles/RootSaga";
import SelectedItem from "../../Slices/commonSlices/SelectedItemSlice";
import ColumnLisDataSlice from "../../Slices/commonSlices/ColumnListSlice";

import IncidentTableData from "../../Slices/MainPage/IncidentTableDataSlice";
import RequestTableData from "../../Slices/RequestPage/RequestTableDataSlice";
import filterUIDataReducer from "../../Slices/commonSlices/FilterUIDataSlice";
import FilterFinalQueryReducer from "../../Slices/commonSlices/FilterFinalQuerySlice";
import FilterDataFieldDdwReducer from "../../Slices/commonSlices/FilterDataFieldDdwSlice";
import storageConfig from "../persiststorage/storageConfig";
//import createSecuredStorage from "redux-persist-encrypted-storage";

//import storage from "redux-persist/lib/storage";
//import AsyncStorage from "@react-native-async-storage/async-storage";
//import AsyncStorage from "@react-native-community/async-storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

// const secureStorage = createSecuredStorage();

const persistConfig = {
  key: "essplsnow",
  storage: storageConfig,
};

// const encrypt_config = {
//   transforms: [
//     encryptTransform({
//       secretKey: "Ardhendu",
//       onError: (err) => {
//         console.error(err);
//       },
//     }),
//   ],
// };

// const securePersistConfig = {
//   key: "secure",
//   storage: secureStorage,
// };

//

const reducerList = combineReducers({
  selectedItem: SelectedItem,
  ColumnLisData: persistReducer(persistConfig, ColumnLisDataSlice),
  incidentTableData: IncidentTableData,
  requestTableData: RequestTableData,
  filterUiData: filterUIDataReducer, // persistReducer(persistConfig, filterUIDataReducer),
  filterDataFieldDdw: FilterDataFieldDdwReducer,
  FilterFinalDataQuery: persistReducer(persistConfig, FilterFinalQueryReducer),
});

export const makeStore = () => {
  const store = configureStore({
    reducer: reducerList,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(sagaMiddleware),
  });
  sagaMiddleware.run(rootSaga);

  return store;
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
