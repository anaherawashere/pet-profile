import { useState } from 'react'

import personality from '../../../data/petpersonality'
import { PersonalityValues } from '../models/formFields'

const initialStepValues: PersonalityValues = {
  bio: '',
  faveFood: '',
  traits: '',
  busy: '',
  lazy: '',
  goofy: '',
  gorgeous: '',
  brat: '',
  loyal: '',
  playful: '',
  adventurous: '',
  foodie: '',
  snorer: '',
  crazy: '',
  floofy: '',
}

type ValueKeys = string

function FormStep2() {
  const [secondStepValues, setSecondStepValues] = useState(initialStepValues)

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const name = event.target.name as ValueKeys
    const value = event.target.value
    console.log({ name: name, value: value })
    setSecondStepValues({ ...secondStepValues, [name]: value })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(secondStepValues)
    setSecondStepValues(initialStepValues)
  }

  const personalityArr = Object.keys(personality) as ValueKeys[]

  function handlePersonality() {
    return personalityArr.map((type) => {
      if (personality[type].type === 'checkbox') {
        return (
          <div className="form-options" key={type}>
            <label
              key={personality[type].name}
              htmlFor={personality[type].name}
            >
              {type}
            </label>
            <div className="form-options__items">
              {personality[type].options.map((option) => {
                return (
                  <div className="button--option" key={option}>
                    <input
                      onChange={handleChange}
                      type={personality[type].type}
                      name={option.toLowerCase()}
                      id={option}
                    />
                    <label htmlFor={option}>{option}</label>
                  </div>
                )
              })}
            </div>
          </div>
        )
      }
      if (personality[type].type === 'text') {
        return (
          <div className="form-text" key={type}>
            <input
              onChange={handleChange}
              type={personality[type].type}
              name={personality[type].name}
              id={personality[type].name}
              placeholder={type}
              value={secondStepValues[personality[type].name] || ''}
            />
          </div>
        )
      }
      if (personality[type].type === 'textarea') {
        return (
          <div className="form-text" key={type}>
            <textarea
              onChange={handleChange}
              name={personality[type].name}
              id={personality[type].name}
              placeholder={type}
              rows={Number(personality[type].options[0])}
              value={secondStepValues[personality[type].name] || ''}
            />
          </div>
        )
      }
      if (personality[type].type === 'date') {
        return (
          <div className="form-text" key={type}>
            <input
              onChange={handleChange}
              type={personality[type].type}
              name={personality[type].name}
              id={personality[type].name}
              placeholder={type}
              value={secondStepValues[personality[type].name] || ''}
            />
          </div>
        )
      }
      if (personality[type].type === 'select') {
        return (
          <div className="form-text" key={type}>
            <select
              onChange={handleChange}
              id={personality[type].name}
              name={personality[type].name}
              value={secondStepValues[personality[type].name] || ''}
            >
              <option value="placeholder">Select an option</option>
              {personality[type].options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )
      }
      return null
    })
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Build your pet profile</h2>
        <p>Share what makes your pet unique</p>
        {handlePersonality()}
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}

export default FormStep2
