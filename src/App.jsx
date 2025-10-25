
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import ViewProfile from './pages/ViewProfile'

function App() {
  


  return (
    <>
      
    <Routes>

      <Route path="/" element={<Auth/>} ></Route>
      <Route path="/register" element={<Auth register/>} ></Route>
      <Route path="/viewprofile" element={<ViewProfile/>} ></Route>

    </Routes>

    </>
  )
}

export default App
