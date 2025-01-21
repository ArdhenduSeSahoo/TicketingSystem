import FilterPanel from "@/app/component/FilterComponent/FilterPanel";
import FilterPanelInitDataLoader from "@/app/component/FilterComponent/FilterPanel_InitDataLoader";
import IncidentTable from "@/app/component/IncidentTable";
import InitDataLoading from "@/app/component/InitDataLoading";
import { MainStoreProvider } from "@/app/component/MainStoreProvider";
import TablePagingComponent from "@/app/component/TablePaggingComponent";
import { PageDataType } from "@/lib/DefaultData/PageDataType";

export default function Allincidents() {
  const typeoffilter = PageDataType.IncidentData;

  // const design1 = (
  //   <div>
  //     <MainStoreProvider>
  //       <InitDataLoading filterType={typeoffilter} />
  //       <div className="fixed inset-0 top-[3.8125rem] z-20 block overflow-y-auto">
  //         <div className="relative">
  //           <div className="top-0">
  //             <div className="relative bg-white">
  //               <div className="flex-shrink">
  //                 <FilterPanelInitDataLoader filterType={typeoffilter} />
  //                 <FilterPanel typeOfFilter={typeoffilter} />
  //               </div>
  //             </div>
  //           </div>
  //           <IncidentTable pageDataType={typeoffilter} />
  //           <div className="sticky bottom-0 bg-slate-200">
  //             <div className="flex flex-none justify-center">
  //               <TablePagingComponent pageDataType={typeoffilter} />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </MainStoreProvider>
  //   </div>
  // );
  // const design2 = (
  //   <div>
  //     {" "}
  //     <p>
  //       The width of the screen is: {width}px||{height}
  //     </p>{" "}
  //     <div className="flex flex-row">
  //       <div className="h-650pxl w-44 bg-slate-200">sdfasdfs</div>
  //     </div>
  //   </div>
  // );
  const design3 = (
    <>
      <>
        <MainStoreProvider>
          <InitDataLoading filterType={typeoffilter} />

          <div className="flex-shrink">
            <FilterPanelInitDataLoader filterType={typeoffilter} />
            <FilterPanel typeOfFilter={typeoffilter} />
          </div>

          <div className="h-96 grow overflow-scroll">
            {/* <SecondPage></SecondPage> */}
            <IncidentTable pageDataType={typeoffilter}></IncidentTable>
          </div>
          <div className="flex flex-none justify-center">
            <TablePagingComponent pageDataType={typeoffilter} />
          </div>
          {/* <FilterPanel />
          <div className="flex-grow rounded bg-white h-96 overflow-auto ">
            <IncidentTable />
          </div>
          <div className="flex flex-row gap-3 items-center justify-center p-3 bg-accent rounded">
            <button>Fetch Async</button>
          </div> */}
        </MainStoreProvider>
      </>
    </>
  );
  return design3;
}
