"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import {
    AppStoreBotSearch,
    makeStoreBotSearch
} from "@/lib/Redux/Stores/BotSearchStore/BotSearchStore";

export const BotSearchStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storeRef = useRef<AppStoreBotSearch>();
  if (!storeRef.current) {
    storeRef.current = makeStoreBotSearch();
  }
  //const PersistStore = persistStore(storeRef.current);
  //
  return <Provider store={storeRef.current}>{children}</Provider>;
};
