import React from 'react'
import Button from '../../UI/Button/Button'
import s from './AboutSection.module.css'
import image from './assets/about.png'

export default function AboutSection() {
  return (
    <div className={s.about_section}>
      <div className='container'>
        <div className={s.about_inner}>
          <img src={image} alt='hands' />
          <div className={s.about_description}>
            <h2 className={s.about_title}>About us</h2>
            <p className={s.about_text}>A commercial or industrial enterprise, a commercial and industrial association of entrepreneurs,
              a form of organization of an enterprise in which its legal personality differs from the legal personality of the persons participating in it.</p>
            <p className={s.about_text}>Commercial or industrial enterprise, commercial and industrial association of entrepreneurs, form of organization of an enterprise</p>
            <Button text='Go to Catalog' class_name='black' />
            {/* <button className={s.catalog_btn}></button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
