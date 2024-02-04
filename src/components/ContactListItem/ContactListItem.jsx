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
          <p className="mb-0 text-bold cursor-pointer" onClick={handleShowModal}>
            {name}:
          </p>
          <p className="mb-0">{number}</p>
        </div>
        <div>
          <button type="button" className="btn btn-primary" onClick={handleShowModal}>
            Details
          </button>
          <button type="button" className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </li>

      <ContactDetailsModal contact={{ name, number }} showModal={showModal} handleCloseModal={handleCloseModal} />
    </>
  );
};
