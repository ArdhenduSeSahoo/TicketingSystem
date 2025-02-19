"use client";
import { useAppSelectorDashboard } from '@/lib/Redux/Hooks/DashboardHooks';
import { selectDashboardData } from '@/lib/Redux/Selectors/DashboardSelectors/DashboardSelectors';
import DChartUI from './ChartUI';


// export interface IChartOneProps {
// }

export default function ChartOne () {
  const seleterDashboardData = useAppSelectorDashboard(selectDashboardData);
 //console.log(seleterDashboardData);
 
  return (
    <div className="flex min-h-80 min-w-96 flex-row w-full">
      {seleterDashboardData.chartOneLoading 
      &&
       (
        <div className="flex flex-col w-full items-center justify-center">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      )}
      {seleterDashboardData.chartOneLoading == false && (
        <DChartUI ChartDataSet={seleterDashboardData.chartOneData} />
      )}
    </div>
  );
}
