import { useState, useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { ITodo, TodoContextType } from "../@types/@types.todo";
import classes from "./TodoEditor.module.css";

export const TodoEditor = ({ todo }: { todo: ITodo | null }) => {
  const { addTodo, editTodo } = useContext(TodoContext) as TodoContextType;
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
      if (todo) {
        editTodo(todo.id, target.todoTitle.value);
      } else {
        addTodo(target.todoTitle.value);
        target.todoTitle.value = "";
      }
    }
    toggleEditedFlag(false);
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
        defaultValue={todo?.title}
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
