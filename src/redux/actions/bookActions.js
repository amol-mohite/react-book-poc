import axios from 'axios';
const API_BASE_URL = 'http://localhost:3000';

export const fetchBooks = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/books`);
    dispatch({ type: 'FETCH_BOOKS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_BOOKS_FAILURE', payload: error.message });
  }
};

export const addBook = (book) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/v1/books`, book);
    dispatch({ type: 'ADD_BOOK_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_BOOK_FAILURE', payload: error.message });
  }
};

export const updateBook = (id, book) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/api/v1/books/${id}`, book);
    dispatch({ type: 'UPDATE_BOOK_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_BOOK_FAILURE', payload: error.message });
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_BASE_URL}/api/v1/books/${id}`);
    dispatch({ type: 'DELETE_BOOK_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_BOOK_FAILURE', payload: error.message });
  }
};
