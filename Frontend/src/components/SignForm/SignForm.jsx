import React from 'react'
import s from './SignForm.module.css'
import Input from '../../UI/Input/Input'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'

export default function SignForm(props) {
  const { title, link, button, input, infoText, type } = props;
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm;

  const password = useRef();
  password.current = watch('password', '')
  return (
    <div>
      <form>
        <h2></h2>
        <p></p>
        <Input />
      </form>
    </div>
  )
}
