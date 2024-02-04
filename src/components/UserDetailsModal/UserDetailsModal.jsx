import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const UserDetailsModal = ({ user, showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Додайте інформацію про користувача */}
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        {/* Додайте іншу інформацію, яку потрібно відображати */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserDetailsModal;
