import { useState } from 'react'
import details from '../../../data/petdetails'
import { DetailValues } from '../models/formFields'

function FormStep1() {
  const [form, setForm] = useState({
    petName: '',
    dateofBirth: '',
    sex: '',
    breed: '',
    species: '',
  })

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const name = event.target.name
    const value = event.target.value
    setForm({ ...form, [name]: value })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(form)
    setForm({
      petName: '',
      dateofBirth: '',
      sex: '',
      breed: '',
      species: '',
    })
  }

  const fieldArr = Object.keys(details)

  function handleDetails() {
    return fieldArr.map((type) => {
      if (details[type].type === 'checkbox') {
        return (
          <div className="form-options" key={type}>
            <div className="form-options__items">
              {details[type].options.map((option) => (
                <div className="button--option" key={option}>
                  <input
                    onChange={handleChange}
                    type={details[type].type}
                    name={option}
                    id={option}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
          </div>
        )
      }
      if (details[type].type === 'text') {
        return (
          <div className="form-text" key={type}>
            <input
              onChange={handleChange}
              value={form[details[type].name] || ''}
              type={details[type].type}
              name={details[type].name}
              id={details[type].name}
              placeholder={type}
            />
          </div>
        )
      }
      if (details[type].type === 'textarea') {
        return (
          <div className="form-text" key={type}>
            <textarea
              name={details[type].name}
              id={details[type].name}
              placeholder={type}
              rows={Number(details[type].options[0])}
              value={form[details[type].name] || ''}
              onChange={handleChange}
            />
          </div>
        )
      }
      if (details[type].type === 'date') {
        return (
          <div className="form-text" key={type}>
            <input
              onChange={handleChange}
              type={details[type].type}
              name={details[type].name}
              id={details[type].name}
              placeholder={type}
              value={form[details[type].name] || ''}
            />
          </div>
        )
      }
      if (details[type].type === 'select') {
        return (
          <div className="form-text" key={type}>
            <select
              id={details[type].name}
              name={details[type].name}
              value={form[details[type].name] || 'placeholder'}
              onChange={handleChange}
            >
              <option value="placeholder">Select an option</option>
              {details[type].options.map((option) => (
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
        <h2>Create a profile for your pet</h2>
        <p>Start with a few basic details</p>
        {handleDetails()}
        <button type="submit">Get started</button>
      </form>
    </div>
  )
}

export default FormStep1
