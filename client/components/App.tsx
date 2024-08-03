import { Outlet } from 'react-router-dom'

import Nav from './Nav'
import PetDetails from './form-signup/Step1-Details'

function App() {
  return (
    <div className="container">
      <Nav />
      <Outlet />
    </div>
  )
}

export default App
