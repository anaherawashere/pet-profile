import { Link } from "react-router-dom"


function CreateProfileURL() {
  return (
    <>
      <p>Submitted!</p>
      <Link to={`/profile-page/${form.petName.replace(/\s/g, '').toLowerCase()}`}>
        Visit Profile
      </Link>
    </>
  )
}

export default CreateProfileURL