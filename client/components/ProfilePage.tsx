import { useParams } from 'react-router-dom'
import { useState } from 'react'

import PetName from './profile-components/PetName'
import { Step1Values } from './form-signup/formFieldTypes'


function ProfilePage() {
  const { profileName } = useParams<string>()
  const name = profileName?.charAt(0).toUpperCase() + profileName.slice(1)

  const [data, setData] = useState<Step1Values>({
    petName: '',
    dateofBirth: '',
    sex: '',
    breed: '',
    species: '',
  })

  const handleAdd = (obj: Step1Values) => {
    if (obj.petName === '') {
      return 'Error: No data passed'
    }
    return setData({
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
      <PetName petDetails={`${data.petName} 🐾`} />
      {handleAdd(data)}
    </div>
  )
}

export default ProfilePage
