import { ITodo } from "../@types/@types.todo";
import classes from "./Todo.module.css";

export const Todo = ({ todo }: { todo: ITodo }) => (
  <li className={classes.todo}>
    <input
      id={`checkbox-${todo.id}`}
      name={`checkbox-${todo.id}`}
      // onChange={() => {}}
      type="checkbox"
      // checked={todo.completed}
      className={classes.checkbox}
    />
    <label
      htmlFor={`checkbox-${todo.id}`}
      className={todo.completed ? classes.completedText : ""}
    >
      {todo.title}
    </label>
  </li>
);
