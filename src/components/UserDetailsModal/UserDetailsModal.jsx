import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

const UserDetailsModal = ({ user, showModal, handleCloseModal }) => {
  return (
    <Modal size="lg" show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className=" d-flex justify-content-between align-items-center mb-3 p-3">
          <div className="mb-3">
            <p className=" mb-0">Name: {user.name}</p>
            <p>Number: {user.number}</p>
            <p>Email: {user.email}</p>
          </div>
          <div className="mt-3 d-flex justify-content-end">
            <Image
              src="https://i.pravatar.cc/250"
              width="250"
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

export default UserDetailsModal;
