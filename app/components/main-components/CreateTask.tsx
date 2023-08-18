import { useMyContext } from "@/app/Context/context";
import React from "react";

export default function CreateTask() {
  const { pageNumber } = useMyContext();
  return (
    <div className=" col-span-12 lg:col-span-5 bg-[#30bcb4] flex flex-col gap-5 justify-center items-center p-[5%] ">
      <h1 className="text-white font-[500] text-[24px] lg:text-[32px] ">
        {pageNumber == 1 ? "Create Task " : "Thank You!"}
      </h1>

      <p className="text-white text-center">
        {pageNumber == 1
          ? " Welcome to the task creation page. Here, you can create a new task and        manage its details. Please provide the necessary information to get        started. Make sure to fill in all the required fields and provide a        clear description of the task's objectives. Once you're satisfied with        the information provided, click the 'Submit' button to add it to your        task list. Thank you for using our task management system. We're here to        help you stay productive and on top of your responsibilities. Happy        tasking!"
          : "Form was submitted successfully"}
      </p>
    </div>
  );
}
