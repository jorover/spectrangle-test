import React from 'react'
import NavBar from './NavBar'
import GetStarted from './GetStarted'
import CreateBuild from './CreateBuild'

const WorkWithUsPage = () => {
  return (
    <section>
      <NavBar />
      <div className="workWithusPageSection">
          <GetStarted />
          <CreateBuild />
      </div>
    </section>
  )

}

export default WorkWithUsPage