"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import {
  AppStoreGeneral,
  makeStoreGeneral,
} from "@/lib/Redux/Stores/CommonStore/GeneralRequestStore";

export const GeneralRequestStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storeRef = useRef<AppStoreGeneral>();
  if (!storeRef.current) {
    storeRef.current = makeStoreGeneral();
  }
  //const PersistStore = persistStore(storeRef.current);
  //
  return <Provider store={storeRef.current}>{children}</Provider>;
};
