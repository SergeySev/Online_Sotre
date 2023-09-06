import React, { useState } from 'react'
import s from './ProductItemInfo.module.css'
import { Button } from '../../UI';
import { FiHeart, FiBarChart2 } from "react-icons/fi";

export default function ProductItemInfo({ product, brand_img }) {

    const { brand, title, madeCountry, description, price, discountPrice, inStock, mainImageLink, productImagesLinks } = product
    const [main_img, setMainImg] = useState(mainImageLink)


    return (
        <div>
            <div className={s.product_info}>
                <div className={s.product_info_made}>
                    <img src={brand_img} alt={brand} className={s.brand_img} />
                </div>
                <div className={s.product_info_main}>
                    <div className={s.product_info_main_image}>
                        <img src={main_img} alt={title} className={s.product_image} />
                        <div className={s.product_info_rest_images}>
                            {productImagesLinks?.map((elem, index) =>
                                <div className={s.rest_image} key={index}>
                                    <img src={elem} alt={title} onClick={() => setMainImg(elem)} />
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
                <div className={s.product_info_tabs}>
                    <span className={s.product_info_tab_active}>Description</span>
                    <span className={s.product_info_tab}>Characteristics</span>
                    <span className={s.product_info_tab}>Delivery</span>
                    <span className={s.product_info_tab}>Feedback</span>
                </div>
            </div>
        </div>
    )
}
