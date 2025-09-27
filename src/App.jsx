import Container from './components/Container';
import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';
import ContactFilter from './components/ContactFilter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectLoading } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactEditor />
      <h2>Contacts</h2>
      <ContactFilter />
      {isLoading && <p>Contacts is loading, please wait...</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </Container>
  );
};

export default App;
