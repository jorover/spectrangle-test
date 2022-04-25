import React from 'react'

const JoinNetworkForm = () => {
  return (
    <div className="joinNetworkFormContainer">
        <h3> Join Network </h3>
        <h5> Personal Information </h5>
          <form className="joinNetworkFormContent">
              <div className="formControl">
                  <label> First name </label>
                  <input type="text" />
              </div>

              <div className="formControl">
                  <label> Last name </label>
                  <input type="text" />
              </div>

              <div className="formControl">
                  <label > Email Address </label>
                  <input type="email" />
              </div>

              <div className="formControl">
                  <label > Phone number </label>
                  <input type="number" />
              </div>

              <div className="formControl">
                  <label > City </label>
                  <input type="text" />
              </div>

              <div className="formControl">
                  <label > Country </label>
                  <input type="text" />
              </div>

              <div className="formControl">
                  <label > Gender </label>
                  <input type="text" />
              </div>

              <div className="formControl">
                  <label > Area of proficiency/experience </label>
                  <input type="text" />
              </div>
          </form>

          <h4> Employment Details </h4>
          <form  className="employmentContainer">
              <div className="formControl">
                  <label > Salary Expectation </label>
                  <input type="text" />
              </div>

              <div className="formControl">
                  <label > Current Organization </label>
                  <input type="text" />
              </div>

              <div className="formControl">
                  <label > Employment Status </label>
                  <input type="email" />
              </div>

              <div className="formControl">
                  <label > Current Job Title </label>
                  <input type="number" />
              </div>

              <div className="formControl">
                  <label > Total Years of Professional Experience </label>
                  <input type="text" />
              </div>

              <div className="formControl">
                  <label > Prefered Work Type </label>
                  <input type="text" />
              </div>
            </form>

          <h4> Resume and Skills </h4>
          <form  className="resumeContainer">
              <div className="formControl">
                  <label > Resume/CV </label>
                  <button className="btn resumeBtn"> Upload file </button>
              </div>

              <div className="formControl">
                  <label > Other Skills </label>
                  <div className="skillsformControl">
                    <input type="text" />
                    <button className="btn addSkillsBtn"> Add </button>
                  </div>
              </div>

            </form>


              <h4> Links & Portfolio </h4>
                <div className="resumeSkillsContainer">
                  <form  className="resumeLinks">
                      <div className="formControl">
                          <label > LinkedIn Profile </label>
                          <input type="email" />
                      </div>

                      <div className="formControl">
                          <label > GitHub Profile </label>
                          <input type="number" />
                      </div>

                      <div className="formControl">
                          <label > Portfolio URL </label>
                          <input type="text" />
                      </div>

                      <div className="formControl">
                          <label > Twitter Profile </label>
                          <input type="text" />
                      </div>
                    </form>

                    <form  className="resumeSkillsList">
                        <div className="skills">
                          <p> List of Skills </p>
                        </div>

                        <div className="formControl additional">
                          <h4> Addditional Information </h4>
                          <label > How did you hear about us? </label>
                          <select  id="hearAboutUs"></select>
                        </div>
                    </form>
                </div>

            <form  className="checkBox">
              <input type="checkbox" />
              <p> I agree to Applicants Terms and Condition </p>
            </form>

        <button className="btn getStartedBtn"> Submit Application </button>
    </div>
  )
}

export default JoinNetworkForm