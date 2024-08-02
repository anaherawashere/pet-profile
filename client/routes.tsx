import {Route, createBrowserRouter, createRoutesFromElements,} from 'react-router-dom'

import App from './components/App'
import SignupForm from './components/SignupForm'
import ProfilePage from './components/ProfilePage'

const routes = createRoutesFromElements (
  <Route path='/' element={<App />}>
    <Route index element={<SignupForm/>}/>
    <Route path='profile-page/:name' element={<ProfilePage/>}/>
  </Route>
)

export const router = createBrowserRouter(routes)