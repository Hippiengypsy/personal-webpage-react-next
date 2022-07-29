import React from 'react'
import { Element } from 'react-scroll';
import Grid2Box from '../box/Grid2Box';
import ItemBox from '../box/ItemBox';
import SectionBox from '../box/SectionBox';

type Props = {}

const Contact = (props: Props) => {
  return (
    <Element name='contact'>
        <SectionBox>
            <Grid2Box>
                <ItemBox>
                    <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                        Contact Me
                    </h1>
                    <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                        Looking foward to work with you
                    </p>
                    <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                            NewEmail@acme.org
                        </div>
                    </div>
                </ItemBox>
                <ItemBox className=''>
                    <form className="p-6 flex flex-col justify-center">
                        <div className="flex flex-col my-1">
                            <label htmlFor="name" className="hidden">Full Name</label>
                            <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 my-1 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-400 font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>

                        <div className="flex flex-col my-1">
                            <label htmlFor="email" className="hidden">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-100 my-1 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-400 font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>

                        <div className="flex flex-col my-1">
                            <label htmlFor="tel" className="hidden">Number</label>
                            <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className="w-100 my-1 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-400 font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>

                        <button type="submit" className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg my-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                            Submit
                        </button>
                    </form>
                </ItemBox>
            </Grid2Box>
        </SectionBox>
    </Element>
  )
}

export default Contact;