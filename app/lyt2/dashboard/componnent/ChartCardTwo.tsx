import { useAppDispatchDashboard } from "@/lib/Redux/Hooks/DashboardHooks";
import { useEffect} from "react";
import { fetchDataChart_Two } from "@/lib/Redux/Slices/dashboardSlice/DashboardSlice";
import ChartTwo from "./ChartTwo";

export default function ChartCardTwo() {
  const dispatch = useAppDispatchDashboard();
  useEffect(()=>{
    dispatch(fetchDataChart_Two("OperationalTier"));
  });
  return (
    <div className="flex w-full flex-col">
      <div className="flex rounded-md bg-slate-200 px-2 text-lg font-semibold">
        Operational Tier
      </div>
      <div className="bg-linear-to-bl flex max-w-[750px] flex-grow flex-col overflow-x-auto rounded-md p-2">
        <ChartTwo />
      </div>
    </div>
  );
}
