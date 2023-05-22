import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { ITodo, TodoContextType } from "../@types/@types.todo";
import { Todo } from "./Todo";
import classes from "./Todos.module.css";

export const Todos = () => {
  const { todos, filter } = useContext(TodoContext) as TodoContextType;

  return (
    <>
      {todos && todos.length > 0 && (
        <ul className={classes.todos}>
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
