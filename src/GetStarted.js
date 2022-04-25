import React from 'react'

const GetStarted = () => {
  return (
    <section className="getStartedContainer">      
            <h3> Get Started </h3>

        <form className="getStartedFormContainer">
            <div className="formControl">
                <label> Company/Personal Name </label>
                <input type="text" />
            </div>

            <div className="formControl">
                <label> Industry </label>
                <select name="#" id="industryDropDown"> </select>
            </div>

            <div className="formControl">
                <label> Website </label>
                <input type="text" />
            </div>

            <div className="formControl">
                <label> Work Email Address </label>
                <input type="email" />
            </div>

            <div className="formControl">
                <label> Position </label>
                <input type="text" />
            </div>

            <div className="formControl">
                <label> Phone number </label>
                <input type="number" />
            </div>

            <div className="formControl">
                <label> Work Type </label>
                <input type="text" />
            </div>

            <div className="formControl">
                <label> Country </label>
                <input type="text" />
            </div>

            <div className="formControl additional">
                <h4> Addditional Information </h4>
                <label> How did you hear about us? </label>
                <select id="hearAboutUs"></select>
            </div>
        </form>

            <button className="btn getStartedBtn"> Submit </button>

    </section>
  )
}

export default GetStarted