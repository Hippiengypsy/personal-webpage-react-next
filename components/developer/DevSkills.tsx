import React from 'react'
import { Element } from 'react-scroll';

type Props = {}

const DevSkills = (props: Props) => {
  return (
    <Element name="devSkills" className='h-screen bg-neutral-400 border-solid border-violet-500 hover:bg-neutral-700 border-8'>
        <span>my dev skills with graph visual / animation</span><br/>
        <li>Javacsript</li>
        <li>React</li>
        <li>NextJS</li>
        <li>Typescript</li>
        <li>Redux-Toolkit</li>
        <li>Bootstrap</li>
        <li>TailwindCSS</li>
        <li>SASS</li>
        <li>GIT</li>
    </Element>
  )
}

export default DevSkills;