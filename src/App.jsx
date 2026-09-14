import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './layouts/RootLayout'
import SearchJobs from './pages/SearchJobs'
import PostJobs from './pages/PostJobs'
import Earnings from './pages/Earnings'
import Contact from './pages/Contact'

const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>} >
        <Route index element={<Home/>}/>
        <Route path='search' element={<SearchJobs/>}/>
        <Route path='postjobs' element={<PostJobs/>}/> 
        <Route path='earnings' element={<Earnings/>}/> 
        <Route path='contact' element={<Contact/>}/> 
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App