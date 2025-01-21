import RightItemListComponent from "./RightItemListComponent";
import LeftNavButton from "./NavigationButtons/LeftNavButton";
import RightNavButton from "./NavigationButtons/RightNavButton";
import DefaultButton from "./BtnDefault";
import LeftItemListComponent from "./LeftitemListComponent";
import UpNavButton from "./NavigationButtons/btn_UpNavButton";
import DownNavButton from "./NavigationButtons/btn_DownNavButton";
import { PageDataType } from "@/lib/DefaultData/PageDataType";

interface IConfigContentComponent {
  pageDataLoadType: PageDataType;
}
export default function ConfigContentComponent(props: IConfigContentComponent) {
  const newdesgn = (
    <>
      <div className="p-2">
        <div className="flex h-72 gap-2 rounded-md">
          <div className="border-gray-850 relative grow border-spacing-2 overflow-auto rounded-md border-2 bg-gray-100">
            <LeftItemListComponent pageDataLoadType={props.pageDataLoadType} />
          </div>
          <div className="flex grow-0 items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <LeftNavButton />
              <RightNavButton />
            </div>
          </div>
          <div className="border-gray-850 relative grow border-spacing-2 overflow-auto rounded-md border-2 bg-gray-100">
            <RightItemListComponent />
          </div>
          <div className="flex grow-0 flex-col items-center justify-center gap-2">
            <UpNavButton />
            <DownNavButton />
          </div>
        </div>
        <div className="m-2 flex flex-row">
          <DefaultButton />
        </div>
      </div>
    </>
  );
  return newdesgn;
}
