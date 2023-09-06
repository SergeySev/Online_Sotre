import React, { useEffect } from 'react'
import s from './ProductItemPage.module.css'
import { useParams } from 'react-router-dom'
import ProductItemInfo from '../../components/ProductItemInfo/ProductItemInfo';
import { fetch_product_info } from '../../requests/requests';
import { useDispatch, useSelector } from 'react-redux';


export default function ProductItemPage() {

    const dispatch = useDispatch()
    const id = useParams().id
    let brand_img = ''

    useEffect(() => {
        dispatch(fetch_product_info(id))
    }, [])

    const product = useSelector(store => store.productItem)
    const brands = useSelector(store => store.brands)

    if (product) {
        brand_img = (brands.filter(elem => elem.title === product?.brand))[0]?.brandImageLink;
    }

    return (
        <div className={s.page_wrapper}>
            <div className='container'>
                <ProductItemInfo product={product} brand_img={brand_img} />
            </div>
        </div>
    )
}
