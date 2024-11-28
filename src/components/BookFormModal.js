import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function BookFormModal({ show, handleClose, handleSave, book = {} }) {
  const [formData, setFormData] = useState({
    title: book.title || '',
    author: book.author || '',
    description: book.description || '',
    publish_date: book.published_date || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    handleSave(formData); 
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{book.id ? 'Edit Book' : 'Add Book'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter book title"
            />
          </Form.Group>

          <Form.Group controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter author name"
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
            />
          </Form.Group>

          <Form.Group controlId="formPublishDate">
            <Form.Label>Publish Date</Form.Label>
            <Form.Control
              type="date" // HTML5 date picker
              name="publish_date"
              value={formData.publish_date}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookFormModal;
  