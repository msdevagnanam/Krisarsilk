import React from 'react'
import Navbar from '../components/Common/Navbar'
import Herosection from '../components/herosection/Herosection'
import Silkcreation from '../components/herosection/Silkcreation'
import AboutSection from '../components/herosection/AboutSection'
import CounterSection from '../components/herosection/CounterSection'
import BenefitsSection from '../components/herosection/BenefitsSection'
import TopCategories from '../components/herosection/TopCategories'
import NewArrivals from '../components/herosection/NewArrivals'
import StrengthBanner from '../components/herosection/StrengthBanner'
import BestSelling from '../components/herosection/BestSelling'
import Footer from '../components/Common/Footer'
import SocialSidebar from '../components/Common/SocialSidebar'
import VisitUs from '../components/herosection/VisitUs'

const Home = () => {
  return (
    <>
    <SocialSidebar />
    <div className="p-0"> 
      <Herosection />
      <Silkcreation />
      <AboutSection />
      <CounterSection />
      <TopCategories />
      <NewArrivals />
      <StrengthBanner />
      <BestSelling />
      <BenefitsSection />
      <VisitUs />
    </div>
    
    
    
    </>
    
  )
}

export default Home