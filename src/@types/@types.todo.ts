export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoContextType = {
  todos: ITodo[] | null;
  filter: "all" | "done" | "undone";
  setFilter: (filter: "all" | "done" | "undone") => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};
