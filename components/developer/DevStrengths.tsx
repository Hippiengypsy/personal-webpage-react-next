import React from 'react'
import { Element } from 'react-scroll';

import SectionBox from '@components/common/box/SectionBox';
import ContentsBox from '@components/common/box/ContentsBox';
import ItemBox from '@components/common/box/ItemBox';

// tailwind css style
const Style_TextCardHaed = "mb-2 text-xl font-bold dark:text-white";

const DevStrengths = () => {
  return (
    <Element name="devStrength">
      <SectionBox className="bg-grain02 flex">
        <ContentsBox>
            <ItemBox boxType='box-item-head'>
                Strength
            </ItemBox>
            <ItemBox boxType='box-item-col3'>
                <div className='box-border'>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                        </svg>
                    </div>
                    <h3 className={Style_TextCardHaed}>
                        Problem solving
                    </h3>
                    <div>
                        I am a logical thinker and always want to make sure I am asking the right question. I keep asking "Why?" until I distil an issue down to the core problem. Then I follow Richard Feynman's algorithm: Write down the problem. Think very hard. Write down the answer.                     </div>
                    </div>
                <div className='box-border'>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                    </div>
                    <h3 className={Style_TextCardHaed}>Setting goals</h3>
                    <div>
                        I work with clear objectives in mind so that we can understand a project's successes and failures and improve every time. I align my goals with the goals of the team to make sure we can work effectively.
                    </div>
                </div>
                <div className='box-border'>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h3 className={Style_TextCardHaed}>Theory into practice</h3>
                    <div>
                        I have a curious mind and enjoy learning, from the core foundations to the latest developments in the industry. Most of all, I like applying what I have learned to gain insights and new insights from the hands-on experience.
                    </div>
                </div>
                <div className='box-border'>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className={Style_TextCardHaed}>Hard work</h3>
                    <div>
                        I thrive working on challenging projects and put the hours in to make them my work the best it can be. I am self-motivated and like to be the pacesetter in the team, working hard to achieve our goals together.
                    </div>
                </div>
                <div className='box-border'>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h3 className={Style_TextCardHaed}>Different perspectives</h3>
                    <div>
                        I have had a varied career, including time as a composer and audio technician, a woodworker and on military service. I have worked and collaborated with a diverse range of people, who have expanded my mind and given me new ideas and perspectives.
                    </div>
                </div>
                <div className='box-border'>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                    </div>
                    <h3 className={Style_TextCardHaed}>Empowering users</h3>
                    <div>
                        I believe that technology can give people the freedom they need to find and follow their life purpose and achieve their personal goals. I want to work on projects that are user-friendly, well-structured and valuable to the people that use them.
                    </div>
                </div>
            </ItemBox>
        </ContentsBox>
      </SectionBox>
    </Element>
  )
}

export default DevStrengths;