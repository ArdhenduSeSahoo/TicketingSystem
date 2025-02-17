"use client";

import { useState } from "react";
import {
  CommentsModel,
  CommentStringFilter,
} from "../../../../../lib/OtherFunctions/CommentFilterString";
import { useAppSelectorGeneralRequest } from "@/lib/Redux/Hooks/GeneralRequestHooks";
import { selectGeneralSearchData } from "@/lib/Redux/Selectors/CommonSelectors/GeneralRequestSelector";
import { WorkNoteFilterString } from "../../WorkNoteFilterString";
import {
  Incidents,
  IncidentsDetailsModel,
} from "@/lib/Models/IncidentDetailsModel";

export default function IncidentPageComponent() {
  const generalSearchSelector = useAppSelectorGeneralRequest(
    selectGeneralSearchData,
  );
  const [firstFetchdata, setfirstFetchdata] = useState<
    Incidents | undefined | null
  >(undefined);
  const [firstFetchcount, setfirstFetchcount] = useState(0);

  if (
    generalSearchSelector.whoRequestingFor === "IncidentFirstFetch" &&
    firstFetchcount === 0
  ) {
    //console.log(generalSearchSelector.searchData?.incidents?.items.length);
    const IDetails = generalSearchSelector.searchData as IncidentsDetailsModel;
    if (IDetails.incidents?.items.length > 0) {
      //console.log(generalSearchSelector.searchData?.incidents);
      setfirstFetchdata(IDetails.incidents);

      setfirstFetchcount(1);
    }
  }
  function inputbox(parm: string) {
    return (
      <>
        <div className="border-gray-350 bordered flex min-h-8 min-w-72 max-w-80 border-spacing-3 items-center rounded-md border border-gray-400 px-2 text-left">
          <p className="">{parm}</p>
        </div>
      </>
    );
  }
  function itemRow(prop: { lablename: string; lblvalue: string }) {
    return (
      <div className="flex flex-col lg:flex-row lg:gap-2">
        <label>{prop.lablename}</label>
        <div className="flex">{inputbox(prop.lblvalue)}</div>
      </div>
    );
  }

  function userCommentDesign(prop: { comments: CommentsModel }) {
    return (
      <>
        {/* <div>Date:-{itm.dateTime}</div> */}
        <div className="border-gray-350 bordered flex min-w-72 max-w-[950px] border-spacing-3 flex-col overflow-clip rounded-md border border-gray-400 pr-2 text-left lg:min-w-[1100px]">
          <div className="flex flex-row">
            <div className="flex max-h-full w-1 bg-blue-300">
              <div className="hidden">{" a"}</div>
            </div>
            <div className="flex w-full flex-col">
              <div className="flex w-full flex-row justify-between pt-2">
                <div className="pl-1 font-semibold">
                  {prop.comments.userName}
                </div>
                <div className="pr-2">{prop.comments.dateTime}</div>
              </div>
              <div className="flex overflow-auto text-wrap p-3 text-sm text-black">
                {prop.comments.commentsOfUser}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  const pagedesign2 = (
    <>
      <div className="flex w-full border-spacing-2 flex-col items-center justify-center">
        <div className="m-2 flex flex-col rounded-md border border-gray-600 p-4 lg:flex-row">
          <div className="flex flex-col items-end gap-2">
            {itemRow({
              lablename: "ID",
              lblvalue: firstFetchdata?.items[0]?.number ?? "",
            })}
            {itemRow({
              lablename: "Caller",
              lblvalue: firstFetchdata?.items[0]?.caller?.name ?? "",
            })}
            {itemRow({
              lablename: "Location",
              lblvalue: firstFetchdata?.items[0]?.location?.name ?? "",
            })}
            {itemRow({
              lablename: "Owner Group",
              lblvalue: firstFetchdata?.items[0]?.ownerGroup?.name ?? "",
            })}
            {itemRow({
              lablename: "Owner",
              lblvalue: firstFetchdata?.items[0]?.owner?.name ?? "",
            })}
            {itemRow({
              lablename: "Operational Tier 1",
              lblvalue: firstFetchdata?.items[0]?.operationalTier1?.name ?? "",
            })}
            {itemRow({
              lablename: "Operational Tier 2",
              lblvalue: firstFetchdata?.items[0]?.operationalTier2?.name ?? "",
            })}
            {itemRow({
              lablename: "Service",
              lblvalue: firstFetchdata?.items[0]?.service ?? "",
            })}
            {itemRow({
              lablename: "Configuration item",
              lblvalue: firstFetchdata?.items[0]?.configurationItem?.name ?? "",
            })}
          </div>
          <div className="lg:w-24"></div>
          <div className="flex flex-col items-end gap-2">
            <>
              {itemRow({
                lablename: "Created",
                lblvalue: firstFetchdata?.items[0]?.createdby?.name ?? "",
              })}
              {itemRow({
                lablename: "Opened by",
                lblvalue: firstFetchdata?.items[0]?.openedby?.name ?? "",
              })}
              {itemRow({
                lablename: "Channel",
                lblvalue: firstFetchdata?.items[0]?.channel?.name ?? "",
              })}
              {itemRow({
                lablename: "State",
                lblvalue: firstFetchdata?.items[0]?.state?.name ?? "",
              })}
              {itemRow({
                lablename: "On hold reason",
                lblvalue: firstFetchdata?.items[0]?.onholdreason ?? "",
              })}
              {itemRow({
                lablename: "Impact",
                lblvalue: firstFetchdata?.items[0]?.impact?.status ?? "",
              })}
              {itemRow({
                lablename: "Urgency",
                lblvalue: firstFetchdata?.items[0]?.urgency?.status ?? "",
              })}
              {itemRow({
                lablename: "Priority",
                lblvalue: firstFetchdata?.items[0]?.priority?.name ?? "",
              })}
              {itemRow({
                lablename: "Product Tier 1",
                lblvalue: firstFetchdata?.items[0]?.productTier1?.name ?? "",
              })}
              {itemRow({
                lablename: "Product Tier 2",
                lblvalue: firstFetchdata?.items[0]?.productTier2?.name ?? "",
              })}
              {itemRow({
                lablename: "Assignment group",
                lblvalue: firstFetchdata?.items[0]?.assignmentGroup?.name ?? "",
              })}
              {itemRow({
                lablename: "Assigned to",
                lblvalue: firstFetchdata?.items[0]?.assignedTo?.name ?? "",
              })}
            </>
          </div>
        </div>
        <div className="m-2 flex border-spacing-2 flex-col gap-2 rounded-md border border-gray-500 p-2">
          <div className="flex flex-row gap-2">
            <label className="w-32 font-semibold">Short Description:</label>
            <div className="border-gray-350 bordered flex min-w-72 max-w-[950px] border-spacing-3 overflow-auto rounded-md border bg-gray-100 px-2 text-left lg:min-w-[850px]">
              {firstFetchdata?.items[0]?.shortDescription}
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <label className="w-32 font-semibold">Description: </label>
            <div className="border-gray-350 bordered flex min-w-72 max-w-[950px] border-spacing-3 overflow-auto rounded-md border bg-gray-100 px-2 text-left">
              {firstFetchdata?.items[0]?.description}
            </div>
          </div>
        </div>
        <div className="m-2 flex border-spacing-2 flex-col gap-2">
          <label className="w-32 font-semibold">Comments:</label>
          <div className="flex flex-col gap-2 rounded-md border border-gray-700 p-2">
            {CommentStringFilter(firstFetchdata?.items[0]?.comments ?? "").map(
              (itm) => {
                return userCommentDesign({
                  comments: itm,
                });
              },
            )}
          </div>
        </div>
        <div className="m-2 flex border-spacing-2 flex-col gap-2">
          <label className="w-32 font-semibold">Work Note:</label>
          <div className="flex flex-col gap-2 rounded-md border border-gray-700 p-2">
            {WorkNoteFilterString(
              firstFetchdata?.items[0]?.worknotes ?? "",
            ).map((itm) => {
              return userCommentDesign({
                comments: itm,
              });
              // const desines = (
              //   <>
              //     {/* <div>Date:-{itm.dateTime}</div> */}
              //     <div className="border-gray-350 bordered flex min-w-72 max-w-[950px] border-spacing-3 flex-col rounded-md border bg-gray-100 px-2 text-left lg:min-w-[1100px]">
              //       <div className="flex w-full flex-row justify-between pt-2">
              //         <div className="pl-1 font-semibold">{itm.userName}</div>
              //         <div className="pr-2">{itm.dateTime}</div>
              //       </div>
              //       <div className="flex overflow-auto text-wrap p-3 text-left text-sm">
              //         {itm.commentsOfUser}
              //       </div>
              //     </div>
              //   </>
              // );
            })}
          </div>
        </div>
      </div>
    </>
  );
  return pagedesign2;
}
