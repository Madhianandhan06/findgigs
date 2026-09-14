import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-2'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/search'}>Search Jobs</NavLink>
        <NavLink to={'/postjobs'}>Post jobs</NavLink>
        <NavLink to={'/earnings'}>Earnings</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
    </div>
  )
}

export default Navbar