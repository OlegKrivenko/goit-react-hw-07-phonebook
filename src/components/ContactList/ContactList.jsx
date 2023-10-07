import css from './ContactList.module.css';
import Contact from '../Contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectVisibleContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error && <p>{error}</p>}
      <ul className={css.list}>
        {visibleContacts.length > 0 &&
          visibleContacts.map(contact => (
            <Contact key={contact.id} {...contact} />
          ))}
      </ul>
    </>
  );
};

export default ContactList;
