"use client";
import { useEffect, useState } from "react";
import { CommentStringFilter } from "../../CommentFilterString";
import { WorkNoteFilterString } from "../../WorkNoteFilterString";
import { useAppDispatchGeneralRequest } from "@/lib/Redux/Hooks/GeneralRequestHooks";
import { fetchGeneralSearchData } from "@/lib/Redux/Slices/commonSlices/GeneralRequestSlice";
import RequestPageComponent from "./RequestPageComponent";

export default function Page({ params }: { params: { id: string } }) {
  const [firstFetchdata, setfirstFetchdata] = useState<
    object | undefined | null
  >(undefined);
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
  }, []);
  const comment_str = ``;
  const worknote = ``;

  function btn_click() {
    dispatch(
      fetchGeneralSearchData({
        searchQuery: request_Query_first,
        whoSearchfor: "RequestFirstFetchnext",
      }),
    );
  }
  function inputbox(parm: string) {
    return (
      <>
        <div className="border-gray-350 bordered flex h-8 min-w-72 border-spacing-3 items-center rounded-md border bg-gray-100 px-2 text-left">
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
  const pagedesign = (
    <>
      <div className="flex w-full flex-col items-center justify-center pt-10">
        <div className="flex flex-col items-center justify-center rounded-lg border border-red-700 bg-slate-50">
          <div className="flex border-spacing-1 rounded-md p-4">
            <div className="flex w-full flex-row justify-between">
              <div className="flex flex-col gap-2">
                {itemRow({
                  lablename: "ID",
                  lblvalue: firstFetchdata?.items[0].number,
                })}
                {itemRow({ lablename: "Items", lblvalue: "Ardhendu" })}
                {itemRow({
                  lablename: "Request",
                  lblvalue: "Ardhendu",
                })}
                {itemRow({ lablename: "Request for", lblvalue: "Ardhendu" })}
                {itemRow({ lablename: "Location", lblvalue: "Ardhendu" })}
                {itemRow({
                  lablename: "Business Unit",
                  lblvalue: "Ardhendu",
                })}
                {itemRow({
                  lablename: "Configuration item",
                  lblvalue: "Ardhendu",
                })}
              </div>
              <div className="flex flex-col gap-2">
                {itemRow({ lablename: "Opened", lblvalue: "Ardhendu" })}
                {itemRow({ lablename: "Opened by", lblvalue: "Ardhendu" })}
                {itemRow({ lablename: "State", lblvalue: "Ardhendu" })}
                {itemRow({ lablename: "Stage", lblvalue: "Ardhendu" })}
                {itemRow({
                  lablename: "Assignment group",
                  lblvalue: "Ardhendu",
                })}
                {itemRow({ lablename: "Assigned to", lblvalue: "Ardhendu" })}
                {itemRow({ lablename: "Impact", lblvalue: "Ardhendu" })}
                {itemRow({ lablename: "Urgency", lblvalue: "Ardhendu" })}
                {itemRow({ lablename: "Priority", lblvalue: "Ardhendu" })}
                {itemRow({ lablename: "Approval", lblvalue: "Ardhendu" })}
                {itemRow({ lablename: "Contact Type", lblvalue: "Ardhendu" })}
              </div>
            </div>
          </div>
          <div className="m-2 flex border-spacing-1 flex-col gap-2 rounded-md border border-red-700 p-2">
            <div className="flex flex-row justify-end gap-2">
              Description:
              <div className="bordered flex min-w-[60rem] max-w-[70rem] border-spacing-2 items-center rounded-md bg-gray-100 px-2 text-left">
                <p className="">
                  If you need to use a one-off width value that doesn’t make
                  sense to include in your theme, use square brackets to
                  generate a property on the fly using any arbitrary value. If
                  you need to use a one-off width value that doesn’t make sense
                  to include in your theme, use square brackets to generate a
                  property on the fly using any arbitrary value.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-2">
              Short Description:
              <div className="bordered flex min-w-[60rem] max-w-[70rem] border-spacing-2 items-center rounded-md bg-gray-100 px-2 text-left">
                <p className="">
                  If you need to use a one-off width value that doesn’t make
                  sense to include in your theme, use square brackets to
                  generate a property on the fly using any arbitrary value. If
                  you need to use a one-off width value that doesn’t make sense
                  to include in your theme, use square brackets to generate a
                  property on the fly using any arbitrary value.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex min-w-60 flex-col items-center justify-center rounded-lg border border-red-700 p-2">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Comments:</p>
            {CommentStringFilter(comment_str).map((itm) => {
              return (
                <>
                  <div className="bordered flex min-w-[60rem] max-w-[70rem] border-spacing-2 flex-col items-start rounded-md bg-gray-100 px-2 text-left">
                    <div className="flex w-full flex-row justify-between">
                      <div className="pl-2 font-semibold">{itm.userName}</div>
                      <div className="pr-2">{itm.dateTime}</div>
                    </div>
                    <p className="">{itm.commentsOfUser}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="mt-2 flex min-w-60 flex-col items-center justify-center rounded-lg border border-red-700 p-2">
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Work Note:</p>
            {WorkNoteFilterString(worknote).map((itm) => {
              return (
                <>
                  <div className="bordered flex min-w-[60rem] max-w-[70rem] border-spacing-2 flex-col items-start rounded-md bg-gray-100 px-2 text-left">
                    <div className="flex w-full flex-row justify-between">
                      <div className="pl-2 font-semibold">{itm.userName}</div>
                      <div className="pr-2">{itm.dateTime}</div>
                    </div>
                    <p className="">{itm.commentsOfUser}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
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
              lblvalue: "RITM",
            })}
            {itemRow({
              lablename: "ID ueaoir ewrt ",
              lblvalue: "RITM",
            })}
          </div>
          <div className="lg:w-24"></div>
          <div className="flex flex-col items-end gap-2">
            <>
              {itemRow({
                lablename: "ID",
                lblvalue: firstFetchdata?.items[0].number,
              })}
              {itemRow({
                lablename: "ID sadjlas d",
                lblvalue: "RITM",
              })}
              {itemRow({
                lablename: "ID asjdfweiof aowf ioajef o",
                lblvalue: "RITM",
              })}
            </>
          </div>
        </div>
        <div className="m-2 flex border-spacing-2 flex-col gap-2 rounded-md border border-gray-500 p-2">
          <div className="flex flex-row gap-2">
            <label className="w-32 font-semibold">Short Description:</label>
            <div className="border-gray-350 bordered flex min-w-72 max-w-[950px] border-spacing-3 rounded-md border bg-gray-100 px-2 text-left">
              If Windows Authentication is used then in ConnectionString there
              should be Trusted_Connection=True; because Sql credentials are
              required to stay in connection. Another Conn.Str. config that can
              useful for operations with extrely large data sets is
              ConnectionTimeout that can be increased from default 15 s to 60 or
              more to avoid 'Execution Timeout' if it were to occur. When used
              directly each of these operations are separate transactions and
              are automatically committed. And if we need multiple operations in
              single procedure then explicit transaction should be used, for
              example:
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <label className="w-32 font-semibold">Description: </label>
            <div className="border-gray-350 bordered flex min-w-72 max-w-[950px] border-spacing-3 rounded-md border bg-gray-100 px-2 text-left">
              If Windows Authentication is used then in ConnectionString there
              should be Trusted_Connection=True; because Sql credentials are
              required to stay in connection. Another Conn.Str.
            </div>
          </div>
        </div>
        <div className="m-2 flex border-spacing-2 flex-col gap-2">
          <label className="w-32 font-semibold">Comments:</label>
          <div className="flex flex-col gap-2 rounded-md border border-gray-700 p-2">
            <div>Date:-</div>
            <div className="border-gray-350 bordered flex min-w-72 max-w-[950px] border-spacing-3 flex-col rounded-md border bg-gray-100 px-2 text-left">
              <div className="flex w-full flex-row justify-between pt-2">
                <div className="pl-1 font-semibold">{"itm.userName"}</div>
                <div className="pr-2">{"itm.dateTime"}</div>
              </div>
              <p className="p-3 text-sm">
                If Windows Authentication is used then in ConnectionString there
                should be Trusted_Connection=True; because Sql credentials are
                required to stay in connection. Another Conn.Str. config that
                can useful for operations with extrely large data sets is
                ConnectionTimeout that can be increased from default 15 s to 60
                or more to avoid 'Execution Timeout' if it were to occur. When
                used directly each of these operations are separate transactions
                and are automatically committed. And if we need multiple
                operations in single procedure then explicit transaction should
                be used, for example:
              </p>
            </div>
          </div>
        </div>
        <div className="m-2 flex border-spacing-2 flex-col gap-2 rounded-md border border-red-500 p-2">
          <div className="flex flex-col gap-2">
            <label className="w-32 font-semibold">Work Note:</label>
            <div className="border-gray-350 bordered flex min-w-72 max-w-[950px] border-spacing-3 rounded-md border bg-gray-100 px-2 text-left">
              If Windows Authentication is used then in ConnectionString there
              should be Trusted_Connection=True; because Sql credentials are
              required to stay in connection. Another Conn.Str. config that can
              useful for operations with extrely large data sets is
              ConnectionTimeout that can be increased from default 15 s to 60 or
              more to avoid 'Execution Timeout' if it were to occur. When used
              directly each of these operations are separate transactions and
              are automatically committed. And if we need multiple operations in
              single procedure then explicit transaction should be used, for
              example:
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <div>
      <RequestPageComponent></RequestPageComponent>
    </div>
  );
}
