import React from 'react'
import { Link } from 'react-router-dom'
import s from './Breadcumb.module.css'

export default function Breadcrumb({ text, link }) {
  return (
    <li>
      <Link to={link}>{text}</Link>
    </li>
  )
}
