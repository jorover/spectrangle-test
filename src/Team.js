import React from 'react'
import { data } from './TeamData'

const Team = () => {
  return (
    <section className="teamSection">
        <div className="container">

        <header className="ourCultureHeaderText">
            <h2> Meet the Team </h2>
        </header>


        <section className="teamContainer">
                {
                    data.map(item => {
                        const {id, img, title, name} = item;
                        return (
                            <figure key={id} className="teamCard">
                                <img src={img} alt="team-card-img" />
                                <figcaption className="teamCardDetails">
                                    <h4> {name}</h4>
                                    <p> {title} </p>
                                </figcaption>
                            </figure>
                        )
                    })
                }
        </section>
        </div>
    </section>
  )
}

export default Team