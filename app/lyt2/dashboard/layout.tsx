import { DashboardStoreProvider } from "@/app/component/StoreProviderDashboard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashboardStoreProvider>{children}</DashboardStoreProvider>
    </>
  );
}
