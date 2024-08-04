import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import SignupForm from './components/form-signup/FormPage'
import FormStep1 from './components/form-signup/Form-Step1'
import FormStep2 from './components/form-signup/Form-Step2'
import ProfilePage from './components/ProfilePage'
import AllProfiles from './components/AllProfiles'
import NotFound from './components/NotFound'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<NotFound />}>
    <Route index element={<Home />} />
    <Route path="signup" element={<SignupForm />}>
      <Route path="step1" element={<FormStep1 />} />
      <Route path="step2" element={<FormStep2 />} />
    </Route>
    <Route path="profiles" element={<AllProfiles />} />
    <Route path="profiles/:profileName" element={<ProfilePage />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
