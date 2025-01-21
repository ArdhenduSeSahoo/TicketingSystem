import { GeneralRequestStoreProvider } from "@/app/component/StoreProviderGeneralSearch";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <div className="flex-shrink"></div>
      <div className="h-96 grow overflow-scroll">{children}</div>
      <div className="flex-shrink"></div> */}
      <GeneralRequestStoreProvider>{children}</GeneralRequestStoreProvider>
    </>
  );
}
