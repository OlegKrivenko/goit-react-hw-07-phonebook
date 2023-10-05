import css from './ContactList.module.css';
import Contact from '../Contact';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getIsLoading,
  getError,
  getFilter,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <b>Loading......</b>}

      <ul className={css.list}>
        {visibleContacts.map(contact => (
          <Contact key={contact.id} {...contact} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
