import React from 'react'
import Pattern from './Pattern'

const Idea = () => {
  return (
    <section className="ideasSection">
      <Pattern />
        <div className="container">
            <section className="ideasContent">
                <article className="ideasImgTextContent">
                    <h2> Have an idea you want to <br /> change into product?</h2>
                    <button className="btn ideasBtn"> Book Appointment </button>
                </article>

                <figure className="ideasImg">

                </figure>
            </section>
        </div>
    </section>
  )
}

export default Idea