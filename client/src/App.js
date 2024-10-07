import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import "./App.css"
import Slides from './Component/slides/Slides'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <Slides/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App