import { Outlet } from 'react-router-dom'

import Nav from './Nav'

function App() {
  return (
    <div className="container">
      <Nav />
      <Outlet />
    </div>
  )
}

export default App
