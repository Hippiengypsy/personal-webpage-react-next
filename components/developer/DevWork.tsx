import ContentsBox from '@components/common/box/ContentsBox';
import ItemBox from '@components/common/box/ItemBox';
import SectionBox from '@components/common/box/SectionBox';
import React from 'react'
import { Element } from 'react-scroll';

type Props = {}

const DevWork = (props: Props) => {
  return (
    <Element name="devWork">
      <SectionBox className="bg-grain02 flex">
        <ContentsBox>
          <ItemBox boxType='box-item-head'>
            Works
          </ItemBox>
          <ItemBox boxType='box-item-col2'>
            <a
              className='box-border w-4/6 mx-auto hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
              href='https://dev-cy-lee-weatherapp.netlify.app/'
              target='blank'
            >
              <div className='flex justify-center'>
                <img src='https://screenshot-proxy.netlify.app/f_avif,w_204/https://d33wubrfki0l68.cloudfront.net/62ffb69d37e9f802d46daf3d/screenshot_2022-08-19-16-14-22-0000.png' />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Weather App</div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ReactJS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">NextJS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Typescript</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REST API</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Axios</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind CSS</span>
              </div>
            </a>
            <a
              className='box-border w-4/6 mx-auto hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
              href='https://dev-cy-lee-rsquotesgenerator.netlify.app/'
              target='blank'
            >
              <div className='flex justify-center'>
                <img src="https://screenshot-proxy.netlify.app/f_avif,w_204/https://d33wubrfki0l68.cloudfront.net/62ffb194b96f5d0008c53a1d/screenshot_2022-08-19-15-52-42-0000.png" />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Ron Swanson random quotes generator</div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ReactJS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">NextJS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Typescript</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REST API</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Axios</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind CSS</span>
              </div>
            </a>
          </ItemBox>
        </ContentsBox>
       </SectionBox>
    </Element>
  )
}

export default DevWork;