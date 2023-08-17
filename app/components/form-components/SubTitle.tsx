import { useMyContext } from "@/app/Context/context";
import React, { useEffect, useState } from "react";

export default function Description() {
  const { formData, setFormData } = useMyContext();

  return (
    <div className="col-span-12 relative  lg:col-span-6 ">
      <input
        type="text"
        className="customizedInput w-full "
        placeholder="Sub Title"
        onChange={(e) => setFormData({ ...formData, subTitle: e.target.value })}
        value={formData.subTitle}
      />

      
    </div>
  );
}
