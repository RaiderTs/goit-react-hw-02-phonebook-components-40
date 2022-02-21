import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styled from '@emotion/styled';

const Form = styled.form`
  max-width: 500px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  margin: auto;
  margin-top: 35px;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  outline: none;
  border: none;
  background: linear-gradient(to right, #ed213a, #93291e);
  color: #fff;
  font-size: 20px;
  transition: transform 250ms;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.07);
  }
`;

const Label = styled.label`
  display: flex;
  align-items: baseline;
  margin: 15px;
  margin-right: 90px;
  width: 100%;
  font-size: 21px;
  color: #fff;
`;

const Input = styled.input`
  margin-top: 15px;
  margin-left: 20px;
  width: 300px;
  height: 40px;
  border-radius: 8px;
  outline: none;
  border: none;
  padding-left: 50px;
  &:focus::placeholder {
    color: transparent;
  }
`;

const CustomInputName = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 15px;
    bottom: 0;
    right: 0;
    left: 30px;
    margin: auto 0;
    width: 30px;
    height: 30px;
    background: url('https://gogeticons.com/frontend/web/icons/data/1/8/1/0/3/1/copy_iso_color_icon_512.png')
      no-repeat;
    background-size: cover;
  }
`;

const CustomInputPhone = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 15px;
    bottom: 0;
    right: 0;
    left: 30px;
    margin: auto 0;
    width: 30px;
    height: 30px;
    background: url('https://gogeticons.com/frontend/web/icons/data/1/8/1/0/2/0/phone_missing_iso_color_icon_512.png')
      no-repeat;
    background-size: cover;
  }
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
            <CustomInputName>
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
            </CustomInputName>
          </Label>
          <Label>
            Phone
            <CustomInputPhone>
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
            </CustomInputPhone>
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  onUnique: PropTypes.func.isRequired,
};

export default ContactForm;
