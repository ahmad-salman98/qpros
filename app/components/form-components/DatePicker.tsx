import React, { useState, useEffect } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useMyContext } from "@/app/Context/context";
import dayjs from "dayjs";

export default function BasicDatePicker({ label }: { label: string }) {
  const { formData, setFormData } = useMyContext();
  const { startDate, dueDate } = formData;

  const handleDisable = (date) => {
    const today = dayjs(); // Get today's date

    if (label === "Due Date" && !!startDate) {
      const daysFromStart = dayjs(date).diff(startDate, "day");

      // Disable dates before startDate, after dueDate, and before today's date
      return (
        daysFromStart >= 6 || daysFromStart < 0 || date.isBefore(today, "day")
      );
    }

    if (label === "Start Date" && !!dueDate) {
      const daysFromDue = dayjs(date).diff(dueDate, "day");

      // Disable dates before startDate, after dueDate, and before today's date
      return (
        daysFromDue <= -6 || daysFromDue > 0 || date.isBefore(today, "day")
      );
    }

    // Disable dates before today's date
    return date.isBefore(today, "day");
  };

  const handleChange = (e) => {
    if (label === "Due Date") {
      setFormData({ ...formData, dueDate: e });
    }

    if (label === "Start Date") {
      setFormData({ ...formData, startDate: e });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]} sx={{}}>
        <DatePicker
          shouldDisableDate={handleDisable}
          label={label}
          sx={{
            width: "100%",
          }}
          onChange={(e) => handleChange(e)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
