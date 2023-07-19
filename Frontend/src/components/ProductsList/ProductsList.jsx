import { useEffect, useState } from 'react';
import { Pagination, ProductItem, SubCategoryItem } from '../'
import s from './ProductsList.module.css'

export function ProductsList({ products, content, pagination_content }) {
	// console.log("🚀 ~ file: ProductsList.jsx:6 ~ ProductsList ~ pagination_content:", pagination_content)
	// console.log("🚀 ~ file: ProductsList.jsx:6 ~ ProductsList ~ products:", products)

	const [currentPage, setCurrentPage] = useState(1);
	const [countProductsPage, setCountProductsPage] = useState(20);

	const lastElem = currentPage * countProductsPage;
	const firstElem = lastElem - countProductsPage;
	// console.log(products)
	const products_list = products.slice(firstElem, lastElem)
	const countElem = Math.ceil(products.length / countProductsPage)

	useEffect(() => {
		if (Math.ceil(products.length / countProductsPage) < currentPage) {
			setCurrentPage(1)
		}
		// window.scrollTo(0, 0);
	}, [products, currentPage])

	return (
		<>
			{content ?
				<ul className={s.subcategories_list}>
					{products_list.map(product => <SubCategoryItem key={product.id} product={product} id={content} />
					)}
				</ul>
				:
				<ul className={s.products_list}>
					{products_list.map(product => <ProductItem key={product.id} product={product} />)}
				</ul>
			}

			<Pagination setCurrentPage={setCurrentPage} countElem={countElem} currentPage={currentPage} pagination_content={pagination_content} />
		</>
	)
}
