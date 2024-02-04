import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.operations';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li key={id}>
      <div>
        <p>{name}:</p>
        <p>{number}</p>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

