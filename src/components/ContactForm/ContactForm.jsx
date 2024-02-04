import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { selectContacts } from 'redux/contacts/contacts.selectors';
import { addContact } from 'redux/contacts/contacts.operations';

export const ContactForm = () => {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();
  
    // Оголошення патернів
    const namePattern = /^[a-zA-Zа-яА-ЩЬЮЯҐЄІЇа-щьюяґєії]+(([' -][a-zA-Zа-яА-ЩЬЮЯҐЄІЇа-щьюяґєії ])?[a-zA-Zа-яА-ЩЬЮЯҐЄІЇа-щьюяґєії]*)*$/
    ;
    const numberPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  
    const handleSubmit = evt => {
      evt.preventDefault();
  
      const form = evt.target;
      const { name, number } = form.elements;
  
      const contactData = {
        name: name.value,
        number: number.value,
        id: nanoid(),
      };
  
      const hasDuplicates = contacts.some(
        contact =>
          contact.name.toLowerCase().trim() ===
          contactData.name.toLowerCase().trim()
      );
  
      if (hasDuplicates) {
        Notify.warning(`Contact with name '${name}' has already been added!`, {
          timeout: 6000,
        });
        return;
      }
  
      dispatch(addContact(contactData));
      form.reset();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern={namePattern.source}
            title="Only Cyrillic/Latin letters, also name may contain hyphen, apostrophe, or space character"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern={numberPattern.source}
            title="Only digits are allowed"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  };
  
  export default ContactForm;
  