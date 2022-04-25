import React from 'react'
import NavBar from './NavBar'
import CultureGallery from './CultureGallery'
import CultureShowcase from './CultureShowcase'
import CultureShowcaseImages from './CultureShowcaseImages'
import Team from './Team'

const OurCulture = () => {
  return (
    <section>
      <NavBar />
    <section className="ourCultureContainer">
        <div className="container">
          <header className="ourCultureHeaderText">
            <h1> Our Culture </h1>
          </header>
        </div>

        <CultureGallery />

        <div className="container cultureInnerContent">
          <CultureShowcase />
          <CultureShowcaseImages />
        </div>

        <Team />
    </section>
    </section>
  )
}

export default OurCulture