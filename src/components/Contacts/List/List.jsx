import { useState } from 'react'

const List = ( {contacts}) => {
  // filtreleme için yazacağımız state
  const [filterText,setFilterText] = useState('')

  // filteleme işlemi için yazdığımız fonksiyon
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some( (key) => 
    // obje içerisindeki keylerin(fullname ve phone_number)
    // herhangi bir item'imini filtreliyoruz.
        item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase()))
  })

  console.log("filtered", filtered);

  return (
    <div>

      <input placeholder="Filter Contacts" value={filterText} onChange={(e) => setFilterText(e.target.value)} />

      <ul>
        {
        filtered.map((contact, id) => 
          <li key={id}>{contact.fullname}</li>)
        }
      </ul>
    </div>
  )
}

export default List