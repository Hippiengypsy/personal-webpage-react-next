import React from 'react'
import { Element } from 'react-scroll';

import SectionBox from '@components/common/box/SectionBox';
import ContentsBox from '@components/common/box/ContentsBox';
import ItemBox from '@components/common/box/ItemBox';

// tailwind css style
const Style_TextCardHaed = "mb-2 text-xl font-bold dark:text-white text-center";

const DevStrengths = () => {
  return (
    <Element name="devStrength">
      <SectionBox className="bg-grain02">
        <ContentsBox>
            <ItemBox boxType='box-item-head'>
                Strengths
            </ItemBox>
            <ItemBox boxType='box-item-col3'>
                <div className='box-item-border'>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 mx-auto rounded-full bg-black dark:bg-white stroke-white dark:stroke-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                    </div>
                    <h3 className={Style_TextCardHaed}>
                        Problem solving
                    </h3>
                    <div>
                        I am a logical thinker and always want to make sure I am asking the right question. I keep asking "Why?" until I distil an issue down to the core problem. Then I follow Richard Feynman's algorithm: Write down the problem. Think very hard. Write down the answer.                     </div>
                    </div>
                <div className='box-item-border'>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 mx-auto rounded-full bg-black dark:bg-white stroke-white dark:stroke-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                        </svg>
                    </div>
                    <h3 className={Style_TextCardHaed}>Setting goals</h3>
                    <div>
                        I work with clear objectives in mind so that we can understand a project's successes and failures and improve every time. I align my goals with the goals of the team to make sure we can work effectively.
                    </div>
                </div>
                <div className='box-item-border'>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 mx-auto rounded-full bg-black dark:bg-white stroke-white dark:stroke-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>
                    </div>
                    <h3 className={Style_TextCardHaed}>Theory into practice</h3>
                    <div>
                        I have a curious mind and enjoy learning, from the core foundations to the latest developments in the industry. Most of all, I like applying what I have learned to gain insights and new insights from the hands-on experience.
                    </div>
                </div>
                <div className='box-item-border'>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 mx-auto rounded-full bg-black dark:bg-white stroke-white dark:stroke-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                        </svg>
                    </div>
                    <h3 className={Style_TextCardHaed}>Hard work</h3>
                    <div>
                        I thrive working on challenging projects and put the hours in to make them my work the best it can be. I am self-motivated and like to be the pacesetter in the team, working hard to achieve our goals together.
                    </div>
                </div>
                <div className='box-item-border'>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 mx-auto rounded-full bg-black dark:bg-white stroke-white dark:stroke-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <h3 className={Style_TextCardHaed}>Different perspectives</h3>
                    <div>
                        I have had a varied career, including time as a composer and audio technician, a woodworker and on military service. I have worked and collaborated with a diverse range of people, who have expanded my mind and given me new ideas and perspectives.
                    </div>
                </div>
                <div className='box-item-border'>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 mx-auto rounded-full bg-black dark:bg-white stroke-white dark:stroke-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
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