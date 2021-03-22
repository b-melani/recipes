import React from 'react'

export default function OneRecipe({ text, image }) {
  console.log('képcimee')
  console.log(image)
  return (
    <div className="card" styles="width: 18rem;">
      <img
        src={require('../backend/images/cheesecake')}
        className="card-img-top"
        alt="img"
      />
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  )
}
