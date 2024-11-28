const initialState = {
  books: [],
  loading: false,
  error: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_SUCCESS':
      return { ...state, books: action.payload, loading: false, error: null };
    case 'ADD_BOOK_SUCCESS':
      return { ...state, books: [...state.books, action.payload] };
    case 'UPDATE_BOOK_SUCCESS':
      return {...state,books: state.books.map((book) =>book.id === action.payload.id ? action.payload : book)};
    case 'DELETE_BOOK_SUCCESS':
      return {...state,books: state.books.filter((book) => book.id !== action.payload)};
      
    case 'FETCH_BOOKS_FAILURE':
      return { ...state, error: action.payload, loading: false };
    case 'ADD_BOOK_FAILURE':
      return { ...state, error: action.payload };
    case 'UPDATE_BOOK_FAILURE':
      return { ...state, error: action.payload };
    case 'DELETE_BOOK_FAILURE':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default bookReducer;
