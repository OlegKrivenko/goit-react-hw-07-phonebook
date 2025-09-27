import css from './ContactList.module.css';
import Contact from '../Contact';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
