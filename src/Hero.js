import React from 'react'
import Pattern from './Pattern'
import NavBar from './NavBar'

const Hero = () => {
  return (
    <div className="heroContainer">
      <NavBar />
        <div className="container">
            <article className="hero-content">
                <h1> Turn your product brief <br/> into an MVP in a <br />  meeting session</h1>
                <button className="btn hero-btn"> Tell us About Your Project Today! </button>
            </article>

          <div className="overlay"></div>
        </div>

        <Pattern />
    </div>
  )
}

export default Hero