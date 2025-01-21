import "../../globals.css";
import BtnConfigDialogOpenButton from "./BtnConfigDialogOpen";
import ConfigContentComponent from "./ConfigContentComponent";

export default function TableConfigComponent() {
  return (
    <div>
      <BtnConfigDialogOpenButton />
      <div
        id="hs-vertically-centered-scrollable-modal"
        className="hs-overlay pointer-events-none fixed start-0 top-0 z-[80] hidden size-full overflow-y-auto overflow-x-hidden"
        role="dialog"
        aria-labelledby="hs-vertically-centered-scrollable-modal-label"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 m-3 mt-0 flex h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] items-center opacity-0 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-lg">
          <ConfigContentComponent />
        </div>
      </div>
    </div>
  );
}
