import { createContext, useEffect, useState } from "react";
import { ITodo, TodoContextType } from "../@types/@types.todo";

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider: React.FunctionComponent<
  React.PropsWithChildren<unknown>
> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
  );
};
