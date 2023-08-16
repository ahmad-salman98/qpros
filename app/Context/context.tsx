"use client";

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
  setFormData: Dispatch<SetStateAction<object>>;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
};

const MyContextDefaultValues: MyContextType = {
  formData: {},
  pageNumber: 1,
  setFormData: () => {},
  setPageNumber: () => {},
};

const MyContext = createContext<MyContextType>(MyContextDefaultValues);

export function useMyContext() {
  return useContext(MyContext);
}

type Props = {
  children: ReactNode;
};

export function MyProvider({ children }: Props) {
  const [formData, setFormData] = useState<object>({});
  const [pageNumber, setPageNumber] = useState<number>(1);

  const value = { formData, setFormData, pageNumber, setPageNumber };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
