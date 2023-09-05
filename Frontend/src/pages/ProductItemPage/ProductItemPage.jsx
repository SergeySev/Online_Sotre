import React, { useEffect } from 'react'
import s from './ProductItemPage.module.css'
import { useParams } from 'react-router-dom'
import ProductItemInfo from '../../components/ProductItemInfo/ProductItemInfo';
import { fetch_product_info } from '../../requests/requests';
import { useDispatch, useSelector } from 'react-redux';


export default function ProductItemPage() {

    const dispatch = useDispatch()
    const id = useParams().id

    useEffect(() => {
        dispatch(fetch_product_info(id))
    }, [])

    const info = useSelector(store => store.productItem)

    console.log(info);

    return (
        <div>
            <ProductItemInfo product={info} />
        </div>
    )
}
