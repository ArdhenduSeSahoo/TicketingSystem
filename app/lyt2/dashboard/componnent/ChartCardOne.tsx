import { useAppDispatchDashboard } from "@/lib/Redux/Hooks/DashboardHooks";
import { useEffect} from "react";
import { fetchDataChart_One } from "@/lib/Redux/Slices/dashboardSlice/DashboardSlice";
import ChartOne from "./ChartOne";

export default function ChartCardOne() {
  const dispatch = useAppDispatchDashboard();
  useEffect(()=>{
    dispatch(fetchDataChart_One("Location"));
  });
  return (
    <div className="flex flex-col w-full">
      <div className="flex rounded-md bg-slate-200 text-lg font-semibold px-2">
        Locations
      </div>
      <div className="bg-linear-to-bl flex max-w-[750px] flex-grow flex-col overflow-x-auto rounded-md p-2">
        <ChartOne />
      </div>
    </div>
  );
}
