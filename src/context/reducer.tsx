// TYPES
export interface IState {
  books: any;
  author: any
}

interface ISetBooks {
  type: "SET_BOOKS";
  payload: any;
}

interface ISetAuthor {
  type: "SET_AUTHOR";
  payload: any;
}

export type Actions = ISetBooks | ISetAuthor;

export const initialState: IState = {
  books: [],
  author: null,
};

export const reducer = (state: IState, action: Actions) => {
  switch (action.type) {
    case "SET_BOOKS":
      return { ...state, books: action.payload };
    case "SET_AUTHOR":
      return { ...state, author: action.payload };
  }
};