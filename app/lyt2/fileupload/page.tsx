"use client";
import React, { useState } from "react";
import axios from "axios";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import { BaseURL } from "@/lib/DefaultData/BaseURLs";
import StatusDetailsComponent from "./StatusDetailsComponent";

export default function FileUpload() {
  const [selectedRequestFile, setSelectedRequestFile] = useState<
    File | undefined
  >(undefined);

  const [selectedIncidentFile, setSelectedIncidentFile] = useState<
    File | undefined
  >(undefined);

  const handleRequestFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (
      event?.target?.files?.length != undefined &&
      event?.target?.files?.length > 0
    ) {
      setSelectedRequestFile(event?.target?.files[0]);
    }
  };
  const handleIncidentFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (
      event?.target?.files?.length != undefined &&
      event?.target?.files?.length > 0
    ) {
      setSelectedIncidentFile(event?.target?.files[0]);
    }
  };
  const handleSubmitRequest = async (
    event: React.ChangeEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!selectedRequestFile) {
      alert("Please select a file");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedRequestFile);

      const response = await axios.post(
        `${BaseURL}/api/Files/UploadRequestFile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log("File uploaded successfully:", response.data);
      console.log(response.data.success);
      if (response.data.success !== "") {
        alert(response.data.success);
      }
      if (response.data.error !== "") {
        alert(response.data.error);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert(error);
    }
  };
  const handleSubmitIncidentFile = async (
    event: React.ChangeEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!selectedIncidentFile) {
      alert("Please select a file");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedIncidentFile);

      const response = await axios.post(
        `${BaseURL}/api/Files/UploadIncidentFile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log("File uploaded successfully:", response.data);
      console.log(response.data.success);
      if (response.data.success !== "") {
        alert(response.data.success);
      }
      if (response.data.error !== "") {
        alert(response.data.error);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert(error);
    }
  };

  // const olddesign = (
  //   <div>
  //     <h2>File Upload</h2>
  //     <form onSubmit={handleSubmitRequest}>
  //       <input type="file" onChange={handleRequestFileChange} />
  //       <button type="submit">Upload</button>
  //     </form>
  //   </div>
  // );

  const tabnames: string[] = [
    "Incident file upload",
    "Request file upload",
    // "Running background service status",
  ];
  return (
    <>
      <div className="flex flex-col items-center">
        <TabGroup className="mt-5">
          <div></div>
          <TabList className="mx-10 flex items-center justify-center gap-4">
            {tabnames.map((itm, index) => {
              return (
                <>
                  <Tab
                    key={index}
                    className="rounded-full bg-blue-600 px-3 py-1 text-sm/6 font-semibold text-white focus:outline-none data-[hover]:bg-purple-500 data-[selected]:bg-purple-600 data-[selected]:data-[hover]:bg-purple-500 data-[focus]:outline-1 data-[focus]:outline-white"
                  >
                    {itm}
                  </Tab>
                </>
              );
            })}
          </TabList>
          <TabPanels className="mt-3 flex w-full flex-row">
            <TabPanel className="flex max-h-full w-full justify-center">
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <Image
                    src={"/images/baner1.jpg"}
                    alt="baner"
                    width={400}
                    height={150}
                    className=""
                  ></Image>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Upload Incident File</h2>
                  <p>File format should be xlsx</p>
                  <form onSubmit={handleSubmitIncidentFile}>
                    <input
                      type="file"
                      onChange={handleIncidentFileChange}
                      className="file-input file-input-bordered file-input-primary h-8 w-full max-w-xs"
                    />

                    <div className="mt-3 flex justify-end">
                      <div className="card-actions justify-end">
                        <button
                          type="submit"
                          className="btn btn-primary btn-sm"
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="flex max-h-full w-full justify-center">
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <Image
                    src={"/images/baner2.jpg"}
                    alt="baner"
                    width={400}
                    height={150}
                    className=""
                  ></Image>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Upload Request File</h2>
                  <p>File format should be xlsx</p>
                  <form onSubmit={handleSubmitRequest}>
                    <input
                      type="file"
                      onChange={handleRequestFileChange}
                      className="file-input file-input-bordered file-input-primary h-8 w-full max-w-xs"
                    />

                    <div className="mt-3 flex justify-end">
                      <div className="card-actions justify-end">
                        <button
                          type="submit"
                          className="btn btn-primary btn-sm"
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </TabPanel>

            <TabPanel className="flex max-h-full w-full">
              <div className="flex w-full flex-col">
                <div className="flex min-w-full grow flex-row justify-between py-2">
                  <div className="h-3 w-3"></div>
                  <div className="btn btn-primary btn-sm">Refresh</div>
                </div>
                <StatusDetailsComponent />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </>
  );
  return (
    <TabGroup className="mt-5">
      <div></div>
      <TabList className="mx-10 flex gap-4">
        {tabnames.map((itm) => {
          return (
            <>
              <Tab
                key={itm}
                className="rounded-full bg-blue-600 px-3 py-1 text-sm/6 font-semibold text-white focus:outline-none data-[hover]:bg-purple-500 data-[selected]:bg-purple-600 data-[selected]:data-[hover]:bg-purple-500 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {itm}
              </Tab>
            </>
          );
        })}
      </TabList>
      <TabPanels className="h-full bg-slate-400 px-5">
        <TabPanel className="">Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
