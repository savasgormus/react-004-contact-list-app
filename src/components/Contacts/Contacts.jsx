import Form from "./Form/Form"
import List from "./List/List"
import { useState, useEffect} from "react"
import "./Contacts.css"
const Contacts = () => {
  const [contacts, useContacts] = useState([
    {
      fullname : 'Savaş',
      phone_number : '123123'
    }, {
      fullname : 'Başar',
      phone_number : '321321'
    },{
      fullname : 'Necati',
      phone_number : '123321'
    }

  ]);

  useEffect(() =>{
    console.log(contacts);
  },[contacts])

  return (
    <div className="container">
      <h1>Contacts</h1>
      <List  contacts={contacts}/>
      <Form addContact={useContacts} contacts={contacts}/>

    </div>
  )
}

export default Contacts