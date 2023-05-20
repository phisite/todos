import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { TodoContextType } from "../@types/@types.todo";

export const Filter = () => {
  const { filter, setFilter } = useContext(TodoContext) as TodoContextType;

  return (
    <select
      defaultValue="all"
      onChange={(e) => setFilter(e.target.value as typeof filter)}
    >
      <option value="all">All</option>
      <option value="done">Done</option>
      <option value="undone">Undone</option>
    </select>
  );
};
