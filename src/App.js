import './App.css';
import { Component } from 'react';
import shortid from 'shortid';
import { ContactForm } from './Form';
import contactsList from './data/contacts.json';
import { ContactList } from './ContactsList';
import { Filter } from './Filter';

class App extends Component {
  static defaultProps = {
    contacts: contactsList,
    filter: "",
  }

  state = {
    contacts: this.props.contacts,
    filter: this.props.filter,
  }

  addContact = (data) => {
    const newContactId = shortid.generate();
    const newContact = {
      id: newContactId,
      name: data.name,
      number: data.number
    }
    this.state.contacts.find(contact => 
      contact.name === data.name) ? alert("The name is already exist") 
    : this.state.contacts.find(contact => 
        contact.number === data.number) ? alert("The number  is already exist") 
    : this.setState((prevState) => {
       return {contacts: [...prevState.contacts, newContact]}
    })
  }

  handleFilterValue = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = ( e ) => {
    const currentId = e.currentTarget.name;
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== currentId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilterValue = filter.toLowerCase();
    const filteredContacts = contacts.filter( 
      contact => 
        contact.name.toLowerCase().includes(normalizeFilterValue) ||
        contact.number.includes(filter)
    );

    return (
      <div className="App">
      <h1 className="App__title"> Phonebooks </h1>
      <ContactForm onSubmit={this.addContact} />
      <div className="App__contacts__container">
      <h2 className="App__contacts__title"> Contacts </h2>
      <h3 className="App__filter__title"> Find contacts by name </h3>
      <Filter filter={filter} onChange={this.handleFilterValue}/>
      <ContactList contacts={filteredContacts} onClick={this.deleteContact} filteredValue={filteredContacts.length}/>
      </div>
    </div>
    )
  }
}

export default App;
