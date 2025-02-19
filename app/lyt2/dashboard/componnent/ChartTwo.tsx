"use client";
import { useAppSelectorDashboard } from '@/lib/Redux/Hooks/DashboardHooks';
import { selectDashboardData } from '@/lib/Redux/Selectors/DashboardSelectors/DashboardSelectors';
import DChartUI from './ChartUI';


// export interface IChartOneProps {
// }

export default function ChartTwo () {
  const seleterDashboardData = useAppSelectorDashboard(selectDashboardData);
 //console.log(seleterDashboardData);
 
  return (
    <div className="flex min-h-80 w-full min-w-96 flex-row">
      {seleterDashboardData.chartTwoLoading && (
        <div className="flex w-full flex-col items-center justify-center">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      )}
      {seleterDashboardData.chartTwoLoading == false && (
        <DChartUI ChartDataSet={seleterDashboardData.chartTwoData} />
      )}
    </div>
  );
}
