"use client";

import { useRef } from "react";
import { Provider } from "react-redux";

import { AppStoreDashboard, makeStoreDashboard } from "@/lib/Redux/Stores/DashboardStore/DashboardStore";

export const DashboardStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storeRef = useRef<AppStoreDashboard>();
  if (!storeRef.current) {
    storeRef.current = makeStoreDashboard();
  }
  //const PersistStore = persistStore(storeRef.current);
  //
  return <Provider store={storeRef.current}>{children}</Provider>;
};
