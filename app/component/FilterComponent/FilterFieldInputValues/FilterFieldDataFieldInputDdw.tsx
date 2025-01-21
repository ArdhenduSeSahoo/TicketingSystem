"use client";
import {
  FilterDataFieldInput,
  FilterUIData,
  ICommonInput,
} from "@/lib/Models/FilterModels/FilterModels";
import FilterFieldDataFieldInputDdwItem from "./FilterFieldDataFieldInputDdwItem";
import { useAppDispatch, useAppSelector } from "@/lib/Redux/Hooks/HomePageHook";
import {
  fetchFilterDataField,
  IFilterDataFetchDDW,
} from "@/lib/Redux/Slices/commonSlices/FilterDataFieldDdwSlice";
import {
  selectFilterDataFieldDdw,
  selectFilterUIDataAll,
} from "@/lib/Redux/Selectors/CommonSelectors/FilterSelectors";
import { changeFilterUserInput } from "@/lib/Redux/Slices/commonSlices/FilterUIDataSlice";

export interface IFilterFieldBooleanInputProps {
  filterUIData: FilterUIData;
}

export default function FilterFieldDataFieldInputDdw(
  props: IFilterFieldBooleanInputProps,
) {
  const dispatch = useAppDispatch();
  const selectFilterDataFetchDataList = useAppSelector(
    selectFilterDataFieldDdw,
  );
  const selectfilterUiData = useAppSelector(selectFilterUIDataAll);
  let selectedItem = "";
  let menuItems: JSX.Element[] = [];
  let find_data_fetch_item: IFilterDataFetchDDW | undefined;
  let isSelectedPreviously: boolean = false;
  //if (props.filterUIData.filterType === 1)
  {
    //console.log(selectFilterDataFetchDataList);
    //console.log(props.filterUIData.inputValue);
    const savedInputValues = props.filterUIData.inputValue as ICommonInput;
    if (
      savedInputValues !== null &&
      selectFilterDataFetchDataList.isLoading === -1
    ) {
      menuItems = [];
      //menuItems.push(<option value={0}>Select....</option>);

      menuItems.push(
        <FilterFieldDataFieldInputDdwItem
          filterDataField={{
            id: Number(savedInputValues.inputValue ?? "0"),
            inputValue: savedInputValues.inputValue ?? "",
            name: savedInputValues.name,
          }}
          filterRow={props.filterUIData}
          key={1}
          keyval={1}
          isSelected={true}
        />,
      );
    }
    if (selectFilterDataFetchDataList.isLoading === 1) {
      menuItems = [];
      menuItems.push(
        // <li
        //   key={0}
        //   className="flex items-start justify-center overflow-hidden rounded-lg p-3 text-start"
        // >
        //   <span className="loading loading-spinner text-primary"></span>
        // </li>,
        <>
          <option key={0} value={-2}></option>
          <option key={0} value={-1}>
            Loading.....
          </option>
          ,
        </>,
      );
    } else if (selectFilterDataFetchDataList.isLoading === 0) {
      find_data_fetch_item =
        selectFilterDataFetchDataList.filterDataFetchList.find((itm) => {
          return (
            itm.filterColumnValue.name === props.filterUIData.firstFilter?.name
          );
        });
      if (
        find_data_fetch_item !== undefined &&
        find_data_fetch_item.filterDatainputFields !== undefined
      ) {
        //console.log(find_data_fetch_item.filterDatainputFields.length);
        menuItems = [];
        menuItems.push(<option value={0}>Select....</option>);

        find_data_fetch_item.filterDatainputFields.forEach((itm, index) => {
          // if (inputvalues?.inputValue !== null) {
          // } else {
          //   console.log("object");
          // }

          if (
            savedInputValues?.inputValue !== null &&
            String(savedInputValues?.inputValue) === String(itm.id)
          ) {
            isSelectedPreviously = true;
          } else {
            isSelectedPreviously = false;
          }
          menuItems.push(
            <FilterFieldDataFieldInputDdwItem
              filterDataField={itm}
              filterRow={props.filterUIData}
              key={index}
              keyval={index}
              isSelected={isSelectedPreviously}
            />,
          );
        });
      } //if (selectFilterDataFetchDataList.isLoading !== -1)
      else {
        menuItems = [];
        menuItems.push(<option value={0}>Select....</option>);
        menuItems.push(
          // <li
          //   key={0}
          //   className="flex items-start justify-center overflow-hidden rounded-lg p-3 text-start"
          // >
          //   No Data Found
          // </li>,
          <>
            <option key={0} value={-2}></option>
            <option key={0} value={-1}>
              No data Found
            </option>
            ,
          </>,
        );
      }
    }
    // try {
    //   selectfilterUiData.incidentFilterUIData?.forEach((itm) => {
    //     if (itm.id === props.filterUIData.id) {
    //       if (itm.inputValue !== null)
    //         selectedItem = (itm.inputValue as FilterDataFieldInput).name;
    //     }
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
  }

  function btn_clicked() {
    if (props.filterUIData.firstFilter !== null) {
      dispatch(fetchFilterDataField(props.filterUIData.firstFilter));
    }
  }
  function onChangeFire(e) {
    //console.log(e.target.value);
    if (e.target.value !== "-1") {
      if (
        find_data_fetch_item !== undefined &&
        find_data_fetch_item.filterDatainputFields !== undefined
      ) {
        for (const key in find_data_fetch_item.filterDatainputFields) {
          if (
            String(find_data_fetch_item.filterDatainputFields[key].id) ===
            String(e.target.value)
          ) {
            //console.log(find_data_fetch_item.filterDatainputFields[key]);
            const element = find_data_fetch_item.filterDatainputFields[key];
            dispatch(
              changeFilterUserInput({
                filterRow: props.filterUIData,
                newFilterUserDataInput: element,
              }),
            );
          }
        }
      }
    }
  }
  const newdesign = (
    <>
      <select
        onClick={btn_clicked}
        onChange={onChangeFire}
        className="select select-success select-sm min-w-40 max-w-64"
      >
        {menuItems}
      </select>
    </>
  );
  return newdesign;
  const olddesign = (
    <div>
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          onClick={btn_clicked}
          className="flex h-8 min-w-40 max-w-64 flex-row items-center justify-between overflow-clip rounded-md bg-white p-1 px-2"
        >
          <p className="truncate">{selectedItem}</p>
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
          className="dropdown-content z-50 mt-1 max-h-80 min-w-40 max-w-60 overflow-y-scroll rounded-box bg-gray-100 p-2 text-black shadow"
        >
          {menuItems}
        </ul>
      </div>
    </div>
  );
}
