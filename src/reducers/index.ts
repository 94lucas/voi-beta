import { Denial } from "./types";

export const ADD_DENIAL = 'ADD_DENIAL';

export const denialReducer = (state: Denial[], action: { type: string; payload: Denial }): Denial[] => {
  switch (action.type) {
    case ADD_DENIAL:
      return [...state, action.payload];
    default:
      return state;
  }
};