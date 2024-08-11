import { Step1Values } from '../form-signup/formFieldTypes'

function PetName({ petDetails }: Step1Values) {
  return (
    <>
      <h2>Pet name {petDetails.petName}</h2>
    </>
  )
}

export default PetName
