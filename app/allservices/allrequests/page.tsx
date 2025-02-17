import FilterPanel from "@/app/component/FilterComponent/FilterPanel";
import FilterPanelInitDataLoader from "@/app/component/FilterComponent/FilterPanel_InitDataLoader";
import IncidentTable from "@/app/component/IncidentTable";
import InitDataLoading from "@/app/component/InitDataLoading";
import { MainStoreProvider } from "@/app/component/MainStoreProvider";
import TablePagingComponent from "@/app/component/TablePaggingComponent";
import { PageDataType } from "@/lib/DefaultData/PageDataType";

export default function AllRequest() {
  const typeOfFilter = PageDataType.RequestData;
  // const design1 = (
  //   <div>
  //     <MainStoreProvider>
  //       <InitDataLoading filterType={typeOfFilter} />
  //       <div className="fixed inset-0 top-[3.8125rem] z-20 block overflow-y-auto">
  //         <div className="relative">
  //           <div className="top-0">
  //             <div className="relative bg-white">
  //               <div className="flex-shrink">
  //                 <FilterPanelInitDataLoader filterType={typeOfFilter} />
  //                 <FilterPanel typeOfFilter={typeOfFilter} />
  //               </div>
  //             </div>
  //           </div>
  //           <IncidentTable pageDataType={typeOfFilter} />
  //           <div className="sticky bottom-0 bg-slate-200">
  //             <div className="flex flex-none justify-center">
  //               <TablePagingComponent pageDataType={typeOfFilter} />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </MainStoreProvider>
  //   </div>
  // );
  const design2 = (
    <>
      <>
        <MainStoreProvider>
          <InitDataLoading filterType={typeOfFilter} />

          <div className="flex-shrink">
            <FilterPanelInitDataLoader filterType={typeOfFilter} />
            <FilterPanel typeOfFilter={typeOfFilter} />
          </div>

          <div className="h-96 grow overflow-scroll">
            <IncidentTable pageDataType={typeOfFilter}></IncidentTable>
          </div>
          <div className="flex flex-none justify-center">
            <TablePagingComponent pageDataType={typeOfFilter} />
          </div>
        </MainStoreProvider>
      </>
    </>
  );
  return design2;
}
