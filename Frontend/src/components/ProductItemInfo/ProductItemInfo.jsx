import React from 'react'
import s from './ProductItemInfo.module.css'
import { Button } from '../../UI';
import { FiHeart, FiBarChart2 } from "react-icons/fi";

export default function ProductItemInfo({ product }) {

    const { brand, title, madeCountry, description, price, discountPrice, inStock, mainImageLink, productImagesLinks } = product

    return (
        <div>
            <div className={s.product_info}>
                <div className={s.product_info_made}>{brand}</div>
                <div className={s.product_info_main}>
                    <div className={s.product_info_main_image}>
                        <div className={s.product_info_rest_images}></div>
                    </div>
                    <div className={s.product_info_data}>
                        <h2 className={s.product_info_title}>{title}</h2>
                        <span className={s.product_info_instock}></span>
                        <p className={s.product_info_description}>{description}</p>
                        <div className={s.product_info_price_box}>
                            <h4 className={s.product_info_discount}>{discountPrice}</h4>
                            <span className={s.product_info_price}>{price}</span>
                        </div>
                        <div className={s.product_info_buttons}>
                            <Button />
                            <FiBarChart2 />
                            <FiHeart />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
