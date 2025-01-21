"use client";
import { useAppSelectorGeneralRequest } from "@/lib/Redux/Hooks/GeneralRequestHooks";
import { selectGeneralSearchData } from "@/lib/Redux/Selectors/CommonSelectors/GeneralRequestSelector";
import { useState } from "react";
import { CommentStringFilter } from "../../CommentFilterString";
import { WorkNoteFilterString } from "../../WorkNoteFilterString";

export interface IRequestPageComponentProps {
  //firstPartData: object;
}

export default function RequestPageComponent(
  props: IRequestPageComponentProps,
) {
  const generalSearchSelector = useAppSelectorGeneralRequest(
    selectGeneralSearchData,
  );
  const [firstFetchdata, setfirstFetchdata] = useState<
    object | undefined | null
  >(undefined);
  const [firstFetchcount, setfirstFetchcount] = useState(0);

  if (
    generalSearchSelector.whoRequestingFor === "RequestFirstFetch" &&
    firstFetchcount === 0
  ) {
    // if (
    //   generalSearchSelector.searchData?.data !== undefined &&
    //   firstFetchdata == null
    // )
    {
      //setfirstFetchdata(geenralSearchSelector.searchData?.data?.request);
      //firstFetchDataObj = generalSearchSelector.searchData?.data?.request;
      //console.log(generalSearchSelector.searchData?.data?.request);
      if (generalSearchSelector.searchData?.data?.request.items.length > 0) {
        setfirstFetchdata(generalSearchSelector.searchData?.data?.request);
        setfirstFetchcount(1);
      }

      //   else {
      //     setfirstFetchdata(undefined);
      //   }

      //generalSearchSelector.whoRequestingFor = "";
    }
    //console.log(firstFetchDataObj?.items[0].urgency?.status);
  }

  //   function btn_click() {
  //     dispatch(
  //       fetchGeneralSearchData({
  //         searchQuery: request_Query_first,
  //         whoSearchfor: "RequestFirstFetchnext",
  //       }),
  //     );
  //   }
  function inputbox(parm: string) {
    return (
      <>
        <div className="border-gray-350 bordered flex min-h-8 min-w-72 max-w-80 border-spacing-3 items-center rounded-md border border-gray-300 px-2 text-left">
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
        <div className="self-stretch px-4 font-bold">Request:</div>
        <div className="m-2 flex flex-col rounded-md border border-gray-600 p-4 lg:flex-row">
          <div className="flex flex-col items-end gap-2">
            {itemRow({
              lablename: "ID",
              lblvalue: firstFetchdata?.items[0]?.number,
            })}
            {itemRow({
              lablename: "Item",
              lblvalue: firstFetchdata?.items[0]?.item?.name,
            })}
            {itemRow({
              lablename: "Request",
              lblvalue: firstFetchdata?.items[0]?.requestIds,
            })}
            {itemRow({
              lablename: "Requested for",
              lblvalue: firstFetchdata?.items[0]?.requestedFor?.name,
            })}
            {itemRow({
              lablename: "Location",
              lblvalue: firstFetchdata?.items[0]?.location?.name,
            })}
            {itemRow({
              lablename: "Business Unit",
              lblvalue: firstFetchdata?.items[0]?.businessUnit?.name,
            })}
            {itemRow({
              lablename: "Configuration item",
              lblvalue: firstFetchdata?.items[0]?.configurationItem?.name,
            })}
          </div>
          <div className="lg:w-24"></div>
          <div className="flex flex-col items-end gap-2">
            <>
              {itemRow({
                lablename: "Opened",
                lblvalue: firstFetchdata?.items[0]?.opened,
              })}
              {itemRow({
                lablename: "Opened by",
                lblvalue: firstFetchdata?.items[0]?.openedBy?.name,
              })}
              {itemRow({
                lablename: "State",
                lblvalue: firstFetchdata?.items[0]?.state?.name,
              })}
              {itemRow({
                lablename: "Stage",
                lblvalue: firstFetchdata?.items[0]?.stage?.name,
              })}
              {itemRow({
                lablename: "Assignment group",
                lblvalue: firstFetchdata?.items[0]?.assignmentGroup?.name,
              })}{" "}
              {itemRow({
                lablename: "Assigned to",
                lblvalue: firstFetchdata?.items[0]?.assignedTo?.name,
              })}{" "}
              {itemRow({
                lablename: "Impact",
                lblvalue: firstFetchdata?.items[0]?.impact?.status,
              })}{" "}
              {itemRow({
                lablename: "Urgency",
                lblvalue: firstFetchdata?.items[0]?.urgency?.status,
              })}{" "}
              {itemRow({
                lablename: "Priority",
                lblvalue: firstFetchdata?.items[0]?.priority?.name,
              })}{" "}
              {itemRow({
                lablename: "Approval",
                lblvalue: firstFetchdata?.items[0]?.approval?.name,
              })}{" "}
              {itemRow({
                lablename: "Contact Type",
                lblvalue: firstFetchdata?.items[0]?.contactType?.name,
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
            {CommentStringFilter(firstFetchdata?.items[0]?.comments).map(
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
            {WorkNoteFilterString(firstFetchdata?.items[0]?.workNotes).map(
              (itm) => {
                return userCommentDesign({
                  comments: itm,
                });
              },
            )}
          </div>
        </div>
      </div>
    </>
  );
  return pagedesign2;
}
