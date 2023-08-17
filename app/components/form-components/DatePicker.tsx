import React, { useState, useEffect } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useMyContext } from "@/app/Context/context";
import dayjs from "dayjs";

export default function BasicDatePicker({ label }: { label: string }) {
  const { formData, setFormData, formErrors, setFormErrors } = useMyContext();
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

    // Disable dates before today's date
    return date.isBefore(today, "day");
  };

  const handleChange = (e: any) => {
    if (label === "Due Date") {
      setFormData({ ...formData, dueDate: e });
    }

    if (label === "Start Date") {
      setFormData({ ...formData, startDate: e });
    }
  };

  useEffect(() => {
    const diff = dayjs(dueDate).diff(startDate, "day");
    if (!isNaN(diff)) {
      setFormErrors({
        ...formErrors,
        dueDate:
          diff > 5 ? ` Due date can be 5 days after start date at most ` : "",
      });
    }
  }, [startDate, dueDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
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
