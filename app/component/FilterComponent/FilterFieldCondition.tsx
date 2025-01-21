import { EnumFilterConditionType } from "@/lib/Models/FilterModels/FilterEnums";
import { FilterUIData } from "@/lib/Models/FilterModels/FilterModels";
import FilterBooleanConditionDdw from "./FilterFieldConditionsAll/FilterBooleanConditionDdw";
import FilterDataFieldConditionDdw from "./FilterFieldConditionsAll/FilterDataFieldCondition";
import FilterStringConditionDdw from "./FilterFieldConditionsAll/FilterStringConditionDdw";

export interface IFilterFieldConditionProps {
  filterUIData: FilterUIData;
}

export default function FilterFieldCondition(
  props: IFilterFieldConditionProps,
) {
  const conditionType = props.filterUIData.firstFilter?.conditionType;
  //props.filterUIData.filterType === 1 &&
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
          <FilterBooleanConditionDdw
            filterUIData={props.filterUIData}
            key={1}
          />
        );
        break;
      case EnumFilterConditionType.dataFetchType:
        filterConditionElement = (
          <FilterDataFieldConditionDdw
            filterUIData={props.filterUIData}
            key={1}
          />
        );
        break;
      case EnumFilterConditionType.stringType:
        filterConditionElement = (
          <FilterStringConditionDdw filterUIData={props.filterUIData} key={1} />
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
