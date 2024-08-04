import { Link } from 'react-router-dom'

function AllProfiles() {
  const profiles = ['Pepper', 'Odie', 'Sven']

  return (
    <div className="container">
      <h1>All Profiles component</h1>
      {profiles.map((profile) => (
        <Link key={profile} to={`/profiles/`+ profile.toLowerCase()}>
          Profile {profile}
        </Link>
      ))}
    </div>
  )
}

export default AllProfiles
