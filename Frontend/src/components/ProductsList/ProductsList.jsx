import { useEffect, useState } from 'react';
import { Pagination, ProductItem, SubCategoryItem } from '../'
import s from './ProductsList.module.css'
import SortBar from '../SortBar/SortBar';
import ProductItemRow from '../ProductItemRow/ProductItemRow';
import usePortraite from '../hooks/usePortraite';

export function ProductsList({ products, content, pagination_content }) {
	const [currentPage, setCurrentPage] = useState(1);
	const [countProductsPage, setCountProductsPage] = useState(20);
	const [layout, setLayout] = useState(false);

	const lastElem = currentPage * countProductsPage;
	const firstElem = lastElem - countProductsPage;
	const products_list = products.slice(firstElem, lastElem)
	const countElem = Math.ceil(products.length / countProductsPage)

	console.log(products_list);


	useEffect(() => {
		if (Math.ceil(products.length / countProductsPage) < currentPage) {
			setCurrentPage(1);
		}
	}, [products, currentPage])

	const isPortrait = usePortraite();

	useEffect(() => {
		if (isPortrait) setLayout(false)
	}, [window.innerWidth])

	return (
		<>
			<SortBar layout={layout} setLayout={setLayout} />
			{content ?
				<ul className={`${s.list} ${s.subcategories_list}`}>
					{products_list?.map(product => <SubCategoryItem key={product.id} product={product} id={content} />
					)}
				</ul>
				:
				layout ?
					<ul className={`${s.list} ${s.products_list_row}`}>
						{products_list.map(product => <ProductItemRow key={product.id} product={product} />)}
					</ul> :
					<ul className={`${s.list} ${s.products_list}`}>
						{products_list.map(product => <ProductItem key={product.id} product={product} />)}
					</ul >
			}

			<Pagination setCurrentPage={setCurrentPage} countElem={countElem} currentPage={currentPage} pagination_content={pagination_content} />
		</>
	)
}
