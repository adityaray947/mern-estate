import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/SignUp'
import Header from './component/Header'
import PrivateRoute from './component/PrivateRoute'
import CreateListing from './pages/CreateLisitng'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'
import Search from './pages/Search'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/search' element={<Search />} />
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/Signin' element={<Signin/>}/>
            <Route path='/listing/:listingId' element={<Listing/>}/>

            <Route  element={<PrivateRoute/>}>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/create-listing' element={<CreateListing/>}/>
            <Route path='/update-listing/:listingId' element={<UpdateListing/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
