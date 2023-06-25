import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AboutSection from '../../components/AboutSection/AboutSection'
import Banner from '../../components/Banner/Banner'
import BrandSlider from '../../components/BrandSlider/BrandSlider'
import MainCategoriesGallery from '../../components/MainCategoriesGallery/MainCategoriesGallery'
import NewsSection from '../../components/NewsSection/NewsSection'
import OffersSection from '../../components/OffersSection/OffersSection'
import { fetch_brands, fetch_main_categories } from '../../requests/requests'

export function HomePage() {
	// export default function HomePage() {

	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	dispatch(fetch_main_categories())
	// 	dispatch(fetch_brands())
	// }, [])

	// const categories = useSelector(store => store.categories)

	return (
		<>
			<Banner />
			<MainCategoriesGallery />
			{/* <MainCategoriesGallery categories={categories} /> */}
			<BrandSlider />
			<AboutSection />
			<OffersSection />
			<NewsSection />
		</>
	)
}
