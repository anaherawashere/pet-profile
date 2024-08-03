import { useState } from "react"
import FormStep1 from "./Step1-Details"
import FormStep2 from "./Step2-Personality"

function SignupForm() {
  const [step, setStep] = useState(1)

  return (
    <>
      <FormStep1 />
      <FormStep2 />
    </>
  )
}

export default SignupForm