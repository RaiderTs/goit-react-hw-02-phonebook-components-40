import { Component } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import swal from 'sweetalert';
import styled from '@emotion/styled';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  margin: auto;
  margin-top: 3%;
  padding-bottom: 35px;
  max-width: 700px;
`;

const Title = styled.h1`
  margin-top: 25px;
  font-size: 50px;
  color: #fff;
  letter-spacing: 4px;
`;

const SubTitle = styled.h2`
  margin: 20px 20px;
  font-size: 40px;
  color: #fff;
  letter-spacing: 4px;
`;
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterContacts = () => {
    const { contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  handleFilterChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleCheckUnique = name => {
    const { contacts } = this.state;
    const onExistContact = contacts.some(contact => contact.name === name);
    onExistContact &&
      swal(`${name} is already in contacts!`, {
        icon: 'error',
        buttons: false,
        timer: 2500,
      });
    return !onExistContact;
  };

  handleRemoveContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  handleAddContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  render() {
    return (
      <Section>
        <Title>Phone book</Title>
        <ContactForm
          addContact={this.handleAddContact}
          onUnique={this.handleCheckUnique}
        />
        <SubTitle>Contacts</SubTitle>
        <Filter filter={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={this.handleFilterContacts()}
          onDeleteContact={this.handleRemoveContact}
        />
      </Section>
    );
  }
}

export default App;
