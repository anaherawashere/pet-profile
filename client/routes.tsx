import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import ProfilePage from './components/ProfilePage'
import PetDetails from './components/Form-PetDetails'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<PetDetails />} />
    <Route path="profile-page/:name" element={<ProfilePage />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
