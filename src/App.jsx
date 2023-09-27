import Container from './components/Container';
import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';
import ContactFilter from './components/ContactFilter';

const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactEditor />
      <h2>Contacts</h2>
      <ContactFilter />
      <ContactList />
    </Container>
  );
};

export default App;
