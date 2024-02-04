import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contacts.selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className="list-group">
      {contacts.length !== 0 ? (
        contacts.map((contact) => (
          <ContactListItem
            name={contact.name}
            number={contact.number}
            key={contact.id}
            id={contact.id}
          />
        ))
      ) : (
        <li className="list-group-item text-center">
          There are no contacts
        </li>
      )}
    </ul>
  );
};
