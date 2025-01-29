"use client";
import { useEffect } from "react";
import { useAppDispatchGeneralRequest } from "@/lib/Redux/Hooks/GeneralRequestHooks";
import { fetchGeneralSearchData } from "@/lib/Redux/Slices/commonSlices/GeneralRequestSlice";
import RequestPageComponent from "./RequestPageComponent";

export default function Page({ params }: { params: { id: string } }) {
  // const [firstFetchdata, setfirstFetchdata] = useState<
  //   object | undefined | null
  // >(undefined);
  // const [ErrorData, setErrorData] = useState("");
  // const [dataJson, setDataJson] = useState(Object);
  // const [isLoading, setLoading] = useState(true);
  //let firstFetchDataObj: object | undefined = undefined;

  const dispatch = useAppDispatchGeneralRequest();
  const request_Query_first = `query {
  request(order: {}, skip: 0, take: 100, where: { and: {  number: { eq: "${params.id}", }, }, or: {  } }) {
    items {
     number
      item {
        name
      }
      requestIds
      requestedFor {
        name
      }
      location {
        name
      }
      businessUnit {
        name
      }
      configurationItem {
        name
      }
      opened
      openedBy {
        name
      }
      stage {
        name
      }
      state {
        name
      }
      assignmentGroup {
        name
      }
      assignedTo {
        name
      }
      impact {
        status
      }
      urgency {
        status
      }
      priority {
        name
      }
      approval {
        name
      }
      contactType {
        name
      }
      shortDescription
      description
      comments
      workNotes
    }
  }
}`;
  //console.log(geenralSearchSelector.whoRequestingFor);

  // if (generalSearchSelector.whoRequestingFor === "RequestFirstFetch") {
  //   if (
  //     generalSearchSelector.searchData?.data !== undefined &&
  //     firstFetchdata == null
  //   ) {
  //     //setfirstFetchdata(geenralSearchSelector.searchData?.data?.request);
  //     //firstFetchDataObj = generalSearchSelector.searchData?.data?.request;
  //     console.log(generalSearchSelector.searchData?.data?.request);
  //     if (generalSearchSelector.searchData?.data?.request.items.length > 0) {
  //       setfirstFetchdata(generalSearchSelector.searchData?.data?.request);
  //     } else {
  //       setfirstFetchdata(undefined);
  //     }

  //     //generalSearchSelector.whoRequestingFor = "";
  //   }
  //   //console.log(firstFetchDataObj?.items[0].urgency?.status);
  // }
  //console.log(firstFetchdata?.items[0].urgency);
  // console.log(geenralSearchSelector.searchData?.data?.request.items[0].number);

  useEffect(() => {
    dispatch(
      fetchGeneralSearchData({
        searchQuery: request_Query_first,
        whoSearchfor: "RequestFirstFetch",
      }),
    );
  });
  // const comment_str = ``;
  // const worknote = ``;

  // function inputbox(parm: string) {
  //   return (
  //     <>
  //       <div className="border-gray-350 bordered flex h-8 min-w-72 border-spacing-3 items-center rounded-md border bg-gray-100 px-2 text-left">
  //         <p className="">{parm}</p>
  //       </div>
  //     </>
  //   );
  // }
  // function itemRow(prop: { lablename: string; lblvalue: string }) {
  //   return (
  //     <div className="flex flex-col lg:flex-row lg:gap-2">
  //       <label>{prop.lablename}</label>
  //       <div className="flex">{inputbox(prop.lblvalue)}</div>
  //     </div>
  //   );
  // }
  return (
    <div>
      <RequestPageComponent></RequestPageComponent>
    </div>
  );
}
