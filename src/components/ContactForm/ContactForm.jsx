import React, { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    return [setName(''), setNumber('')];
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <h2 className="title">Phonebook</h2>
        <div className={css.contactForm}>
          <label className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </label>
          <label className={css.label}>
            Number
            <input
              className={css.input}
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              required
            />
            <button type="submit">Add Contacts</button>
          </label>
        </div>
      </form>
    </>
  );
};
export default ContactForm;
