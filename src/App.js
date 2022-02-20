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

  onFilterContacts = () => {
    const { contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  handleFilterChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  addContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList contacts={this.onFilterContacts()} />
      </>
    );
  }
}

export default App;
