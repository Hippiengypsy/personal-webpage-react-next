import React from 'react'
import { Element } from 'react-scroll';
import Grid2Box from '../box/Grid2Box';
import ItemBox from '../box/ItemBox';
import SectionBox from '../box/SectionBox';
import ContactForm from './ContactForm';

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
                <ItemBox>
                    <ContactForm />
                </ItemBox>
            </Grid2Box>
        </SectionBox>
    </Element>
  )
}

export default Contact;