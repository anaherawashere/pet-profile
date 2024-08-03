import { useParams } from 'react-router-dom'

import FormStep1 from './form-signup/Step1-Details'

function ProfilePage() {
  const { name } = useParams()

  return (
    <div>
      <h2>Pet Profile, {name}</h2>
      <p></p>
      {/* <p><strong>Name:</strong> {data.petName}</p>
      <p><strong>Date of Birth:</strong> {data.dateofBirth}</p>
      <p><strong>Sex:</strong> {data.sex}</p>
      <p><strong>Breed:</strong> {data.breed}</p>
      <p><strong>Species:</strong> {data.species}</p> */}
    </div>
  )
}

export default ProfilePage
