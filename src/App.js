import { Component } from 'react';
import './App.css';
import shortid from 'shortid';
import styled from '@emotion/styled';

const Form = styled.form`
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  margin: auto;
  margin-top: 15px;
`;
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  nameInputId = shortid.generate();

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: this.nameInputId, name: this.state.name }],
    }));
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <Button type="submit">Add contact</Button>
        </Form>
        <ul>
          {this.state.contacts?.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
