"use client";
import {
  FilterUIData,
  ICommonInput,
} from "@/lib/Models/FilterModels/FilterModels";
import FilterFieldDataFieldInputDdwItem from "./FilterFieldDataFieldInputDdwItem";
import { useAppDispatch, useAppSelector } from "@/lib/Redux/Hooks/HomePageHook";
import {
  fetchFilterDataField,
  IFilterDataFetchDDW,
} from "@/lib/Redux/Slices/commonSlices/FilterDataFieldDdwSlice";
import { selectFilterDataFieldDdw } from "@/lib/Redux/Selectors/CommonSelectors/FilterSelectors";
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
  function onChangeFire(e: React.ChangeEvent<HTMLSelectElement>) {
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
}
