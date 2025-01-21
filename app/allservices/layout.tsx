import NavBar from "../component/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="h-16 flex-none">
          <NavBar></NavBar>
        </div>

        {children}
      </div>
    </>
  );
}
