import React from 'react'

const JoinNetworkForm = () => {
  return (
    <div className="joinNetworkFormContainer">
        <h3> Join Network </h3>
        <h5> Personal Information </h5>
          <form action="#" className="joinNetworkFormContent">
              <div className="formControl">
                  <label htmlFor="#"> First name </label>
                  <input type="text" />
              </div>

              <div className="formControl">
                  <label htmlFor="#"> Last name </label>
                  <input type="text" />
              </div>

              <div className="formControl">
                  <label htmlFor="#"> Email Address </label>
                  <input type="email" />
              </div>

              <div className="formControl">
                  <label htmlFor="#"> Phone number </label>
                  <input type="number" />
              </div>

              <div className="formControl">
                  <label htmlFor="#"> City </label>
                  <input type="text" />
              </div>

              <div className="formControl">
                  <label htmlFor="#"> Country </label>
                  <input type="text" />
              </div>

              <div className="formControl">
                  <label htmlFor="#"> Gender </label>
                  <input type="text" />
              </div>

              <div className="formControl">
                  <label htmlFor="#"> Area of proficiency/experience </label>
                  <input type="text" />
              </div>
          </form>

          <h4> Employment Details </h4>
          <form action="#" className="employmentContainer">
              <div className="formControl">
                  <label htmlFor="#"> Salary Expectation </label>
                  <input type="text" />
              </div>

              <div className="formControl">
                  <label htmlFor="#"> Current Organization </label>
                  <input type="text" />
              </div>

              <div className="formControl">
                  <label htmlFor="#"> Employment Status </label>
                  <input type="email" />
              </div>

              <div className="formControl">
                  <label htmlFor="#"> Current Job Title </label>
                  <input type="number" />
              </div>

              <div className="formControl">
                  <label htmlFor="#"> Total Years of Professional Experience </label>
                  <input type="text" />
              </div>

              <div className="formControl">
                  <label htmlFor="#"> Prefered Work Type </label>
                  <input type="text" />
              </div>
            </form>

          <h4> Resume and Skills </h4>
          <form action="#" className="resumeContainer">
              <div className="formControl">
                  <label htmlFor="#"> Resume/CV </label>
                  <button className="btn resumeBtn"> Upload file </button>
              </div>

              <div className="formControl">
                  <label htmlFor="#"> Other Skills </label>
                  <div className="skillsformControl">
                    <input type="text" />
                    <button className="btn addSkillsBtn"> Add </button>
                  </div>
              </div>

            </form>


              <h4> Links & Portfolio </h4>
                <div className="resumeSkillsContainer">
                  <form action="#" className="resumeLinks">
                      <div className="formControl">
                          <label htmlFor="#"> LinkedIn Profile </label>
                          <input type="email" />
                      </div>

                      <div className="formControl">
                          <label htmlFor="#"> GitHub Profile </label>
                          <input type="number" />
                      </div>

                      <div className="formControl">
                          <label htmlFor="#"> Portfolio URL </label>
                          <input type="text" />
                      </div>

                      <div className="formControl">
                          <label htmlFor="#"> Twitter Profile </label>
                          <input type="text" />
                      </div>
                    </form>

                    <form action="#" className="resumeSkillsList">
                        <div className="skills">
                          <p> List of Skills </p>
                        </div>

                        <div className="formControl additional">
                          <h4> Addditional Information </h4>
                          <label htmlFor="#"> How did you hear about us? </label>
                          <select name="#" id="hearAboutUs"></select>
                        </div>
                    </form>
                </div>

            <form action="#" className="checkBox">
              <input type="checkbox" />
              <p> I agree to Applicants Terms and Condition </p>
            </form>

        <button className="btn getStartedBtn"> Submit Application </button>
    </div>
  )
}

export default JoinNetworkForm