import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { createFilter } from 'redux/filterSlice';

import css from './ContactFilter.module.css';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChangeFilter = event => {
    const value = event.currentTarget.value;
    dispatch(createFilter(value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default ContactFilter;
