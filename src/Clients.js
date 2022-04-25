import React from 'react'
import CImagOne from '../src/cl-0.jpg'
import CImagTwo from '../src/cl-1.jpg'
import CImagThree from '../src/cl-2.jpg'
import CImagFour from '../src/cl-3.jpg'
import CImagFive from '../src/cl-4.jpg'

const Clients = () => {
  return (
    <section className="clientSection">
        <div className="container">
            <section className="clientContent">
                <article className="clientTextContent">
                    <p> We had an experience working with Spectrangle and we're impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they have made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</p>
                </article>
                <figure className="clientImgContainer">
                    <img src={CImagOne} alt="client-images" />
                    <img src={CImagTwo} alt="client-images" />
                    <figure className="innerClientImg">
                        <img src={CImagThree} alt="client-images" />
                        <figcaption className="innerClientText">
                            <h5> John Snow </h5>
                            <p> CEO, Woofs Corporation </p>
                        </figcaption>
                    </figure>
                    <img src={CImagFour} alt="client-images" />
                    <img src={CImagFive} alt="client-images" />
                </figure>
            </section>
        </div>
    </section>
  )
}

export default Clients