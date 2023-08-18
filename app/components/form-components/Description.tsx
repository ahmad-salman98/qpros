import { useMyContext } from "@/app/Context/context";
import React, { useState } from "react";

export default function Description() {
  const { formErrors, setFormErrors, formData, setFormData } = useMyContext();

  const handleChange = (e: object) => {
    if (e.target.value.length <= 150) {
      setFormData({ ...formData, description: e.target.value });
      setFormErrors({ ...formErrors, description: "" });
    } else
      setFormErrors({
        ...formErrors,
        description: "Description shouldn't exceed 150 characters",
      });
  };
  return (
    <div className="col-span-12 relative  ">
      <textarea
        className="customizedInput w-full bg-transparent z-10 h-[auto!important] relative "
        placeholder="Description"
        rows={5}
        onChange={handleChange}
        value={formData.description}
      />
      <div className="absolute text-xs text-[rgb(147,147,147)] inset-0 p-5 z-0 flex justify-end items-end  ">
        {formData.description.length + "/150"}
      </div>

      {formErrors.description && (
        <small className="text-sx text-red-600 absolute w-full left-0 -bottom-4">
          {formErrors.description}
        </small>
      )}
    </div>
  );
}
