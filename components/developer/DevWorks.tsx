import ContentsBox from '@components/common/box/ContentsBox';
import ItemBox from '@components/common/box/ItemBox';
import SectionBox from '@components/common/box/SectionBox';
import React from 'react'
import { Element } from 'react-scroll';

type Props = {}

const DevWorks = (props: Props) => {
  return (
    <Element name="devWorks">
      <SectionBox className="bg-grain02">
        <ContentsBox>
          <ItemBox boxType='box-item-head'>
            Works
          </ItemBox>
          <ItemBox boxType='box-item-col2'>
            <div className='box-item-border lg:w-4/6 mx-auto hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>
              <a
                href='https://dev-cy-lee-todolist.netlify.app/'
                target='blank'
              >
                <div className='flex justify-center'>
                  <img src='https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/63162bf767cd5712d20f7763/screenshot_2022-09-05-17-04-56-0000.png' />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Minimalist Todo List App</div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <p>Don't trust your memory but your memos.</p>
                  <p></p>
                </div>
              </a>
            </div>
            <div className='box-item-border lg:w-4/6 mx-auto hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>
              <a
                href='https://dev-cy-lee-weatherapp.netlify.app/'
                target='blank'
              >
                <div className='flex justify-center'>
                  <img src='https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/62ffb69d37e9f802d46daf3d/screenshot_2022-08-19-16-14-22-0000.png' />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Minimalist Weather App</div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <p>A simple app to search the weather by location.</p>
                  <p></p>
                </div>
              </a>
            </div>
            <div className='box-item-border lg:w-4/6 mx-auto hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>
              <a
                href='https://dev-cy-lee-rsquotesgenerator.netlify.app/'
                target='blank'
              >
                <div className='flex justify-center'>
                  <img src="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/62ffb194b96f5d0008c53a1d/screenshot_2022-08-19-15-52-42-0000.png" />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Ron Swanson random quotes generator</div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <p>Grab a glass of Lagavulin, sit back and listen to the practical wisdom of Ron Swanson.</p>
                </div>
              </a>
            </div>
            <div className='box-item-border lg:w-4/6 mx-auto hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>
              <div className='flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[210px] h-[210px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>

              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">What's next?</div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <p>More ideas, more skills and more insights.</p>
              </div>
            </div>
          </ItemBox>
        </ContentsBox>
       </SectionBox>
    </Element>
  )
}

export default DevWorks;