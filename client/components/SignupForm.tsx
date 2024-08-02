import { useState } from 'react'

import fields from '../../data/signupfields'

function SignupForm() {
  const fieldArr = Object.keys(fields)

  function handleFields() {
    return fieldArr.map((type) => {
      if (fields[type].options[0] !== '') {        
        return (
          <>
            <label key={fields[type].name} htmlFor={fields[type].name}>{type}</label>
            {fields[type].options.map((option) => {
              return (
                <>
                  <label key={option} htmlFor={option}>{option}</label>
                  <input type={fields[type].type} name={option} id={option} />
                </>
              )
            })}            
            <br /><br />
          </>
        )
      } 
      if (fields[type].options[0] === '') {        
        return (
          <>
            <label key={fields[type].name} htmlFor={fields[type].name}>{type}</label>
            <input type={fields[type].type} name={fields[type].name} id={fields[type].name} placeholder={type} />
            <br /><br />
          </>
        )
      }
    })
  }

  console.log(fields.Age.options[0]);
  

  return (
    <div className="signup-form">
      <form action="submit">
          {handleFields()}
      </form>
    </div>
  )
}

export default SignupForm
