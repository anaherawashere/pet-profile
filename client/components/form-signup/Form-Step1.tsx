import { useState } from 'react'

import formFields from './formFieldData'
import { Step1Values } from './formFieldTypes'
import {
  TextField,
  TextAreaField,
  CheckboxField,
  SelectField,
} from './FormInputs'

const initialFieldValues: Step1Values = {
  petName: '',
  dateofBirth: '',
  sex: '',
  breed: '',
  species: '',
}

function FormStep1() {
  const [form, setForm] = useState<Step1Values>(initialFieldValues)

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
    setForm(initialFieldValues)
  }

  const fields = formFields['Step 1']
  const fieldArr = Object.keys(formFields['Step 1'])

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
    <>
      <form onSubmit={handleSubmit}>
        <h2>Create a profile for your pet</h2>
        <p>Start with a few basic fields</p>
        {handleFields()}
        <button type="submit">Get started</button>
      </form>
    </>
  )
}

export default FormStep1
