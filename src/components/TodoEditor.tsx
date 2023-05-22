import classes from "./TodoEditor.module.css";

export const TodoEditor = () => {
  return (
    <div className={classes.editor}>
      <input
        type="text"
        name=""
        id=""
        className={classes.editorInput}
        placeholder="Add your todo..."
        autoComplete="off"
      />
      <button type="submit" className={classes.editorSubmit}>
        Save
      </button>
    </div>
  );
};
