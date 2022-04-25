import React from 'react'
import ImageOne from '../src/s-1.jpg'
import ImageTwo from '../src/s-2.jpg'

const CultureShowcaseImages = () => {
  return (
    <figure className="cultureImages">
        <img src={ImageOne} alt="s-1" />
        <img src={ImageTwo} alt="s-1" />
    </figure>
  )
}

export default CultureShowcaseImages