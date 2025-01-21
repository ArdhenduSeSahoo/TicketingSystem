import React from "react";
import { createPopper } from "@popperjs/core";

const Dropdowntwo = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 sm:w-6/12 md:w-4/12">
          <div className="relative inline-flex w-full align-middle">
            <button
              className="bg-blueGray-500 active:bg-blueGray-600 mb-1 mr-1 rounded px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              blueGray Dropdown
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-blueGray-500 z-50 float-left mt-1 min-w-48 list-none rounded py-2 text-left text-base shadow-lg"
              }
            >
              <a
                href="#pablo"
                className="whitespace-no-wrap block w-full bg-transparent px-4 py-2 text-sm font-normal text-white"
                onClick={(e) => e.preventDefault()}
              >
                Action
              </a>
              <a
                href="#pablo"
                className="whitespace-no-wrap block w-full bg-transparent px-4 py-2 text-sm font-normal text-white"
                onClick={(e) => e.preventDefault()}
              >
                Another action
              </a>
              <a
                href="#pablo"
                className="whitespace-no-wrap block w-full bg-transparent px-4 py-2 text-sm font-normal text-white"
                onClick={(e) => e.preventDefault()}
              >
                Something else here
              </a>
              <div className="border-blueGray-800 my-2 h-0 border border-t-0 border-solid opacity-25" />
              <a
                href="#pablo"
                className="whitespace-no-wrap block w-full bg-transparent px-4 py-2 text-sm font-normal text-white"
                onClick={(e) => e.preventDefault()}
              >
                Seprated link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdowntwo;
