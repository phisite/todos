import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { ITodo, TodoContextType } from "../@types/@types.todo";

export const Todos = () => {
  const { todos } = useContext(TodoContext) as TodoContextType;

  return (
    <>
      {todos && todos.length > 0 && (
        <ul>
          {todos.map((todo: ITodo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};
