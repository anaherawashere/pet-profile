import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import FormStep1 from './Form-Step1'
import FormStep2 from './Form-Step2'

function SignupForm() {
  const [step, setStep] = useState(1)

  return (
    <div className="container">
      <Outlet />
    </div>
  )
}

export default SignupForm
