import { TodoProvider } from "./context/todoContext";
import { Todos } from "./components/Todos";
import { Filter } from "./components/Filter";
import { ProgressBox } from "./components/ProgressBox";
import { TodoEditor } from "./components/TodoEditor";
import classes from "./App.module.css";

function App() {
  return (
    <TodoProvider>
      <div className={classes.todoContainer}>
        <ProgressBox />
        <h1>Tasks</h1>
        <Filter />
        <Todos />
        <TodoEditor todo={null} />
      </div>
    </TodoProvider>
  );
}

export default App;
