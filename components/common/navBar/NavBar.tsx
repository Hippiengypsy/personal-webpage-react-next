import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'


import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'><a href='./'>ANOTHER SIDE OF ME</a></h1>
          <ul className='hidden md:flex'>
          <li><Link to="devAbout" smooth={true} duration={500}>About</Link></li>
          <li><Link to="devSkills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="devStrength" smooth={true} duration={500}>Strength</Link></li>
          <li><Link to="devWork" smooth={true} duration={500}>Work</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </div>
        {/* <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-4'>
            Sign In
          </button>
          <button className='px-8 py-3'>Sign Up</button>
        </div> */}
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="devAbout" smooth={true} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="devSkills" smooth={true} duration={500}>Skills</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="devStrength" smooth={true} duration={500}>Strength</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="devWork" smooth={true} duration={500}>Work</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="contact" smooth={true} duration={500}>Contact</Link></li>
        {/* <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>
        </div> */}
      </ul>
    </div>
  );
};

export default Navbar;