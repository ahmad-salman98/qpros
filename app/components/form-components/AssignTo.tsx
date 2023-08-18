import DownArrow from "@/app/assets/arrows/Arrow";
import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { useMyContext } from "@/app/Context/context";

export default function AssignTo() {
  //   -------------------- Types --------------------

  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }

  type FetchedUserData = User[];

  //   -------------------- States --------------------
  const [users, setUsers] = useState<FetchedUserData>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //   -------------------- Variables --------------------
  const { formData, setFormData } = useMyContext() as any;

  //   -------------------- Functions --------------------
  const getUsers = async (): Promise<FetchedUserData> => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    return data;
  };
  const handleSelect = ({ user }: { user: User }): void => {
    setFormData({ ...formData, user: user });
  };

  //   -------------------- Components --------------------

  const SelectUser = () => {
    return isOpen
      ? users.map((user) => {
          return (
            <div
              className="col-span-12 hover:bg-[#e5e7eb70] z-10 p-2 -ml-2"
              onClick={(e) => handleSelect({ user })}
            >
              {user.name}
            </div>
          );
        })
      : null;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className={`customizedInput col-span-12 relative cursor-pointer h-[auto!important] outline-none`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`text-[rgb(147,147,147)] cursor-pointer text-[14px] ${
          isOpen ? "border-b pb-2" : ""
        } `}
      >
        {<p className="text-black">Assigned To: {formData.user.name}</p> ||
          "Assigned To"}
      </div>
      <div className="absolute inset-0 flex justify-end p-2  ">
        <DownArrow
          className={`${isOpen ? "-rotate-90" : "rotate-90"} duration-200`}
        />
      </div>

      <div className="grid grid-cols-12 max-h-52 overflow-y-scroll overflow-x-hidden">
        <SelectUser />
      </div>
    </div>
  );
}
