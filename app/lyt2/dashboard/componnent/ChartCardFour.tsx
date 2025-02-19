import { useAppDispatchDashboard } from "@/lib/Redux/Hooks/DashboardHooks";
import { useEffect} from "react";
import { fetchDataChart_Four } from "@/lib/Redux/Slices/dashboardSlice/DashboardSlice";
import ChartFour from "./ChartFour";

export default function ChartCardFour() {
  const dispatch = useAppDispatchDashboard();
  useEffect(()=>{
    dispatch(fetchDataChart_Four("AssignmentGroups"));
  });
  return (
    <div className="flex w-full flex-col">
      <div className="flex rounded-md bg-slate-200 px-2 text-lg font-semibold">
        Assignment Groups
      </div>
      <div className="bg-linear-to-bl flex max-w-[750px] flex-grow flex-col overflow-x-auto rounded-md p-2">
        <ChartFour />
      </div>
    </div>
  );
}
