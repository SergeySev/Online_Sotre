import React from 'react'
import AboutSection from '../../components/AboutSection/AboutSection'
import Banner from '../../components/Banner/Banner'
import BrandSlider from '../../components/BrandSlider/BrandSlider'
import NewsSection from '../../components/NewsSection/NewsSection'
import OffersSection from '../../components/OffersSection/OffersSection'

export default function HomePage() {
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
