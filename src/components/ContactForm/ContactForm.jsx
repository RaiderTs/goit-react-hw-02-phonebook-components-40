import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addContact, onUnique } = this.props;
    if (!onUnique(this.state.name)) return;

    const contact = {
      id: this.nameInputId,
      name: this.state.name,
      number: this.state.number,
    };

    addContact(contact);
    this.reset();
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

ContactForm.propTypes = {};

export default ContactForm;
