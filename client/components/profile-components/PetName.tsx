import { DetailValues, TextInput } from "../models/formFields"

function PetName({petDetails}:  DetailValues) {
  return(
    <>
      <h2>Pet name {petDetails.petName}</h2>
    </>
  )
}

export default PetName