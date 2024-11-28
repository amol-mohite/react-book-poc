import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {fetchBooks} from './../redux/actions/bookActions';

function AddBookModal({ show, handleClose, handleAdd }) {
 
  const [book, setBook] = useState({ title: '', author: '', description: '', published_date: '' });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = () => {
    handleAdd(book);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formAuthor" className="mt-2">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" name="author" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formDescription" className="mt-2">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formPublishDate" className="mt-2">
            <Form.Label>Published Date</Form.Label>
            <Form.Control type="date" name="published_date" onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="primary" onClick={handleSubmit}>Add Book</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddBookModal;
