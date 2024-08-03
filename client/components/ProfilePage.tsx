import { useParams } from 'react-router-dom'
import { useState } from 'react'

import PetName from './profile-components/PetName'
import { DetailValues } from './models/formFields'

function ProfilePage() {
  const { name } = useParams<{ name: string }>()

  const [data, setData] = useState({
    petName: '',
    dateofBirth: '',
    sex: '',
    breed: '',
    species: '',
  })

  const handleAdd = (obj: DetailValues) => {
    setData({
      petName: obj.petName,
      dateofBirth: obj.dateofBirth,
      sex: obj.sex,
      breed: obj.breed,
      species: obj.species,
    })
  }

  return (
    <div className="container">
      <h1>Kia ora, {name} 👋</h1>
      <h2>Welcome to your profile</h2>
      <PetName petDetails={data.petName} />
    </div>
  )
}

export default ProfilePage
