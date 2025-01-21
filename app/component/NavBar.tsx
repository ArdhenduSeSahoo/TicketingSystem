import Image from "next/image";
import SearchBoxComponent from "./NavBarComponent/SerachBox";
import Link from "next/link";
import { NavBarStoreProvider } from "./StoreProviderNavBarSearch";

export default function NavBar() {
  return (
    <>
      <nav className="rounded-md border-gray-200 bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between rounded-md p-2">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            /> */}
            <div className="flex rounded-md">
              <Image
                alt="no data"
                src={"/images/EssplNewLogoLight.png"}
                height={150}
                width={150}
                className="object-cover"
              />
            </div>

            {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              ESSPL SNOW
            </span> */}
          </a>
          <div className="flex gap-2 md:order-2">
            <div>
              <Link href={"/lyt2/fileupload"}>Upload</Link>
            </div>
            <NavBarStoreProvider>
              <SearchBoxComponent></SearchBoxComponent>
            </NavBarStoreProvider>

            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 p-2 text-sm text-black hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search s..."
              />
            </div>
            <ul className="flex flex-row gap-3 rounded-lg font-medium">
              <li>
                <Link
                  href="/"
                  className="flex rounded p-1 text-white hover:bg-slate-300 hover:text-blue-700"
                  aria-current="page"
                >
                  <p className="">Incident</p>
                </Link>
              </li>
              <li>
                <Link
                  href={`/allservices/allrequests`}
                  className="flex rounded p-1 text-white hover:bg-slate-300 hover:text-blue-700"
                >
                  Requests
                </Link>
              </li>
              <li>
                <Link
                  href={`/lyt2/gs/globalsearch`}
                  className="flex rounded p-1 text-white hover:bg-slate-300 hover:text-blue-700"
                >
                  SearchAll
                </Link>
              </li>
              <li>
                <Link
                  href={`/lyt2/gs/botsearch`}
                  className="flex rounded p-1 text-white hover:bg-slate-300 hover:text-blue-700"
                >
                  BotSearch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
