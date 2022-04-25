import React from 'react'
import JoinNetworkForm from './JoinNetworkForm'
import JoinNetworkImage from './JoinNetworkImage'
import NavBar from './NavBar'

const JoinNetworkPage = () => {
  return (
    <section>
      <NavBar />
    <section className="joinNetWorkContainer">    
          <JoinNetworkForm />
          <JoinNetworkImage />
    </section>
    </section>
  )
}

export default JoinNetworkPage