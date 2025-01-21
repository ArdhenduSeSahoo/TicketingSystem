"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import {
  AppStoreNavBar,
  makeStoreNavBar,
} from "@/lib/Redux/Stores/NavBarStore/NavBarStore";

export const NavBarStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storeRef = useRef<AppStoreNavBar>();
  if (!storeRef.current) {
    storeRef.current = makeStoreNavBar();
  }
  //const PersistStore = persistStore(storeRef.current);
  //
  return <Provider store={storeRef.current}>{children}</Provider>;
};
