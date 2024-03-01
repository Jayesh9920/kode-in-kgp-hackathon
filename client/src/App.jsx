import { Route, Routes } from 'react-router-dom'
import Dashboard from './Routes/Dashboard'
import NavBar from './components/Navbar'
import Landing from './Routes/Landing'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element = {<NavBar />} >
          <Route path="auth" element = {<Landing />} />
          <Route path="dashboard" element = {<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
