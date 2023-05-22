import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { TodoContextType } from "../@types/@types.todo";
import classes from "./ProgressBox.module.css";

export const ProgressBox = () => {
  const { todos } = useContext(TodoContext) as TodoContextType;

  const progressPercentage =
    todos && todos?.length > 0
      ? Math.round(
          (100 * todos?.filter((todo) => todo.completed).length) / todos?.length
        )
      : 0;

  return (
    <div className={classes.progressBox}>
      {/* <label htmlFor="progress-bar" className={classes.progressLabel}>
        Progress
      </label>
      <progress
        id="progress-bar"
        max={todos?.length}
        value={todos?.filter((todo) => todo.completed).length}
      >
        {todos?.filter((todo) => todo.completed).length} completed
      </progress> */}
      <h2 className={classes.progressLabel}>Progress</h2>
      <div className={classes.progressBar}>
        <div
          className={classes.value}
          style={{ width: progressPercentage + "%" }}
        ></div>
      </div>
      <small className={classes.progressText}>
        {todos?.filter((todo) => todo.completed).length} completed
      </small>
    </div>
  );
};
