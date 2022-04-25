import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './Home'
import OurCulture from './OurCulture'
import JoinNetworkPage from '../src/JoinNetworkPage'
import WorkWithUsPage from './WorkWithUsPage'
import Footer from './Footer'

const Router = () => {
  return (
    <>
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/ourculture" element = {<OurCulture />} />
          <Route path = "/joinnetwork" element = {<JoinNetworkPage />}/>
          <Route path = "/workwithus" element = {<WorkWithUsPage />}/>
        </Routes>
      <Footer />
    </>
  )
}

export default Router