import React from 'react'
import s from './Button.module.css'

export default function Button({ text, class_name }) {
  return (
    <button className={class_name}>
      {text}
    </button>
  )
}
