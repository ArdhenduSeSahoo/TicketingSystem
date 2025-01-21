"use client";
import { useAppDispatch } from "@/lib/Redux/Hooks/HomePageHook";
import IncidentTable from "./component/IncidentTable";
import { useEffect } from "react";
import { fetchIncidentTableData } from "@/lib/Redux/Slices/MainPage/IncidentTableDataSlice";

export default function SecondPage() {
  const dispatch = useAppDispatch();

  const onFetchData = () => {
    //dispatch(fetchIncidentList());
    //dispatch(LoadInitData());
    //dispatch(fetchIncidentData());
    // let aaa = Math.floor(Math.random() * 100 + 1);
    // console.log(aaa);
    //dispatch(getvalueTest("Ardhendu"));

    dispatch(fetchIncidentTableData());
  };

  return (
    <>
      <div className="">
        <IncidentTable></IncidentTable>
      </div>
    </>
  );
}
