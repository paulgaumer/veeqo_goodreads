import React, { Dispatch, useReducer } from "react";
import { Actions, initialState, IState, reducer } from "./reducer";

// TYPES
interface IContextProps {
  state: IState;
  dispatch: Dispatch<Actions>;
}
interface IContextStoreProviderProps {
  children: React.ReactNode;
}

export const ContextStore = React.createContext({} as IContextProps);

export const ContextStoreProvider = ({ children }: IContextStoreProviderProps) => {
  // The "state" here matches the initialState, until it is changed by the result of the reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <ContextStore.Provider value={value}>
      {children}
    </ContextStore.Provider>
  );
};
