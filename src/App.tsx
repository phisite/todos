import { useEffect, useState } from "react";

interface TodoI {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoI[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <h1>Tasks</h1>
      {todos && todos.length > 0 && (
        <ul>
          {todos.map((todo: TodoI) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
