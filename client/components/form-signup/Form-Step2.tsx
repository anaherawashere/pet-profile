import { useState } from 'react'

import formFields from './formFieldData'
import { Step2Values } from './formFieldTypes'
import {
  TextField,
  TextAreaField,
  CheckboxField,
  SelectField,
} from './FormInputs'

const initialFieldValues: Step2Values = {
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

export default function FormStep2() {
  const [form, setForm] = useState<Step2Values>(initialFieldValues)

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const name = event.target.name
    const value = event.target.value
    setForm({ ...form, [name]: value })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(form)
    setForm(initialFieldValues)
  }

  const fields = formFields['Step 2']
  const fieldArr = Object.keys(formFields['Step 2'])

  function handleFields() {
    return fieldArr.map((type: string) => {
      switch (fields[type].type) {
        case 'text':
        case 'date':
          return (
            <TextField
              handleChange={handleChange}
              form={form}
              fields={fields}
              type={type}
            />
          )
        case 'textarea':
          return (
            <TextAreaField
              handleChange={handleChange}
              form={form}
              fields={fields}
              type={type}
            />
          )
        case 'checkbox':
          return (
            <CheckboxField
              handleChange={handleChange}
              fields={fields}
              type={type}
            />
          )
        case 'select':
          return (
            <SelectField
              handleChange={handleChange}
              form={form}
              fields={fields}
              type={type}
            />
          )
        default:
          return null
      }
    })
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Build your pet profile</h2>
        <p>Share what makes your pet unique</p>
        {handleFields()}
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}
