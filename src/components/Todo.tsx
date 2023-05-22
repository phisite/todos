import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { ITodo, TodoContextType } from "../@types/@types.todo";
import classes from "./Todo.module.css";

export const Todo = ({ todo }: { todo: ITodo }) => {
  const { toggleTodo } = useContext(TodoContext) as TodoContextType;

  return (
    <li className={classes.todo}>
      <input
        id={`checkbox-${todo.id}`}
        name={`checkbox-${todo.id}`}
        onChange={() => toggleTodo(todo.id)}
        type="checkbox"
        checked={todo.completed}
        className={classes.checkbox}
      />
      <label
        htmlFor={`checkbox-${todo.id}`}
        className={`${classes.todoText} ${
          todo.completed ? classes.completedText : ""
        }`}
      >
        {todo.title}
      </label>
      <button className={classes.dropdownToggler}>
        <span className={classes.srOnly}>Action</span>
      </button>
    </li>
  );
};
