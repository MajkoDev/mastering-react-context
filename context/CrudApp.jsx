import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksProvider } from "./TasksContext.jsx";

const CrudApp = () => {
  return (
    <div className="container">
      <TasksProvider>
        <h1>CRUD App</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </div>
  );
};

export default CrudApp;
