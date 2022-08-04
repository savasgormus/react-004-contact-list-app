import Form from "./Form/Form"
import List from "./List/List"
import { useState, useEffect} from "react"


const Contacts = () => {
  const [contacts, useContacts] = useState([]);

  useEffect(() =>{
    console.log(contacts);
  },[contacts])

  return (
    <div>
      <List />
      <Form addContact={useContacts} contacts={contacts}/>

    </div>
  )
}

export default Contacts