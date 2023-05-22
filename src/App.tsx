import { TodoProvider } from "./context/todoContext";
import { Todos } from "./components/Todos";
import { Filter } from "./components/Filter";
import { ProgressBox } from "./components/ProgressBox";

function App() {
  return (
    <TodoProvider>
      <ProgressBox />
      <h1>Tasks</h1>
      <Filter />
      <Todos />
    </TodoProvider>
  );
}

export default App;
