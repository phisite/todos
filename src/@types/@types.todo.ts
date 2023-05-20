export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export type TodoContextType = {
  todos: ITodo[] | null;
  filter: "all" | "done" | "undone";
  setFilter: (filter: "all" | "done" | "undone") => void;
};
