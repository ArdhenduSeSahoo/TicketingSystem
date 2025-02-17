import * as React from "react";
import DChartUI from "./ChartUI";

export default function ChartCard() {
  return (
    <div>
      <div className="bg-linear-to-bl w-96 overflow-x-auto rounded-md bg-slate-200 from-violet-500 to-fuchsia-500 p-4 shadow-lg">
        <DChartUI />
      </div>
    </div>
  );
}
