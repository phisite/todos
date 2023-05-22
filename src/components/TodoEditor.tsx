import { useState, useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { TodoContextType } from "../@types/@types.todo";
import classes from "./TodoEditor.module.css";

export const TodoEditor = () => {
  const { addTodo } = useContext(TodoContext) as TodoContextType;
  const [editedFlag, toggleEditedFlag] = useState(false);

  const handleTodoTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    e.target.value.length > 0
      ? toggleEditedFlag(true)
      : toggleEditedFlag(false);
  };

  const handleEditorSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      todoTitle: { value: string };
    };
    // console.log(target.todoTitle.value);
    if (target.todoTitle.value.length > 0) {
      addTodo(target.todoTitle.value);
    }
    toggleEditedFlag(false);
    target.todoTitle.value = "";
  };

  return (
    <form className={classes.editor} onSubmit={(e) => handleEditorSubmit(e)}>
      <input
        type="text"
        name="todoTitle"
        id="todoTitle"
        className={classes.editorInput}
        placeholder="Add your todo..."
        autoComplete="off"
        onChange={(e) => handleTodoTitleChange(e)}
      />
      <button
        type="submit"
        className={editedFlag ? classes.editorSubmit : classes.hidden}
      >
        Save
      </button>
    </form>
  );
};
