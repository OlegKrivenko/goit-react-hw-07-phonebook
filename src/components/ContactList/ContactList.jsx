import css from './ContactList.module.css';
import Contact from '../Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {contacts &&
        contacts.map(contact => <Contact key={contact.id} {...contact} />)}
    </ul>
  );
};

export default ContactList;
