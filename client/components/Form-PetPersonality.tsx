import { useState } from 'react'

import personality from '../../data/petpersonality'

function PetPersonality() {
  const personalityArr = Object.keys(personality)

  function handlePersonality() {
    return personalityArr.map((type) => {
      if (personality[type].type === 'checkbox') {
        return (
          <>
            <div className="form-options">
              <label key={personality[type].name} htmlFor={personality[type].name}>
                {type}
              </label>
              <div className="form-options__items">
                {personality[type].options.map((option) => {
                  return (
                    <>
                      <div className="button--option">
                        <input
                          type={personality[type].type}
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
      if (personality[type].type === 'text') {
        return (
          <>
            <div className="form-text">
              {/* <label key={personality[type].name} htmlFor={personality[type].name}>
                {type}
              </label> */}
              <input
                type={personality[type].type}
                name={personality[type].name}
                id={personality[type].name}
                placeholder={type}
              />
            </div>
          </>
        )
      }
      if (personality[type].type === 'textarea') {
        return (
          <>
            <div className="form-text">
              {/* <label key={personality[type].name} htmlFor={personality[type].name}>
                {type}
              </label> */}
              <textarea
                name={personality[type].name}
                id={personality[type].name}
                placeholder={type}
                rows={Number(personality[type].options[0])}
              />
            </div>
          </>
        )
      }
      if (personality[type].type === 'date') {
        return (
          <>
            <div className="form-text">
              {/* <label key={personality[type].name} htmlFor={personality[type].name}>
                {type}
              </label> */}
              <input
                type={personality[type].type}
                name={personality[type].name}
                id={personality[type].name}
                placeholder={type}
              />
            </div>
          </>
        )
      }
      if (personality[type].type === 'select') {
        return (
          <>
            <div className="form-text">
              {/* <label key={personality[type].name} htmlFor={personality[type].name}>
                {type}
              </label> */}
              <select id={personality[type].name} name={personality[type].name}>
                <option value="placeholder">Sex</option>
                {personality[type].options.map((option) => {
                  return (
                    <>
                      <option value={personality[type].name}>{option}</option>
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

  return (
    <div className="container">
      <form action="submit">
        <h2>Build your pet's profile</h2>
        <p>Share what makes your pet unique</p>
        {handlePersonality()}
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}

export default PetPersonality
