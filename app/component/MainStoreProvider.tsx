"use client";
import {
  AppStore,
  makeStore,
} from "@/lib/Redux/Stores/MainPageStore/MainPageStore";
import { useRef } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import LoaderStoreProvider from "./LoaderStoreProvider";

export const MainStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  const PersistStore = persistStore(storeRef.current);
  //
  return (
    <Provider store={storeRef.current}>
      {/* */}
      <PersistGate loading={<LoaderStoreProvider />} persistor={PersistStore}>
        {children}
      </PersistGate>
    </Provider>
  );
};
