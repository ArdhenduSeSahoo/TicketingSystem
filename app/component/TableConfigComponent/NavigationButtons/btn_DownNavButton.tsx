"use client";
import { useAppDispatch, useAppSelector } from "@/lib/Redux/Hooks/HomePageHook";
import { selectRightSelectedItem } from "@/lib/Redux/Selectors/CommonSelectors/FilterSelectors";

import { moveDownSelectColumn } from "@/lib/Redux/Slices/commonSlices/SelectedItemSlice";

export default function DownNavButton() {
  const rightSelectedItems = useAppSelector(selectRightSelectedItem);
  const dispatch = useAppDispatch();

  function btn_click() {
    if (rightSelectedItems.length !== 0) {
      dispatch(moveDownSelectColumn(rightSelectedItems[0]));
    }
  }
  return (
    <div>
      <button className="btn_navigation" onClick={btn_click}>
        <span className="sr-only">Down</span>
        <svg
          viewBox="0 0 24 24"
          className="btn_navigation_svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z"
          />
        </svg>
      </button>
    </div>
  );
}
