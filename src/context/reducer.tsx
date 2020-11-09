import { IAuthor } from "../types/author"
import { IBook } from "../types/book"

// TYPES
export interface IState {
  bookSearch: {
    search: {
      totalResults: number,
      activePage: number,
      totalPages: number,
      keyword: string,
      type: "title" | "author" | "isbn"
    }
    books: IBook[]
  };
  author: IAuthor | null
  api: {
    status: number,
  }
  firstInit: boolean
}

interface ISetBooks {
  type: "SET_BOOKS";
  payload: any;
}

interface ISetAuthor {
  type: "SET_AUTHOR";
  payload: any;
}
interface ISetFirstInit {
  type: "SET_FIRST_INIT";
  payload: boolean;
}

export type Actions = ISetBooks | ISetAuthor | ISetFirstInit;

export const initialState: IState = {
  bookSearch: {
    search: {
      totalResults: 0,
      activePage: 1,
      totalPages: 1,
      keyword: "",
      type: "title"
    },
    books: []
  },
  author: null,
  api: {
    status: 200
  },
  firstInit: true
};

export const reducer = (state: IState, action: Actions) => {
  switch (action.type) {
    case "SET_BOOKS":
      return { ...state, bookSearch: action.payload.bookSearch, api: action.payload.api };
    case "SET_AUTHOR":
      return { ...state, author: action.payload };
    case "SET_FIRST_INIT":
      return { ...state, firstInit: action.payload };
  }
};