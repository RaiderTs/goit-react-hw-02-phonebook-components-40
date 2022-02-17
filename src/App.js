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

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

const Input = styled.input`
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
    number: '',
  };

  nameInputId = shortid.generate();

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(({ contacts }) => ({
      contacts: [
        ...contacts,
        {
          id: this.nameInputId,
          name: this.state.name,
          number: this.state.number,
        },
      ],
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
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Label>
          <Label>
            Phone
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Enter phone"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
        <ul>
          {this.state.contacts?.map(({ name, number }) => (
            <li key={name}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
