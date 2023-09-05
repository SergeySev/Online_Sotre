import React from 'react'
import s from './ProductItemInfo.module.css'
import { Button } from '../../UI';
import { FiHeart, FiBarChart2 } from "react-icons/fi";
import { useSelector } from 'react-redux';

export default function ProductItemInfo({ product }) {

    const { brand, title, madeCountry, description, price, discountPrice, inStock, mainImageLink, productImagesLinks } = product
    const brands = useSelector(store => store.brands)

    const brand_img = brands.filter(elem => elem.title === brand)[0].brandImageLink
    console.log(brand_img);

    return (
        <div>
            <div className={s.product_info}>
                <div className={s.product_info_made}>
                    <img src={brand_img} alt={brand} />
                </div>
                <div className={s.product_info_main}>
                    <div className={s.product_info_main_image}>
                        <img src={mainImageLink} alt={title} className={s.product_image} />
                        <div className={s.product_info_rest_images}>
                            {productImagesLinks?.map((elem, index) =>
                                <div className={s.rest_image} key={index}>
                                    <img src={elem} alt={title} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={s.product_info_data}>
                        <h2 className={s.product_info_title}>{title}</h2>
                        <span className={s.product_info_instock}>{inStock > 0 ? 'In stock' : 'Not in stock'}</span>
                        <p className={s.product_info_description}>{description}</p>
                        <div className={s.product_info_price_box}>
                            <h4 className={s.product_info_discount}>{discountPrice !== 0 ? discountPrice : price} $</h4>
                            {discountPrice !== 0 && <span className={s.product_info_price}>{price} $</span>}
                        </div>
                        <div className={s.product_info_buttons}>
                            <Button text='Add to Cart' content='add_to_cart' />
                            <FiBarChart2 className={s.product_info_icon} />
                            <FiHeart className={s.product_info_icon} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
