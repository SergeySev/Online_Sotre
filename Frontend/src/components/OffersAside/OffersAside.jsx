import React, { useEffect, useState } from 'react'
import s from './OffersAside.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetch_aside_offers } from '../../requests/requests';

export default function OffersAside() {

    const offersList = useSelector(state => state.asideOffers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetch_aside_offers())
    }, [])

    return (
        <div className={s.offers_list}>
            {offersList.map((elem, index) => {
                return <div key={index} className={s.offers_item}>
                    <img src={elem.imageLink} alt={elem.title} />
                    <h4>{elem.title}</h4>
                    <p>{elem.description}</p>
                </div>
            })}
        </div>
    )
}
