import { useState } from "react"
import { Outlet } from "react-router-dom"

import FormStep1 from "./Step1-Details"
import FormStep2 from "./Step2-Personality"

function SignupForm() {
  const [step, setStep] = useState(1)

  return (
    <div className="container">
      <h1>Sign up</h1>
      <Outlet/>
    </div>
  )
}

export default SignupForm