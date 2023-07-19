import React, { useState } from 'react'
import s from './OffersAside.module.css'

export default function OffersAside() {

    const [offersList, setOffersList] = useState([]);
    const offers_url = 'http://localhost:8080/api/v1/offers/all';

    fetch(offers_url)
        .then(res => res.json())
        .then(data => setOffersList(data))


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
