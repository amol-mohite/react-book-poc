import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditBookModal({ show, handleClose, handleEdit, bookToEdit }) {
  const [book, setBook] = useState(bookToEdit);

  useEffect(() => {
    setBook(bookToEdit);
  }, [bookToEdit]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleEdit(book);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            {book && (<Form.Control type="text" name="title" value={book.title || ''} onChange={handleChange} />)}
          </Form.Group>
          <Form.Group controlId="formAuthor" className="mt-2">
            <Form.Label>Author</Form.Label>
            {book && (<Form.Control type="text" name="author" value={book.author || ''} onChange={handleChange} />)}
          </Form.Group>
          <Form.Group controlId="formDescription" className="mt-2">
            <Form.Label>Description</Form.Label>
            {book && (<Form.Control as="textarea" rows={3} name="description" value={book.description || ''} onChange={handleChange} />)}
          </Form.Group>
          <Form.Group controlId="formPublishedDate" className="mt-2">
            <Form.Label>Publish Date</Form.Label>
            {book && (<Form.Control type="date" rows={3} name="published_date" value={book.published_date || ''} onChange={handleChange} />)}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="primary" onClick={handleSubmit}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditBookModal;
