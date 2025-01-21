import { GlobalStoreProvider } from "@/app/component/StoreProviderGlobalSearch";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GlobalStoreProvider>{children}</GlobalStoreProvider>
    </>
  );
}
