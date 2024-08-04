import { DetailValues, TextInput } from '../form-signup/formFieldTypes'

function PetName({ petDetails }: DetailValues) {
  return (
    <>
      <h2>Pet name {petDetails.petName}</h2>
    </>
  )
}

export default PetName
