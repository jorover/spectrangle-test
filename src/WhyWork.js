import React from 'react'
import IconOne from '../src/ic-3.png'
import IconTwo from '../src/ic-2.png'
import IconThree from '../src/ic-1.png'
import IconFour from '../src/ic.png'

const WhyWork = () => {
  return (
    <section className="whyWorkSection">
        <div className="container">
            <header className="whyWorkContent">
                <article className="whyWorkTexts">
                    <h2> Why work with us <br /> at Spectrangle? </h2>
                </article>

                <aside className="whyWorkTextContent">
                    <p> We at Spectrangles hire and manage the best talents for in-house projects and external companies globally, thereby creating, building and strengthning your projects and product with the best team available.</p>
                </aside>
            </header>

            <section className="whyWorkIconSection">
                <article className="whyWorkIconCard">
                    <figure className="whyWorkIcon">
                        <img src={IconOne} alt="icon-one" />
                    </figure>

                    <article className="whyWorkCardContent">
                        <h5> Measurable Growth</h5>
                        <p> One investment in the Spectrangle team would depicit an exponential growth in your company</p>
                    </article>
                </article>

                <article className="whyWorkIconCard">
                    <figure className="whyWorkIcon">
                        <img src={IconTwo} alt="icon-two" />
                    </figure>

                    <article className="whyWorkCardContent">
                        <h5> World Class Engineer </h5>
                        <p> Engineers in Spectrangle are technology leaders and experts in their fields </p>
                    </article>
                </article>

                <article className="whyWorkIconCard">
                    <figure className="whyWorkIcon">
                        <img src={IconThree} alt="icon-three" />
                    </figure>

                    <article className="whyWorkCardContent">
                        <h5> Scalable Product</h5>
                        <p> The team at Spectrangle build scalable and trend following products for clients. </p>
                    </article>
                </article>

                <article className="whyWorkIconCard">
                    <figure className="whyWorkIcon">
                        <img src={IconFour} alt="icon-four" />
                    </figure>

                    <article className="whyWorkCardContent">
                        <h5> Diverse Team </h5>
                        <p> Design thinking and agile principles are at the core of how our teams operate.</p>
                    </article>
                </article>

            </section>
        </div>
    </section>
  )
}

export default WhyWork



