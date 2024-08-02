import { Outlet } from "react-router-dom"

import Nav from "./Nav"

function App() {
  return (
    <div className="container">
      <Nav />
      <h1>App</h1>
      <p>React development has begun!</p>
      <p>Heyyy</p>
      <Outlet />
    </div>
  )
}

export default App
