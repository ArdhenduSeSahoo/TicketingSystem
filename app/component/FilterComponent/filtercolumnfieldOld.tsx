import * as React from "react";

export default function columnFielsOld() {
  return (
    <div>
      <div className="hs-dropdown relative [--auto-close:inside] sm:mt-1 sm:inline-flex">
        <button
          id="hs-dropdown-auto-close-inside"
          type="button"
          className="hs-dropdown-toggle z-10 inline-flex w-60 items-center justify-between gap-x-2 rounded-lg border border-gray-200 bg-white px-2 py-2 text-sm shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:opacity-50"
          aria-haspopup="menu"
          aria-expanded="false"
          aria-label="Dropdown"
        >
          Clickable inside
          <svg
            className="hs-dropdown-open:rotate-180 size-2.5"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div
          className="hs-dropdown-menu duration hs-dropdown-open:opacity-100 z-50 mt-2 hidden w-60 rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin]"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="hs-dropdown-auto-close-inside"
        >
          <div className="relative flex border-spacing-5 items-center overflow-clip rounded-lg border border-blue-500 focus:border-blue-500">
            <div className="flex w-full">
              <input
                id="hs-dropdown-item-checkbox-delete"
                name="hs-dropdown-item-checkbox-delete"
                type="input"
                className="h-7 w-full border-none bg-slate-300 px-2 text-sm focus:border-none"
              />
            </div>
          </div>
          <div className="mt-1 h-96 overflow-x-auto">
            <ul className="flex flex-col"></ul>
          </div>
        </div>
      </div>
    </div>
  );
}
