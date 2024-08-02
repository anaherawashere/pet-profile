import { useState } from 'react'

import details from '../../data/petdetails'
import PetPersonality from './Form-PetPersonality'

function PetDetails() {
  const fieldArr = Object.keys(details)

  function handleDetails() {
    return fieldArr.map((type) => {
      if (details[type].type === 'checkbox') {
        return (
          <>
            <div className="form-options">
              {/* <label key={details[type].name} htmlFor={details[type].name}>
                {type}
              </label> */}
              <div className="form-options__items">
                {details[type].options.map((option) => {
                  return (
                    <>
                      <div className="button--option">
                        <input
                          type={details[type].type}
                          name={option}
                          id={option}
                        />
                        <label key={option} htmlFor={option}>
                          {option}
                        </label>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
          </>
        )
      }
      if (details[type].type === 'text') {
        return (
          <>
            <div className="form-text">
              {/* <label key={details[type].name} htmlFor={details[type].name}>
                {type}
              </label> */}
              <input
                type={details[type].type}
                name={details[type].name}
                id={details[type].name}
                placeholder={type}
              />
            </div>
          </>
        )
      }
      if (details[type].type === 'textarea') {
        return (
          <>
            <div className="form-text">
              {/* <label key={details[type].name} htmlFor={details[type].name}>
                {type}
              </label> */}
              <textarea
                name={details[type].name}
                id={details[type].name}
                placeholder={type}
                rows={Number(details[type].options[0])}
              />
            </div>
          </>
        )
      }
      if (details[type].type === 'date') {
        return (
          <>
            <div className="form-text">
              {/* <label key={details[type].name} htmlFor={details[type].name}>
                {type}
              </label> */}
              <input
                type={details[type].type}
                name={details[type].name}
                id={details[type].name}
                placeholder={type}
              />
            </div>
          </>
        )
      }
      if (details[type].type === 'select') {
        return (
          <>
            <div className="form-text">
              {/* <label key={details[type].name} htmlFor={details[type].name}>
                {type}
              </label> */}
              <select id={details[type].name} name={details[type].name}>
                <option value="placeholder">Sex</option>
                {details[type].options.map((option) => {
                  return (
                    <>
                      <option value={details[type].name}>{option}</option>
                    </>
                  )
                })}
              </select>
            </div>
          </>
        )
      }
    })
  }

  console.log(details.Age.options[0])

  return (
    <>
      <div className="container">
        <form action="submit">
          <h2>Create a profile for your pet</h2>
          <p>Start with a few basic details</p>
          {handleDetails()}
          <button type="submit">Get started</button>
        </form>
      </div>
      <PetPersonality />
    </>
  )
}

export default PetDetails
