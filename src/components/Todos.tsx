import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { ITodo, TodoContextType } from "../@types/@types.todo";

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
              <li key={todo.id}>
                <span
                  style={
                    todo.completed
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                >
                  {todo.title}
                </span>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};
