"use client";

import { useMyContext } from "./Context/context";
import CreateTask from "./components/main-components/CreateTask";
import Form from "./components/main-components/Form";
import Summary from "./components/main-components/Summary";

export default function Home() {
  const { pageNumber } = useMyContext();
  return (
    <div className="grid grid-cols-12 h-fitlg:h-full min-h-screen gap-5 lg:px-10">
      <CreateTask />
      {pageNumber == 1 ? <Form /> : <Summary />}
    </div>
  );
}
