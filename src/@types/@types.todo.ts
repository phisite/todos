export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export type TodoContextType = {
  todos: ITodo[] | null;
};
