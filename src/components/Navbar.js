import 'bootstrap/dist/css/bootstrap.min.css';
import AddBookModal from './AddBookModal';
import React, { useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Link} from 'react-router-dom';
import {fetchBooks} from './../redux/actions/bookActions';
import {FeedPlusIcon} from '@primer/octicons-react'

function Navbar({ show, handleClose, handleAdd }) {
  const dispatch = useDispatch();
  const [showAddModal, setShowAddModal] = useState(false);
  
  const {books, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="">
          <img
            src={require('../assets/book-logo.png')}
            alt="Logo"
            className="me-2"
            style={{ width: '60px', height: '40px' }}
          />
          <h2><strong>Books Management</strong></h2>
        </a>
        <div>
          <Link to="" className="btn btn-outline-primary me-2" onClick={() => setShowAddModal(true)}><FeedPlusIcon size={16} /> Add New Book</Link>
        </div>
        <AddBookModal show={showAddModal} handleClose={() => setShowAddModal(false)} handleAdd={handleAdd} />
      </div>
    </nav>
  );
}

export default Navbar;
