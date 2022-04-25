import React from 'react'
import leftImg from '../src/left.png'
import rightImg from '../src/right.png'
import SocialsOne from '../src/ig.png'
import SocialsTwo from '../src/tw.png'
import SocialsThree from '../src/yt.png'

const Footer = () => {
  return (
    <footer className="footerSection">
        <div className="container">

            <section className="footerContainer">
                <article className="compLogo footerLogo">
                    <figure className="logoContainer">
                        <img src={rightImg} alt="right-img" className="rightLogo" />
                        <img src={leftImg} alt="left-img" className="leftLogo" />
                    </figure>

                    <h3> Spectrangle </h3>
                </article>

                <p className="talentText"> &copy; 2021 TalentQL.  </p>

                <aside className="footerAsideContent">
                  <article className="footerInnerContent">
                      <h4> Program </h4>
                      <ul>
                        <li> Join Us </li>
                        <li> Hire Talents <a href="#" className="new"> new </a></li>
                        <li> Privacy Policy </li>
                      </ul>
                    </article>

                    <article className="footerInnerContent">
                      <h4> Company </h4>
                      <ul>
                        <li> About </li>
                        <li> Careers </li>
                        <li> Blog </li>
                        <li> Contact </li>
                      </ul>
                    </article>

                    <article className="footerInnerContent">
                      <h4> Hire Talents </h4>
                      <ul>
                        <li> For Companies </li>
                        <li> Join Us </li>
                        <li> Talk to us now </li>
                      </ul>
                    </article>
                </aside>
            </section>

        </div>

        <footer className="footerBottomContent">
          <div className="ghostDiv"></div>
          <p> &copy; Spectrangle. All rights reserved.  </p>
            <figure className="socialsIcons">
              <figure className="socialIcon">
                <img src={SocialsOne} alt="social-icon"/>
              </figure>
              <figure className="socialIcon">
                <img src={SocialsTwo} alt="social-icon"/>
              </figure>
              <figure className="socialIcon">
                <img src={SocialsThree} alt="social-icon"/>
              </figure>
            </figure>
        </footer>

    </footer>
  )
}

export default Footer