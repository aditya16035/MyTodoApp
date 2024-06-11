import React from 'react'

const Navbar = () => {
  return (
   <>
    <header className='text-white bg-violet-800 p-2 flex justify-around w-full '>
      <div className="upper font-bold text-2xl text-center">
        <h1 className=' cursor-pointer'>iTask</h1>
      </div>
      <div className="nav gap-4 flex px-4">
        <span className='text-xl hover:font-bold cursor-pointer transition-all'>Home</span>
        <span className='text-xl hover:font-bold cursor-pointer transition-all'>MyTasks</span>
      </div>
    </header>
   </>
  )
}

        
export default Navbar
