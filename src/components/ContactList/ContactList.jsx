import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contacte.selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts.length !== 0 ? (
        contacts.map(contact => (
          <ContactListItem
            name={contact.name}
            number={contact.number}
            key={contact.id}
            id={contact.id}
          />
        ))
      ) : (
        <li style={{ width: 450, textAlign: 'center' }}>
          There are no contacts in your phonebook
        </li>
      )}
    </ul>
  );
};
