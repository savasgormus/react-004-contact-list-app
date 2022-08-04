import React from 'react'
import { useState } from 'react'

const Form = ( { addContact, contacts }) => {
  //state'i tanımladık
  const [form, setForm] = useState(
    { 
      fullname: "", phone_number: ""
    }
  )

  //state'e atama yapacak fonksiyonu yazıyoruz.
  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
    // ...form ile form'u olduğu gibi aldık ve e.target.value olarak yeni değer atadık.
  }

  const onSubmit = (e) => {
    // sayfa yenilemesini engellemek için preventDefault kullanıyoruz.
    e.preventDefault();

    // eğer form içerisindeki fullname ya da phone_number boş ise 
    if (form.fullname === ''|| form.phone_number === ''){
      return (
        false, 
        console.log("lütfen ilgili alanları doldurunuz."));
    };

    // Contact.jsx'den gelen addcontact prop'un içerisine diğer prop'u gönderiyoruz
    // böylece önceki veriyi tutuyor ve form içerisindeki yeni veriyi ile beraber console'da gösteriyor.
    addContact([...contacts,form])
    console.log(form);

    // submit dedikten sonra default olarak input alanlarının temizlenmesini istiyoruz.
    setForm({fullname:"", phone_number:""})
  }


  return (
    <form onSubmit={onSubmit}>

      <div>
      <input 
        name='fullname' 
        placeholder='Fullname' 
        onChange={onChangeInput}
        value={form.fullname}/>
      </div>

      <div>
      <input 
        name='phone_number' 
        placeholder='Phone Number' 
        onChange={onChangeInput}
        value={form.phone_number}/>
      </div>

      <div>
      <button>Add Contact</button>
      </div>

    </form>
  )
}

export default Form