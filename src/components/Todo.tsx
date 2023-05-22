import { ITodo } from "../@types/@types.todo";

export const Todo = ({ todo }: { todo: ITodo }) => (
  <li>
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
);
