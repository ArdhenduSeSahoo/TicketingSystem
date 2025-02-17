import { FilterColumnIncidentAll } from "@/lib/DefaultData/FilterData/IncidentFilterColumnsAll";
import {
  FilterColumnValue,
  FilterUIData,
} from "@/lib/Models/FilterModels/FilterModels";

import MainDropDownItem from "./MainDropDownItem";
import { PageDataType } from "@/lib/DefaultData/PageDataType";
import { FilterColumnRequestAll } from "@/lib/DefaultData/FilterData/RequestFilterColumnsAll";
import { useAppDispatch } from "@/lib/Redux/Hooks/HomePageHook";
import { changeFilterColumn } from "@/lib/Redux/Slices/commonSlices/FilterUIDataSlice";

export interface IFilterFieldColumnProps {
  filterUIData: FilterUIData;
}

export default function FilterFieldColumn(props: IFilterFieldColumnProps) {
  const menuItems: JSX.Element[] = [];
  const dispatch = useAppDispatch();
  let filtercolumns: FilterColumnValue[] = [];
  menuItems.push();
  if (props.filterUIData.filterType === PageDataType.IncidentData) {
    filtercolumns = FilterColumnIncidentAll;
    // FilterColumnIncidentAll.forEach((itm, index) => {
    //   menuItems.push(
    //     <MainDropDownItem
    //       filterDataColumn={itm}
    //       filterRow={props.filterUIData}
    //       key={index}
    //     />,
    //   );
    // });
  } else if (props.filterUIData.filterType === PageDataType.RequestData) {
    filtercolumns = FilterColumnRequestAll;
    // FilterColumnRequestAll.forEach((itm, index) => {
    //   menuItems.push(
    //     <MainDropDownItem
    //       filterDataColumn={itm}
    //       filterRow={props.filterUIData}
    //       key={index}
    //     />,
    //   );
    // });
  }
  if (filtercolumns.length > 0) {
    let isSelectedPreviously: boolean = false;
    menuItems.push(<option value={0}>Select....</option>);
    filtercolumns.forEach((itm, index) => {
      if (props.filterUIData.firstFilter?.name === itm.name) {
        isSelectedPreviously = true;
      } else {
        isSelectedPreviously = false;
      }
      menuItems.push(
        <MainDropDownItem
          filterDataColumn={itm}
          filterRow={props.filterUIData}
          key={index + 2}
          isSelected={isSelectedPreviously}
          optionKey={index}
        />,
      );
    });
  }
  function onChangeFire(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = e.target.value;
    console.log(selectedValue);
    for (const key in filtercolumns) {
      if (filtercolumns[key].name === selectedValue) {
        dispatch(
          changeFilterColumn({
            filterRow: props.filterUIData,
            newFilterColumn: filtercolumns[key],
          }),
        );
        break;
      }
    }
  }
  return (
    <div>
      <select
        onChange={onChangeFire}
        className="select select-success select-sm min-w-40 max-w-64"
      >
        {menuItems}
      </select>
      {/* <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="flex h-8 min-w-40 max-w-64 flex-row items-center justify-between overflow-clip rounded-md bg-white p-1 px-2"
        >
          <p className="truncate">{props.filterUIData.firstFilter?.name}</p>
          <span>
            <svg
              fill="#000000"
              height="15"
              width="15"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.011 512.011"
            >
              <g>
                <g>
                  <path
                    d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0
			s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667
			C514.096,145.416,514.096,131.933,505.755,123.592z"
                  />
                </g>
              </g>
            </svg>
          </span>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-50 mt-1 max-h-80 w-60 overflow-y-scroll rounded-box bg-gray-100 p-2 text-black shadow"
        >
          {menuItems}
        </ul>
      </div> */}
    </div>
  );
}
