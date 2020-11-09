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
    status: number
  }
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
  }
};

export const reducer = (state: IState, action: Actions) => {
  switch (action.type) {
    case "SET_BOOKS":
      return { ...state, bookSearch: action.payload.bookSearch, api: action.payload.api };
    case "SET_AUTHOR":
      return { ...state, author: action.payload };
  }
};