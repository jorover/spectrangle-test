import React from 'react'
import Arrow from '../src/arrow.png'
import Clients from './Clients'
import WhyWork from './WhyWork'

const WorkingWithUs = () => {
  return (
    <section className="workingWithUsSection">
        <div className="container">
        <h2> What does working with us look like?  </h2>

        <figure className="workingWithUsImgs">
            <figure className="workWithusImg WorkImgOne">
                <figcaption className="workwithUsTextContent">
                        <h6> Book an appointment </h6>
                        <p> We schedule a meeting session with our client to discuss extensively about their projects </p>
                        <div className="workwithUsBtn"> 
                            <button> Learn more </button>
                            <img src={Arrow} alt="learn-Img" />
                        </div>
                </figcaption>
            </figure>

            <figure className="workWithusImg WorkImgTwo">
                <figcaption className="workwithUsTextContent">
                        <h6> Share idea and brief </h6>
                        <p> We collate all the necessary information about your product to generate a project summary </p>
                        <div className="workwithUsBtn"> 
                            <button> Learn more </button>
                            <img src={Arrow} alt="learn-Img" />
                        </div>
                </figcaption>
            </figure>

            <figure className="workWithusImg WorkImgThree">
                <figcaption className="workwithUsTextContent">
                        <h6> Handled by experts </h6>
                        <p> You don't need to worry, we have a team of expert who build your project from ground up </p>
                        <div className="workwithUsBtn"> 
                            <button> Learn more </button>
                            <img src={Arrow} alt="learn-Img" />
                        </div>
                </figcaption>
            </figure>

            <figure className="workWithusImg WorkImgFour">
                <figcaption className="workwithUsTextContent">
                        <h6> Ship Product </h6>
                        <p> Now we release your project because it is ready to launch. Let's make it happen, like we always do </p>
                        <div className="workwithUsBtn"> 
                            <button> Learn more </button>
                            <img src={Arrow} alt="learn-Img" />
                        </div>
                </figcaption>
            </figure>
        </figure>
        </div>

        <figure className="dotsContainer">
            <Clients />
            <WhyWork />
        </figure>
    </section>
  )
}

export default WorkingWithUs