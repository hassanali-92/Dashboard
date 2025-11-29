import React from 'react'
import Home from './temp'
import { Route, Routes } from 'react-router-dom'
import Profile from './componentes/Profile'
import NotFound from './componentes/Notfound'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pro' element={<Profile/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
      {/* <Home/> */}
    </div>
  )
}

export default App
