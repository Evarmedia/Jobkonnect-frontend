/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from './Hero'
import EmployerDashboard from '../Dashboard/EmployerDashboard'
import PopularCategories from './PopularCategories'
import PopularCompanies from './PopularCompanies'
import HowItWorks from './HowItWorks'

const Home = () => {
  return (
    <>
      <Hero />
      {/* <EmployerDashboard /> */}
      <HowItWorks />
      <PopularCategories />
      <PopularCompanies />
    </>
  )
}

export default Home