import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";
import React from "react";
import { useMyContext } from "@/app/Context/context";

export default function TaskTime() {
  const { formData, setFormData } = useMyContext();
  return (
    <div className="col-span-12 mds:col-span-6">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileTimePicker
          format="h:mm a"
          defaultValue={dayjs("2022-04-17T15:30")}
          sx={{ width: "100%", height: "100%" }}
          onChange={(e) =>
            setFormData({ ...formData, taskTime: e?.format("h:mm A") })
          }
        />
      </LocalizationProvider>
    </div>
  );
}
