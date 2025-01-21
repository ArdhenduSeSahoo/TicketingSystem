"use client";
import { DialogCloseAction } from "@/lib/OtherFunctions/TableConfigCloseBtnAction";
import { useAppDispatch } from "@/lib/Redux/Hooks/HomePageHook";

export default function CloseButton() {
  const dispatch = useAppDispatch();
  function closeBtnclick() {
    DialogCloseAction(dispatch);
  }
  return (
    <div>
      <label
        htmlFor="my_modal_6"
        className="btn btn-error btn-sm"
        onClick={closeBtnclick}
      >
        Close
      </label>
    </div>
  );
}

export function CloseButton2() {
  const dispatch = useAppDispatch();
  function closeBtnclick() {
    DialogCloseAction(dispatch);
  }
  return (
    <div>
      <label
        htmlFor="my_modal_6"
        className="btn btn-circle btn-outline btn-error btn-sm"
        onClick={closeBtnclick}
      >
        <span className="sr-only">Close</span>
        <svg
          className="size-4 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </label>
      {/* <button
        type="button"
        onClick={closeBtnclick}
        className="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent bg-red-200 text-gray-800 hover:bg-red-300 focus:bg-gray-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
        aria-label="Close"
        data-hs-overlay="#hs-vertically-centered-scrollable-modal"
      >
        <span className="sr-only">Close</span>
        <svg
          className="size-4 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </button> */}
    </div>
  );
}
