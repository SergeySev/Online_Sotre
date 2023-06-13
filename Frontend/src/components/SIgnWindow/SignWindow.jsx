import React from 'react'
import s from './SignWindow.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Button from '../../UI/Button/Button'
import { add_new_user_req } from '../../requests/requests'

export default function SignWindow({ active, setActive }) {

  const sendHandler = (e) => {
    e.preventDefault();

    // const newUser = {
    //   "firstName": e.target.name.value,
    //   "lastName": e.target.surname.value,
    //   "phoneNumber": e.target.phone.value,
    //   "email": e.target.email.value,
    //   "password": e.target.first_password.value,
    //   "birthDate": "2023-05-22T00:00:00.000+00:00",
    //   // "2023-05-22T18:30:39.954Z"
    // }

    const newUser = {
      "firstName": "Dmitro",
      "lastName": "Gutsuliak",
      "phoneNumber": "123467856789",
      "email": "mai678l@gmail.com",
      "password": "987654321",
      "birthDate": "1996-02-16T00:00:00.000Z",
      // "2023-05-22T18:30:39.954Z"
    }

    add_new_user_req(newUser);
    // e.target.reset();
    console.log(newUser)
  }

  return (
    <div className={s.modal_container}>
      <div className={!active ? s.modal : s.modal_active}>
        <form className={s.form} onClick={(e) => e.stopPropagation()} onSubmit={sendHandler}>
          <FontAwesomeIcon icon={faXmark} onClick={() => setActive(false)} className={s.close} />
          <h2 className={s.form_title}>Registration</h2>
          <div className={s.form_inner}>
            <label>Surname </label>
            <input type='text' name='surname' placeholder='' />
            <label>Name </label>
            <input type='text' name='name' placeholder='' />
            <label>Phone </label>
            <input type='tel' name='phone' placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
            <label>Email </label>
            <input type='email' name='email' placeholder='' />
            <label>Birthday (date and time)</label>
            <input type="datetime-local" name="birthdaytime"></input>
            <label>Password </label>
            <input type='password' name='first_password' placeholder='' />
            <label>Re-enter password </label>
            <input type='password' name='second_password' placeholder='' />
            <Button text='Registration' class_name='black' />
            <p className={s.form_agreement}>
              Clicking on the button you agree to the <span>processing of your personal data</span>
            </p>
          </div>


        </form>
      </div >
    </div >
  )
}
