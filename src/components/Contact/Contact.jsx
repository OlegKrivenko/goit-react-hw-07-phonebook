import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contact}>
      <div className={css.box}>
        {name}: {number}
        <button
          type="button"
          className={css.button}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
