import { useParams } from 'react-router-dom'

function ProfilePage() {
  const { name } = useParams<{ name: string }>()

  return (
    <div className="container">
      <h1>Kia ora, {name} 👋</h1>
      <h2>Welcome to your profile</h2>
    </div>
  )
}

export default ProfilePage
