import React ,{memo} from 'react'
import { NavLink } from 'react-router-dom'


const MainNavBar = () => {
  return (
    <div>
      <nav className='bg-blue-500'>
      <div className="uppperNav flex justify-between px-6 bg-green-300 " >
        <div className="logo font-extrabold text-3xl"><h1>MyPortFolio</h1></div>
        <div className="login text-xl font-bold">
          <button><NavLink to='/MyLoginPage'>Login/SignUp</NavLink></button>
        </div>
      </div>
      <div className='lowerNav flex justify-around p-3'>
      <NavLink className={(e) => { return e.isActive ? "NavEffect" : ""; }} to='/'><span className="cursor-pointer text-xl">Home</span></NavLink>
      <NavLink className={(e) => { return e.isActive ? "NavEffect" : ""; }} to='/myaccount'><span className="cursor-pointer text-xl">MyAccount</span></NavLink>
      <NavLink className={(e) => { return e.isActive ? "NavEffect" : ""; }} to='/mytodoapp'><span className="cursor-pointer text-xl">MyProjects</span></NavLink>
      <NavLink className={(e) => { return e.isActive ? "NavEffect" : ""; }} to='/aboutme'><span className="cursor-pointer text-xl">About Me</span></NavLink>
      </div>
      </nav>
    </div>
  )
}

export default memo(MainNavBar)
