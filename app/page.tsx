import CreateTask from "./components/main-components/CreateTask";
import Form from "./components/main-components/Form";

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-fitlg:h-full min-h-screen gap-5 lg:px-10">
      <CreateTask />
      <Form />
    </div>
  );
}
