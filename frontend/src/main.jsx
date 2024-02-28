import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

import Root from "./pages/root"
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Error from './pages/Error'
import Gwagon from './pages/Gwagon'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import Bmx7 from './pages/Bmx7'
import Test from './pages/Test'
import Carlist from './pages/Carlist'
import Audiaq8 from './pages/Audiaq8'
import CarDetails from './pages/CarDetails'
import Admin from './pages/Admin'



import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Root/>} errorElement={<Error/>}>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gwagon" element={<Gwagon/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/bmx7" element={<Bmx7/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/carlist" element={<Carlist/>}/>
        <Route path="/q8" element={<Audiaq8/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/details" element={<CarDetails/>}/>

      </Route>

  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
