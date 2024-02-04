import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ContactDetailsModal = ({ contact, showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Name: {contact.name}</p>
        <p>Number: {contact.number}</p>
        <p>Email: {contact.email}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactDetailsModal;
