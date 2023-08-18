import { useMyContext } from "@/app/Context/context";
import Arrow from "@/app/assets/arrows/Arrow";
import React from "react";
import { toast } from "react-toastify";

export default function SubmitForm() {
  const { formErrors, formData, setPageNumber } = useMyContext() as any;
  const handleSubmit = () => {
    let shouldSubmit = true;
    for (const key in formData) {
      if (!formData[key]) {
        shouldSubmit = false;
        toast.error(key + " is required");
      }
    }

    for (const key in formErrors) {
      if (formErrors[key]) {
        shouldSubmit = false;
        toast.error(formErrors[key]);
      }
    }
    if (shouldSubmit) {
      toast.success("Form Submitted Successfully");
      setPageNumber(2);
    }
  };
  return (
    <div className="col-span-12 flex justify-end">
      <button
        type="button"
        className="flex justify-center p-2 pl-5 pr-4  items-center bg-[#e9245f] text-white rounded-md"
        onClick={handleSubmit}
      >
        Submit <Arrow color="#ffffff" />
      </button>
    </div>
  );
}
