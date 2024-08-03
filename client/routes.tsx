import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import ProfilePage from './components/ProfilePage'
import PetDetails from './components/form-signup/Step1-Details'
import SignupForm from './components/form-signup/SignupForm'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<SignupForm />} />
    <Route path="profile-page/:name" element={<ProfilePage />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
