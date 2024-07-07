import React, { ReactNode, createContext, useReducer } from 'react';
import { Denial, DenialContextType } from '../reducers/types';
import { ADD_DENIAL, denialReducer } from '../reducers';

export const DenialContext = createContext<DenialContextType>({
  todos: [],
  addTodo: () => { },
});

interface DenialContextProviderProps {
  children: ReactNode
}

export function DenialContextProvider({ children }: DenialContextProviderProps) {

  const [todos, dispatch] = useReducer(denialReducer, []);

  function addTodo(todo: Denial) {
    dispatch({ type: ADD_DENIAL, payload: todo });
  };

  return (
    <DenialContext.Provider
      value={{
        todos,
        addTodo
      }}>
      {children}
    </DenialContext.Provider>
  );
};

