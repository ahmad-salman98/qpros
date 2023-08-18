"use client";

import { number, object, string } from "prop-types";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type MyContextType = {
  formData: object;
  formErrors: object;
  setFormData: Dispatch<SetStateAction<object>>;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
  setFormErrors: Dispatch<SetStateAction<object>>;
};

const MyContextDefaultValues: MyContextType = {
  formData: {
    title: string,
    subTitle: string,
    description: string,
    startDate: string,
    dueDate: string,
    taskTime: number,
    duration: number,
    user: object,
  },
  formErrors: {
    title: string,
    description: string,
    startDate: string,
    dueDate: string,
    duration: number,
  },
  pageNumber: 1,
  setFormData: () => {},
  setPageNumber: () => {},
  setFormErrors: () => {},
};

const MyContext = createContext<MyContextType>(MyContextDefaultValues);

export function useMyContext() {
  return useContext(MyContext);
}

type Props = {
  children: ReactNode;
};

export function MyProvider({ children }: Props) {
  const [formData, setFormData] = useState<object>({
    title: "",
    subTitle: "",
    description: "",
    startDate: "",
    dueDate: "",
    taskTime: 0,
    duration: 0,
    user: object,
  });

  const [formErrors, setFormErrors] = useState<object>({
    title: "",
    description: "",
    startDate: "",
    dueDate: "",
    duration: "",
  });
  const [pageNumber, setPageNumber] = useState<number>(1);

  const value = {
    formData,
    setFormData,
    pageNumber,
    setPageNumber,
    formErrors,
    setFormErrors,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
