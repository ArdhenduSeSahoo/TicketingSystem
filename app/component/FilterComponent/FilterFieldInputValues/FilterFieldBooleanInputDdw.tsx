import {
  FilterUIData,
  ICommonInput,
} from "@/lib/Models/FilterModels/FilterModels";
import { AllBooleanDataInputs } from "@/lib/DefaultData/FilterData/ConditionDataAll";
import FilterFieldBooleanInputDdwItem from "./FilterFieldBooleanInputDdwItem";
import { FilterBooleanInput } from "@/lib/Models/FilterModels/FilterModels";
import { useAppDispatch } from "@/lib/Redux/Hooks/HomePageHook";
import { changeFilterUserInput } from "@/lib/Redux/Slices/commonSlices/FilterUIDataSlice";
export interface IFilterFieldBooleanInputProps {
  filterUIData: FilterUIData;
}

export default function FilterFieldBooleanInputDdw(
  props: IFilterFieldBooleanInputProps,
) {
  const menuItems: JSX.Element[] = [];
  //if (props.filterUIData.filterType === 1)
  {
    let isSelectedPreviously: boolean = false;
    menuItems.push(<option value={0}>Select....</option>);
    AllBooleanDataInputs.forEach((itm, index) => {
      const inputvalues = props.filterUIData.inputValue as ICommonInput;
      if (inputvalues !== null && inputvalues.inputValue === itm.name) {
        isSelectedPreviously = true;
      } else {
        isSelectedPreviously = false;
      }
      menuItems.push(
        <FilterFieldBooleanInputDdwItem
          filterDataField={itm}
          //filterRow={props.filterUIData}
          key={index}
          isSelected={isSelectedPreviously}
        />,
      );
    });
  }
  const dispatch = useAppDispatch();
  function item_click() {}
  let displayName = "";
  // function instanceOfBooleanInput(data: unknown): data is FilterBooleanInput {
  //   return data as FilterBooleanInput;
  // }
  // if (instanceOfBooleanInput(props.filterUIData.inputValue)) {
  //   displayName = (props.filterUIData.inputValue as FilterBooleanInput).name;
  // }
  // try {
  //   if (props.filterUIData.inputValue !== null) {
  //     displayName = (props.filterUIData.inputValue as FilterBooleanInput).name;
  //   }
  // } catch (err) {
  //   console.error(err);
  // }
  function onChangeFire(e) {
    for (const key in AllBooleanDataInputs) {
      if (AllBooleanDataInputs[key].name == e.target.value) {
        dispatch(
          changeFilterUserInput({
            filterRow: props.filterUIData,
            newFilterUserDataInput: AllBooleanDataInputs[key],
          }),
        );
      }
    }
  }
  const olddesign = (
    <div>
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="flex h-8 min-w-40 max-w-64 flex-row items-center justify-between overflow-clip rounded-md bg-white p-1 px-2"
        >
          <p className="truncate">{displayName}</p>
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
  const newdesign = (
    <>
      <select
        onChange={onChangeFire}
        className="select select-success select-sm min-w-40 max-w-64"
      >
        {menuItems}
      </select>
    </>
  );
  return newdesign;
}
