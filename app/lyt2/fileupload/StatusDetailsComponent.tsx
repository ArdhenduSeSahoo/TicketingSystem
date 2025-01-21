import * as React from "react";

//export interface IStatusDetailsComponentProps {}

export default function StatusDetailsComponent() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col rounded-md bg-slate-300 p-2">
        <div>Incident Service :-</div>
        <div>File Name: </div>
        <div>Processed Rows: </div>
      </div>
    </div>
  );
}
