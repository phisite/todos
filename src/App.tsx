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
        <div className={classes.nav}>
          <h1>Tasks</h1>
          <Filter />
        </div>
        <Todos />
        <TodoEditor />
      </div>
    </TodoProvider>
  );
}

export default App;
