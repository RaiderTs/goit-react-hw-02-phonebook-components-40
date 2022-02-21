import { Component } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';

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
    onExistContact && alert(`${name} is already in contacts`);
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
      <>
        <h1>Phone book</h1>
        <ContactForm
          addContact={this.handleAddContact}
          onUnique={this.handleCheckUnique}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={this.handleFilterContacts()}
          onDeleteContact={this.handleRemoveContact}
        />
      </>
    );
  }
}

export default App;
