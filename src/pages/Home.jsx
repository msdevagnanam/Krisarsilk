import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import Silkcreation from '../components/Silkcreation'
import AboutSection from '../components/AboutSection'
import CounterSection from '../components/CounterSection'
import BenefitsSection from '../components/BenefitsSection'
import TopCategories from '../components/TopCategories'
import NewArrivals from '../components/NewArrivals'
import StrengthBanner from '../components/StrengthBanner'
import BestSelling from '../components/BestSelling'
import Footer from '../components/Footer'
import SocialSidebar from '../components/SocialSidebar'
import VisitUs from '../components/VisitUs'

const Home = () => {
  return (
    <>
    <Navbar />
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
      <Footer />
    </div>
    
    
    
    </>
    
  )
}

export default Home