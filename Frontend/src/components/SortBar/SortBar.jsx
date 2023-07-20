import React from 'react'
import s from './SortBar.module.css'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'

export default function SortBar({ layout, setLayout }) {

    const changeLayout = () => {
        setLayout(!layout)
    }

    return (
        <div className={s.sort_bar}>
            <div className={s.layout}>
                <p>Layout:</p>
                <BsFillGrid3X3GapFill className={!layout ? s.layout_icon_active : s.layout_icon} onClick={changeLayout} />
                <FaBars className={layout ? s.layout_icon_active : s.layout_icon} onClick={changeLayout} />
            </div>
        </div>

    )
}
