import React from 'react'
import s from './SortBar.module.css'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'

export default function SortBar() {
    return (
        <div className={s.sort_bar}>
            <div className={s.layout}>
                <p>Layout:</p>
                <BsFillGrid3X3GapFill className={s.layout_icon} />
                <FaBars className={s.layout_icon} />
            </div>
        </div>

    )
}
