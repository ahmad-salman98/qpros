import { useMyContext } from "@/app/Context/context";
import React, { useEffect, useState } from "react";

export default function Description() {
  const { formErrors, setFormErrors, formData, setFormData } = useMyContext();
  const handleChange = (e: object) => {
    if (e.target.value.length >= 3) {
      setFormErrors({
        ...formErrors,
        title: "",
      });
    } else
      setFormErrors({
        ...formErrors,
        title: "Title should containt at least 3 characters",
      });
  };

  useEffect(() => {
    console.log(formErrors);
  }, [formErrors]);

  return (
    <div className="col-span-12 relative  lg:col-span-6 ">
      <input
        type="text"
        className="customizedInput w-full "
        placeholder="Title"
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        onBlur={handleChange}
        value={formData.title}
      />

      {formErrors.title && (
        <small className="text-sx text-red-600 absolute min-w-max left-0 top-[42px]">
          {formErrors.title}
        </small>
      )}
    </div>
  );
}
