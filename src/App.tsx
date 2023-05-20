import { TodoProvider } from "./context/todoContext";
import { Todos } from "./components/Todos";
import { Filter } from "./components/Filter";

function App() {
  return (
    <TodoProvider>
      <h1>Tasks</h1>
      <Filter />
      <Todos />
    </TodoProvider>
  );
}

export default App;
