import { useMyContext } from "@/app/Context/context";
import React, { use, useState } from "react";

export default function Duration() {
  const { formData, setFormData, formErrors, setFormErrors } =
    useMyContext() as any;

  const handleChange = (value: string): void => {
    const regex = /^[0-9]*$/;
    if (
      (regex.test(value) && parseInt(value) <= 30 && parseInt(value) >= 0) ||
      value == ""
    ) {
      setFormData({ ...formData, duration: value });
      setFormErrors({ ...formErrors, duration: "" });
    } else
      setFormErrors({
        ...formErrors,
        duration: "Duration must be between 0 and 30.",
      });
  };

  const handlePlusMinus = (operation: string): void => {
    if (formData.duration > 0 && operation === "--") {
      setFormData({
        ...formData,
        duration: --formData.duration,
      });
      setFormErrors({ ...formErrors, duration: "" });
    } else if (formData.duration < 30 && operation === "++") {
      setFormData({
        ...formData,
        duration: ++formData.duration,
      });
      setFormErrors({ ...formErrors, duration: "" });
    } else
      setFormErrors({
        ...formErrors,
        duration: "Duration must be between 0 and 30.",
      });
  };

  return (
    <div className="relative col-span-12 mds:col-span-6 ">
      <div className="absolute inset-y-0 right-0 flex justify-end items-center gap-5 px-5 text-lg text-[rgb(147,147,147)]">
        <button type="button" onClick={() => handlePlusMinus("++")}>
          +
        </button>
        <button type="button" onClick={() => handlePlusMinus("--")}>
          -
        </button>
      </div>
      <input
        type="text"
        className="customizedInput  w-full"
        placeholder="Duaration/h"
        value={formData?.duration}
        onChange={(e) => handleChange(e.target.value)}
      />
      {formErrors.duration && (
        <small className="absolute -bottom-4 text-red-600 w-full left-1 text-xs">
          {formErrors?.duration}
        </small>
      )}
    </div>
  );
}
