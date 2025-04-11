import AddTask from "@/components/AddTask";
import ToDoList from "@/components/ToDoList";

export default function Home() {
  return (
    <main className="   max-w-5xl mx-auto">
      <div className="text-center flex flex-col gap-5">
        <h1 className="text-2xl font-bold">To Do List App</h1>
        <AddTask />
      </div>
      <div className=" mx-auto w-[40%] mt-5">
        <ToDoList />
      </div>
    </main>
  );
}
