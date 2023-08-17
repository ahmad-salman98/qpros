import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";
import React from "react";

export default function TaskTime() {
  return (
    <div className="col-span-12 mds:col-span-6">
      {/* <input
        type="text"
        className="customizedInput w-full  mt-1"
        placeholder="Task Time"
      /> */}

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileTimePicker
          defaultValue={dayjs("2022-04-17T15:30")}
          sx={{ width: "100%", height: "100%" }}
          onChange={(e) => console.log(e)}
        />
      </LocalizationProvider>
    </div>
  );
}
