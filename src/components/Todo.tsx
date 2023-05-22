import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";
import { ITodo, TodoContextType } from "../@types/@types.todo";
import classes from "./Todo.module.css";
import { TodoEditor } from "./TodoEditor";

export const Todo = ({ todo }: { todo: ITodo }) => {
  const { toggleTodo, deleteTodo } = useContext(TodoContext) as TodoContextType;
  const [dropdownFlag, toggleDropdownFlag] = useState(false);
  const [editorFlag, toggleEditorFlag] = useState(false);

  const handleEditClick = () => {
    toggleEditorFlag(true);
    toggleDropdownFlag(false);
  };

  const handleDeleteClick = (id: string) => {
    deleteTodo(id);
    toggleDropdownFlag(false);
  };

  return (
    <li className={classes.todo}>
      <div className={editorFlag ? classes.hidden : classes.todoEntry}>
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
                <button
                  className={classes.dropdownSelector}
                  onClick={() => handleEditClick()}
                >
                  Edit
                </button>
              </li>
              <li>
                <button
                  className={`${classes.dropdownSelector} ${classes.dangerText}`}
                  onClick={() => handleDeleteClick(todo.id)}
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={editorFlag ? "" : classes.hidden}>
        <TodoEditor todo={todo} toggleEditorFlag={toggleEditorFlag} />
      </div>
    </li>
  );
};
