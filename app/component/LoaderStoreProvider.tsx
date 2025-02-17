import * as React from "react";
import PageLoader from "./LoaderUI/PageLoader";

export default function LoaderStoreProvider() {
  // const oldspinner = (
  //   <div>
  //     <div className="flex h-96 w-full items-stretch justify-center">
  //       <div className="flex">
  //         <div className="self-center">
  //           <span className="loading loading-infinity w-14"></span>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return <PageLoader />;
}
