import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

const ContactDetailsModal = ({ contact, showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className=" d-flex justify-content-between align-items-center mb-3 p-3">
          <div className="mb-3">
            <p>Name: {contact.name}</p>
            <p>Number: {contact.number}</p>
            <p>Email: {contact.email}</p>
          </div>
          <div className="mt-3 d-flex justify-content-end">
            <Image
              src="https://i.pravatar.cc/150"
              width="150"
              alt="contactImg"
              rounded
            />
          </div>
        </div>
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
