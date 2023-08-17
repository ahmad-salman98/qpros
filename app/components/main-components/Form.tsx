"use client";
import { useMyContext } from "@/app/Context/context";
import React from "react";
import BasicDatePicker from "../form-components/DatePicker";
import { DatePicker } from "@mui/x-date-pickers";
import AssignTo from "../form-components/AssignTo";
import Duration from "../form-components/Duration";
import TaskTime from "../form-components/TaskTime";
import Description from "../form-components/Description";
import Title from "../form-components/Title";

export default function Form() {
  const { pageNumber, setPageNumber } = useMyContext();
  return (
    <div className="p-[5%] col-span-12 lg:col-span-7 h-full">
      <p className="text-gray-400 ">{pageNumber} / 2</p>

      <h2 className="text-[20px] lg:text-[24px] mt-2 font-[500] ">
        Please fill with your Task details
      </h2>

      <form className="mt-5 grid grid-cols-12 gap-5 ">
        <Title />
        <input
          type="text"
          className="customizedInput col-span-12 lg:col-span-6"
          placeholder="Subtitle"
        />

        <Description />

        <h2 className="text-[20px] lg:text-[24px] mt-8 font-[500] col-span-12 ">
          Please fill with the request
        </h2>

        <div className="col-span-12 mds:col-span-6">
          <BasicDatePicker label="Start Date" />
        </div>
        <div className="col-span-12 mds:col-span-6">
          <BasicDatePicker label="Due Date" />
        </div>

        <TaskTime />
        <Duration />
        <AssignTo />
      </form>
    </div>
  );
}
