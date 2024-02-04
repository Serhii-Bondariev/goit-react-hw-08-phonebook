// ContactListItem.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.operations';
import { Button } from 'react-bootstrap';
import ContactDetailsModal from '../../components/ContactDetailsModal/ContactDetailsModal'; // Імпортуємо новий компонент

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => dispatch(deleteContact(id));

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center" key={id}>
        <div>
          <p className="mb-0  cursor-pointer" onClick={handleShowModal}>
            {name}:
          </p>
          <p className="mb-0">{number}</p>
        </div>
        <div>
          <Button variant="outline-info" type="button" className="me-2 m-2" onClick={handleShowModal}>
            Details
          </Button>
          <Button variant="outline-danger" type="button"  onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </li>

      <ContactDetailsModal contact={{ name, number }} showModal={showModal} handleCloseModal={handleCloseModal} />
    </>
  );
};
