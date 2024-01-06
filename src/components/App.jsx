import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  // const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) || []);
  const [filter, setFilter] = useState('');

  //   useEffect(() => {
  //     const contactsFromLocalStorage = localStorage.getItem('contacts') || [];
  //     setContacts(JSON.parse(contactsFromLocalStorage));
  //     }, [contacts]);
  //  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    JSON.parse(localStorage.getItem('contacts'));
  }, [contacts]);

  const createContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    //     // const isDuplicated =
    contacts.find(el => el.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts([...newContacts]);
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const filterContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 'auto',
          marginTop: '50px',
          marginRight: 'auto',
          padding: '40px 20px',
          width: '500px',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <div className="contactsForm">
          <ContactForm onSubmit={createContact} />
          {contacts.length ? <h2 className="title">Contacts</h2> : <></>}
          {contacts.length ? (
            <Filter value={filter} onChange={changeFilter} />
          ) : (
            <></>
          )}

          <ContactList
            contacts={filterContact}
            onDeleteContact={deleteContact}
          />
        </div>
      </div>
    </>
  );
};
