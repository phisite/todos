import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { ITodo, TodoContextType } from "../@types/@types.todo";
import { Todo } from "./Todo";

export const Todos = () => {
  const { todos, filter } = useContext(TodoContext) as TodoContextType;

  return (
    <>
      {todos && todos.length > 0 && (
        <ul>
          {todos
            .filter((todo: ITodo) => {
              switch (filter) {
                case "all":
                  return true;
                case "done":
                  return todo.completed;
                case "undone":
                  return !todo.completed;
                default:
                  break;
              }
            })
            .map((todo: ITodo) => (
              <Todo todo={todo} key={todo.id} />
            ))}
        </ul>
      )}
    </>
  );
};
