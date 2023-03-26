import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { GlobalStyle } from '../GlobalStyle';
import { Section } from '../Section/Section';
import { getFilterAddArray } from '../Utils/getFilterAddArray';
import { Container } from './App.styled';


const getInitialContacts = () => {
  const saveContacts = localStorage.getItem('contacts');
  if (saveContacts !== null) {
    const parseContacts = JSON.parse(saveContacts);
    return parseContacts;
  }
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);

  const [filter, setFilter] = useState('');

  

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const isUnique = contacts.find(item => item.name === contact.name);

    

    if (isUnique) {
      alert(`${contact.name} is alredy in contacts.`);
      return false;
    }
    setContacts(contacts => [contact, ...contacts]);
    return true;
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const settingFilter = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = getFilterAddArray(contacts, 'name', filter);

  return (
    <Container>
      <Section title="Add contact">
        <ContactForm addContact={addContact} />
      </Section>
      <Section title="Find contacts by name">
        <Filter value={filter} setValue={settingFilter} />
      </Section>

      <Section title="Contact list">
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </Section>
      <GlobalStyle />
    </Container>
  );
};
