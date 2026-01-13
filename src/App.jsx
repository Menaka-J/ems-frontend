import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import HeaderComponent from './Component/HeaderComponent'
import FooterComponent from './Component/FooterComponent'

function App() {

  return (
    <>
      <HeaderComponent />
      <ListEmployeeComponent />
      <FooterComponent/>
    </>
  )
}

export default App
