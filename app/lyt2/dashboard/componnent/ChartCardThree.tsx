import { useAppDispatchDashboard } from "@/lib/Redux/Hooks/DashboardHooks";
import { useEffect} from "react";
import { fetchDataChart_Three } from "@/lib/Redux/Slices/dashboardSlice/DashboardSlice";
import ChartThree from "./ChartThree";

export default function ChartCardThree() {
  const dispatch = useAppDispatchDashboard();
  useEffect(()=>{
    dispatch(fetchDataChart_Three("ConfigurationItems"));
  });
  return (
    <div className="flex w-full flex-col">
      <div className="flex rounded-md bg-slate-200 px-2 text-lg font-semibold">
        Configuration Items
      </div>
      <div className="bg-linear-to-bl flex max-w-[750px] flex-grow flex-col overflow-x-auto rounded-md p-2">
        <ChartThree />
      </div>
    </div>
  );
}
