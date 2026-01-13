import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import HeaderComponent from './Component/HeaderComponent'
import FooterComponent from './Component/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeComponent from './Component/EmployeeComponent'

function App() {

  return (
    <>
      <BrowserRouter>

        {/* header  */}
        <HeaderComponent />

        <Routes>

          {/* http://localhost/3000 */}
          <Route path='/' element={<ListEmployeeComponent />}></Route>
          {/* http://localhost/3000/employee */}
          <Route path='/employees' element={<ListEmployeeComponent />}></Route>
          {/* http://localhost/3000/add-employee */}
          <Route path='/add-employee' element={<EmployeeComponent />}></Route>
          {/* http://localhost/3000/update-employee/:id */}
          <Route path='/update-employee/:id' element={<EmployeeComponent />}></Route>

        </Routes>

        {/* footer  */}
        <FooterComponent />

      </BrowserRouter>
    </>
  )
}

export default App
