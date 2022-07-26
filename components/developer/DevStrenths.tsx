import React from 'react'
import { Element } from 'react-scroll';

type Props = {}

const DevStrenths = (props: Props) => {
  return (
    <Element name="devStrength" className='h-screen bg-yellow-200 border-solid border-violet-500 hover:bg-neutral-700 border-8'>
        <span>my strenths with visual / animation</span><br/>
        <li>Diverse skills and point of view</li>
        <li>Creative / problem solving</li>
        <li>Focus on user experience</li>
        <li>Attention to detail and quality of work</li>
        <li>Responding to a client brief</li>
        <li>Culture and language</li>
        <li>Working for myself</li>
        <li>Matching my goal with the company`&apos;`s goal</li>
        <li>Inspiring others</li>
        <li>Pacesetting, working hard to find the right solution</li>
        <li>Understanding the structure of how something is made</li>
        <li>Mechanical, technical, logical mind</li>
        <li>Wider life experience and reference points</li>
        <li>Giving feedback and persuading clients about best solutions</li>
    </Element>
  )
}

export default DevStrenths;