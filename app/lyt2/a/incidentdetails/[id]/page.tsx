"use client";

import { useAppDispatchGeneralRequest } from "@/lib/Redux/Hooks/GeneralRequestHooks";
import IncidentPageComponent from "./IncidentPageComponent";
import { useEffect } from "react";
import { fetchGeneralSearchData } from "@/lib/Redux/Slices/commonSlices/GeneralRequestSlice";

export default function Page({ params }: { params: { id: string } }) {
  const dispatch = useAppDispatchGeneralRequest();

  const request_Query_first = `query {
  incidents(
    skip: 0
    take: 1
    order: { id: ASC }
    where: { number: { eq: "${params.id}" } }
  ) {
    items {
      number
      caller {
        name
      }
      location {
        name
      }
      ownerGroup {
        name
      }
      owner {
        name
      }
      operationalTier2 {
        name
      }
      operationalTier1 {
        name
      }
      service
      configurationItem {
        name
      }
      createdby {
        name
      }
      openedby {
        name
      }
      channel {
        name
      }
      state {
        name
      }
      onholdreason
      impact {
        status
      }
      urgency {
        status
      }
      priority {
        name
      }
      productTier1 {
        name
      }
      productTier2 {
        name
      }
      assignmentGroup {
        name
      }
      assignedTo {
        name
      }
      description
      shortDescription
      worknotes
      comments
    }
  }
  }`;

  useEffect(() => {
    dispatch(
      fetchGeneralSearchData({
        searchQuery: request_Query_first,
        whoSearchfor: "IncidentFirstFetch",
      }),
    );
  }, []);

  return (
    <>
      <IncidentPageComponent />
    </>
  );
}
