import React, { useState } from 'react'
import s from './ProductItemInfo.module.css'
import { Button } from '../../UI';
import { FiHeart, FiBarChart2 } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../store/reducers/infoTabsSlice';

export default function ProductItemInfo({ product, brand_img }) {

    const {
        brand,
        colour,
        characteristicDto,
        deliveryType,
        title,
        mainCategoryTitle,
        madeCountry,
        description,
        price,
        discountPrice,
        inStock,
        mainImageLink,
        productImagesLinks
    } = product
    // const { assignment, basis, glossGrade, type, typeOfWork, weight } = characteristicDto
    const [main_img, setMainImg] = useState(mainImageLink)
    const tabItems = useSelector(store => store.tabItems)
    const dispatch = useDispatch()

    const clickHandler = (tab) => {
        dispatch(setActiveTab(tab))
    }


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
                    {tabItems.tabList.map((elem, index) => <span className={elem.tabname === tabItems.activeTab ? s.product_info_tab_active : s.product_info_tab} key={index} onClick={() => clickHandler(elem.tabname)}>{elem.tabname}</span>)}
                </div>
                {tabItems.activeTab === 'Description' && <div id="description" className={s.tab_description}>
                    <div className={s.description_row}>
                        <p className={s.description_title}>Brand:</p>
                        <span className={s.description_value}>{brand}</span>
                    </div>
                    <div className={s.description_row}>
                        <p className={s.description_title}>Color:</p>
                        <span className={s.description_value}>{colour}</span>
                    </div>
                    <div className={s.description_row}>
                        <p className={s.description_title}>Made Country:</p>
                        <span className={s.description_value}>{madeCountry}</span>
                    </div>
                    <div className={s.description_row}>
                        <p className={s.description_title}>Main Category:</p>
                        <span className={s.description_value}>{mainCategoryTitle}</span>
                    </div>
                    <div className={s.description_row}>
                        <p className={s.description_title}>Description:</p>
                        <span className={s.description_value}>{description}</span>
                    </div>
                </div>}
                {tabItems.activeTab === 'Characteristics' && <div id="characteristics" className={s.tab_description}>
                    <div className={s.description_row}>
                        <p className={s.description_title}>Assignment:</p>
                        <span className={s.description_value}>{characteristicDto?.assignment}</span>
                    </div>
                    <div className={s.description_row}>
                        <p className={s.description_title}>Basis:</p>
                        <span className={s.description_value}>{characteristicDto?.basis}</span>
                    </div>
                    <div className={s.description_row}>
                        <p className={s.description_title}>GlossGrade:</p>
                        <span className={s.description_value}>{characteristicDto?.glossGrade}</span>
                    </div>
                    <div className={s.description_row}>
                        <p className={s.description_title}>Type:</p>
                        <span className={s.description_value}>{characteristicDto?.type}</span>
                    </div>
                    <div className={s.description_row}>
                        <p className={s.description_title}>Type of work:</p>
                        <span className={s.description_value}>{characteristicDto?.typeOfWork}</span>
                    </div>
                    <div className={s.description_row}>
                        <p className={s.description_title}>Weight:</p>
                        <span className={s.description_value}>{characteristicDto?.weight}</span>
                    </div>
                </div>}
                {tabItems.activeTab === 'Delivery' && <div id="delivery" className={s.tab_description}>
                    <div className={s.description_row}>
                        <p className={s.description_title}>Delivery type:</p>
                        <span className={s.description_value}>{deliveryType}</span>
                    </div>
                </div>}
                {tabItems.activeTab === 'Feedback' && <div id="feedback" className={s.tab_description}>
                    <div className={s.description_row}>
                        <p className={s.description_title}>Feedback:</p>
                        <span className={s.description_value}>There is no feedback yet</span>
                    </div>
                </div>}
            </div>
        </div>
    )
}
