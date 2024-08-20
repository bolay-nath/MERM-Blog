import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Project from './Project'

function App() {
  

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/signIn' element={<SignIn />} />
    <Route path='/singUp' element={<SignUp />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/project' element={<Project />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
