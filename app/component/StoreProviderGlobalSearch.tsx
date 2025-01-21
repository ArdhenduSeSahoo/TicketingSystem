"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import {
  AppStoreGlobal,
  makeStoreGlobal,
} from "@/lib/Redux/Stores/globalSearchStore/globalSearchStore";

export const GlobalStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storeRef = useRef<AppStoreGlobal>();
  if (!storeRef.current) {
    storeRef.current = makeStoreGlobal();
  }
  //const PersistStore = persistStore(storeRef.current);
  //
  return <Provider store={storeRef.current}>{children}</Provider>;
};
