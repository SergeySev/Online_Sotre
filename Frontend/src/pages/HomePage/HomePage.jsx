import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AboutSection from '../../components/AboutSection/AboutSection'
import Banner from '../../components/Banner/Banner'
import BrandSlider from '../../components/BrandSlider/BrandSlider'
import NewsSection from '../../components/NewsSection/NewsSection'
import OffersSection from '../../components/OffersSection/OffersSection'
import { fetch_main_categories, get_brands } from '../../requests/requests'

export default function HomePage() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetch_main_categories())
    dispatch(get_brands())
  }
    , [])


  return (
    <>
      <Banner />
      <BrandSlider />
      <AboutSection />
      <OffersSection />
      <NewsSection />
    </>
  )
}
