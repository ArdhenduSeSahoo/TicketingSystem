import NavBar from "../component/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="supports-backdrop-blur:bg-white/95 sticky top-0 z-40 w-full flex-none bg-white backdrop-blur transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] dark:bg-slate-900/75">
        <div className="max-w-8xl mx-auto">
          <div className="border-b border-slate-900/10">
            <NavBar></NavBar>
          </div>
        </div>
      </div>

      {children}
    </>
  );
}
