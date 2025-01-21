import { EnumFilterConditionType } from "@/lib/Models/FilterModels/FilterEnums";
import { FilterUIData } from "@/lib/Models/FilterModels/FilterModels";
import FilterFieldBooleanInputDdw from "./FilterFieldInputValues/FilterFieldBooleanInputDdw";
import FilterFieldStringInput from "./FilterFieldInputValues/FilterFieldStringInput";
import FilterFieldDataFieldInputDdw from "./FilterFieldInputValues/FilterFieldDataFieldInputDdw";

export interface IFilterFieldUserInputs {
  filterUIData: FilterUIData;
}

export default function FilterFieldUserInputs(props: IFilterFieldUserInputs) {
  const conditionType = props.filterUIData.firstFilter?.conditionType;
  if (conditionType !== undefined) {
    let filterConditionElement: JSX.Element;
    // if (conditionType === EnumFilterConditionType.boolType) {
    //   return (
    //     <FilterBooleanConditionDdw
    //       filterType={props.filterType}
    //       filterUIData={props.filterUIData}
    //       key={1}
    //     />
    //   );
    // }
    switch (conditionType) {
      case EnumFilterConditionType.booleanType:
        filterConditionElement = (
          <FilterFieldBooleanInputDdw
            filterUIData={props.filterUIData}
            key={1}
          />
        );
        break;
      case EnumFilterConditionType.dataFetchType:
        filterConditionElement = (
          <FilterFieldDataFieldInputDdw
            filterUIData={props.filterUIData}
            key={1}
          />
        );
        break;
      case EnumFilterConditionType.stringType:
        filterConditionElement = (
          <FilterFieldStringInput filterUIData={props.filterUIData} key={1} />
        );
        break;
      default:
        filterConditionElement = <></>;
        break;
    }
    return filterConditionElement;
  }
  return <div></div>;
}
