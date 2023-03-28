import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { GlobalStyle } from '../GlobalStyle';
import { Section } from '../Section/Section';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Section title="Add contact">
        <ContactForm />
      </Section>
      <Section title="Find contacts by name">
        <Filter />
      </Section>
      <Section title="Contact list">
        <ContactList />
      </Section>
      <GlobalStyle />
    </Container>
  );
};
