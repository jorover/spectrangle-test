import React from 'react'

const GetStarted = () => {
  return (
    <section className="getStartedContainer">      
            <h3> Get Started </h3>

        <form action="#" className="getStartedFormContainer">
            <div className="formControl">
                <label htmlFor="#"> Company/Personal Name </label>
                <input type="text" />
            </div>

            <div className="formControl">
                <label htmlFor="#"> Industry </label>
                <select name="#" id="industryDropDown"> </select>
            </div>

            <div className="formControl">
                <label htmlFor="#"> Website </label>
                <input type="text" />
            </div>

            <div className="formControl">
                <label htmlFor="#"> Work Email Address </label>
                <input type="email" />
            </div>

            <div className="formControl">
                <label htmlFor="#"> Position </label>
                <input type="text" />
            </div>

            <div className="formControl">
                <label htmlFor="#"> Phone number </label>
                <input type="number" />
            </div>

            <div className="formControl">
                <label htmlFor="#"> Work Type </label>
                <input type="text" />
            </div>

            <div className="formControl">
                <label htmlFor="#"> Country </label>
                <input type="text" />
            </div>

            <div className="formControl additional">
                <h4> Addditional Information </h4>
                <label htmlFor="#"> How did you hear about us? </label>
                <select name="#" id="hearAboutUs"></select>
            </div>
        </form>

            <button className="btn getStartedBtn"> Submit </button>

    </section>
  )
}

export default GetStarted