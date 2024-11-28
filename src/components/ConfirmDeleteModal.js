import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ConfirmDeleteModal({ show, handleClose, handleDelete, bookTitle }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete the book titled <strong>{bookTitle}</strong>?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmDeleteModal;
