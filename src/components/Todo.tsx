import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";
import { ITodo, TodoContextType } from "../@types/@types.todo";
import classes from "./Todo.module.css";

export const Todo = ({ todo }: { todo: ITodo }) => {
  const { toggleTodo } = useContext(TodoContext) as TodoContextType;
  const [dropdownFlag, toggleDropdownFlag] = useState(false);

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
      <div className={classes.dropdownContainer}>
        <button
          className={classes.dropdownToggler}
          onClick={() => toggleDropdownFlag(!dropdownFlag)}
        >
          <span className={classes.srOnly}>Action</span>
        </button>
        <div className={dropdownFlag ? classes.dropdown : classes.hidden}>
          <ul>
            <li>
              <button className={classes.dropdownSelector}>Edit</button>
            </li>
            <li>
              <button
                className={`${classes.dropdownSelector} ${classes.dangerText}`}
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};
