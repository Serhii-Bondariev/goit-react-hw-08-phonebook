import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.operations';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center" key={id}>
      <div>
        <p className="mb-0">{name}:</p>
        <p className="mb-0">{number}</p>
      </div>
      <button type="button" className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
