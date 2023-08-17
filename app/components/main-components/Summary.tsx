"use client";
import { useMyContext } from "@/app/Context/context";
import React, { ReactNode } from "react";

export default function Summary() {
  const { formData } = useMyContext();
  return (
    <div className="p-[5%] col-span-12 lg:col-span-7 h-fit w-full lg:m-auto">
      <h2 className="text-[20px] lg:text-[24px]   font-[500] ">Task Summary</h2>
      <hr className="mt-2 mb-4" />

      <div className="grid grid-cols-12 gap-5   ">
        <div className="col-span-12 sm:col-span-6 ">
          <strong>Title :</strong> {formData.title}
        </div>
        <div className="col-span-12 sm:col-span-6 ">
          <strong>Sub Title :</strong> {formData.subTitle}
        </div>
        <div className="col-span-12 sm:col-span-6 ">
          <strong>Start Date :</strong>{" "}
          {formData.startDate.format("DD-MM-YYYY")}
        </div>

        <div className="col-span-12 sm:col-span-6 ">
          <strong>Description :</strong> {formData.description}
        </div>
        <div className="col-span-12 sm:col-span-6 ">
          <strong>Due Date :</strong> {formData.dueDate.format("DD-MM-YYYY")}
        </div>
        <div className="col-span-12 sm:col-span-6 ">
          <strong>Task Time :</strong> {formData.taskTime}
        </div>
        <div className="col-span-12 sm:col-span-6 ">
          <strong>Task Duration :</strong> {formData.duration} hours
        </div>
        <div className="col-span-12 sm:col-span-6 ">
          <strong>User :</strong>
          {formData.user.name}
        </div>
      </div>
    </div>
  );
}
