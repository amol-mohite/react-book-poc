import axios from 'axios';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {PencilIcon,TrashIcon} from '@primer/octicons-react'
import React, { useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import AddBookModal from './components/AddBookModal';
import EditBookModal from './components/EditBookModal';
import ConfirmDeleteModal from './components/ConfirmDeleteModal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchBooks, addBook, updateBook, deleteBook } from './redux/actions/bookActions';

function App() {
  const dispatch = useDispatch();
  const {books, error } = useSelector((state) => state.books);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);


  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleAdd = async (newBook) => {
    try {
      dispatch(addBook(newBook));
    } catch (error) {
      console.error("Error adding book:", error);
    }
    setShowAddModal(false);
  };

  const handleEdit = async (updatedBook) => {
    try {
      dispatch(updateBook(updatedBook.id, updatedBook));
    } catch (error) {
      console.error("Error editing book:", error);
    }
    setShowEditModal(false);
  };

  const handleDelete = async () => {
    try {
      dispatch(deleteBook(selectedBook.id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
    setShowDeleteModal(false);
  };

  
  return (
    <Router>
      <div className="App">
        <Navbar/> 
        <div className="container mt-4">
          <h2>Books</h2>
          <ul className="list-group">
            {books.map((book) => (
              <li 
                key={book.id}
                className={'list-group-item list-group-item-action list-group-item-primary'}
                style={{cursor: 'pointer', marginBottom: '10px'}}>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>{book.title}</h5>
                    <p>{book.author}</p>
                    <p><strong>Published Date:</strong> {new Date(book.published_date).toLocaleDateString()}<br/></p>
                    <p>{book.description}</p>
                    <button className="btn btn-warning m-2" onClick={() => {setSelectedBook(book);setShowEditModal(true);}}><PencilIcon size={16}/> Edit</button>
                    <button className="btn btn-danger m-2" onClick={() => {setSelectedBook(book);setShowDeleteModal(true);}}><TrashIcon size={16}/> Delete</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <EditBookModal show={showEditModal} handleClose={() => setShowEditModal(false)} handleEdit={handleEdit} bookToEdit={selectedBook} />
        <ConfirmDeleteModal show={showDeleteModal} handleClose={() => setShowDeleteModal(false)} handleDelete={handleDelete} bookTitle={selectedBook?.title} />
      </div>
    </Router>
  );
}

export default App;