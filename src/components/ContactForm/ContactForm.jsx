import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { selectContacts } from 'redux/contacts/contacts.selectors';
import { addContact } from 'redux/contacts/contacts.operations';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const namePattern = /^[a-zA-Zа-яА-ЩЬЮЯҐЄІЇа-щьюяґєії]+(([' -][a-zA-Zа-яА-ЩЬЮЯҐЄІЇа-щьюяґєії ])?[a-zA-Zа-яА-ЩЬЮЯҐЄІЇа-щьюяґєії]*)*$/;
  const numberPattern = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { name, number } = form.elements;

    const contactData = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    };

    const hasDuplicates = contacts.some(
      (contact) =>
        contact.name.toLowerCase().trim() ===
        contactData.name.toLowerCase().trim()
    );

    if (hasDuplicates) {
      Notify.warning(`Contact with name '${name}' has already been added!`, {
        timeout: 2000,
      });
      return;
    }

    dispatch(addContact(contactData));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          pattern={namePattern.source}
          title="Only letters are allowed"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Number
        </label>
        <input
          type="tel"
          className="form-control"
          id="number"
          name="number"
          pattern={numberPattern.source}
          title="Only digits are allowed"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

  