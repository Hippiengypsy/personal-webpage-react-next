import React, {useEffect, useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import useScrollListener from 'hook/useScrollListener';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => {
      setNav(!nav);
      console.log("handleClick");
    }
    const handleClose =()=> setNav(!nav)

    // hide navbar on scroll down

    const [navClassList, setNavClassList] = useState<any>([]);
    const scroll = useScrollListener();
  
    // update classList of nav on scroll
    useEffect(() => {
      const hideNavBar = Array();
  
      if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
        hideNavBar.push("nav-bar--hidden");
  
      setNavClassList(hideNavBar);
    }, [scroll.y, scroll.lastY]);
  
  return (
    <div className={clsx (navClassList.join(" "), 'text-BW bg-gray-300 bg-opacity-20 dark:bg-black dark:bg-opacity-80 backdrop-filter backdrop-blur-lg px-4 py-8 md:px-[48px] md:py-[35px] text-lg w-screen z-10 sticky top-0')}>
      <div className='flex justify-between items-center w-full h-full'>
        <div className='flex justify-between items-center w-full h-full'>
          <h1 className='text-2xl sm:text-3xl font-bold mr-4'><a href='./'>Chang Yeol Lee</a></h1>
          <ul className='text-2xl font-light space-x-10 hidden lg:flex'>
            <li><Link to="devAbout" smooth={true} duration={500}>About</Link></li>
            <li><Link to="devSkills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="devStrength" smooth={true} duration={500}>Strength</Link></li>
            <li><Link to="devWork" smooth={true} duration={500}>Work</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </div>

        <div className='lg:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      {/* menu open */}
      <ul className={clsx (navClassList.join(" "), !nav ? 'hidden' : 'absolute backdrop-filter backdrop-blur-lg bg-gray-300 bg-opacity-20 dark:bg-black dark:bg-opacity-80 text-right right-0 w-full px-8 py-8 my-2')}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="devAbout" smooth={true} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="devSkills" smooth={true} duration={500}>Skills</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="devStrength" smooth={true} duration={500}>Strength</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="devWork" smooth={true} duration={500}>Work</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;