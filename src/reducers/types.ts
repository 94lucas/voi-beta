
export type Denial = {
  id: number;
  description: string;
  priority: string;
  initialDate: string;
  importancy: string;
  // Outros atributos do Todo
}

export type DenialContextType = {
  todos: Denial[];
  addTodo: (todo: Denial) => void;
}