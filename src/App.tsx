import { TodoProvider } from "./context/todoContext";
import { Todos } from "./components/Todos";

function App() {
  return (
    <TodoProvider>
      <h1>Tasks</h1>
      <Todos />
    </TodoProvider>
  );
}

export default App;
