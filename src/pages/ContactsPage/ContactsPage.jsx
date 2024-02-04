import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { fetchContacts } from '../../redux/contacts/contacts.operations';
import {
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts.selectors';
import { ContactForm } from '../../components/ContactForm/ContactForm'
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && !error && <Loader />}
      <div>
        <div>
          <h1>Add new contact:</h1>
          <ContactForm />
          <Filter />
        </div>

        <div>
          <h2>Contacts</h2>
          {error &&
            Notify.failure(
              `Oops, some error occurred... Please try reloading the page`,
              { timeout: 2000 }
            )}
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
