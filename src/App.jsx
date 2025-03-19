import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { SendMoney } from './pages/SendMoney';
import { Dashboard } from './pages/Dashboard';
import { MainPage } from './pages/MainPage'
import  { ProfileDetails } from './pages/ProfileDetails'

function App() {

  return (
    <div className="bg-[#5CADFF]">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/sendmoney' element={<SendMoney />} />
          <Route path='/profiledetails' element={<ProfileDetails />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App