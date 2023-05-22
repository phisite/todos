import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ITodo, TodoContextType } from "../@types/@types.todo";

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider: React.FunctionComponent<
  React.PropsWithChildren<unknown>
> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[] | null>(null);
  const [filter, setFilter] = useState<"all" | "done" | "undone">("all");

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err.message));
  }, []);

  const toggleTodo = (id: string) => {
    if (todos) {
      const newTodos = todos?.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      setTodos(newTodos);
    }
  };

  const deleteTodo = (id: string) => {
    if (todos) {
      setTodos(todos?.filter((todo) => todo.id !== id));
    }
  };

  const addTodo = (title: string) => {
    const newTodo = { id: uuidv4(), title, completed: false };
    if (todos) {
      setTodos([...todos, newTodo]);
    } else {
      setTodos([newTodo]);
    }
  };

  return (
    <TodoContext.Provider
      value={{ todos, filter, setFilter, toggleTodo, deleteTodo, addTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
