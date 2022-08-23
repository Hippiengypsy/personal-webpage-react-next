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
                href='https://dev-cy-lee-weatherapp.netlify.app/'
                target='blank'
              >
                <div className='flex justify-center'>
                  <img src='https://screenshot-proxy.netlify.app/f_avif,w_204/https://d33wubrfki0l68.cloudfront.net/62ffb69d37e9f802d46daf3d/screenshot_2022-08-19-16-14-22-0000.png' />
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
                  <img src="https://screenshot-proxy.netlify.app/f_avif,w_204/https://d33wubrfki0l68.cloudfront.net/62ffb194b96f5d0008c53a1d/screenshot_2022-08-19-15-52-42-0000.png" />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Ron Swanson random quotes generator</div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <p>Grab a glass of Lagavulin, sit back and listen to the practical wisdom of Ron Swanson.</p>
                </div>
              </a>
            </div>
          </ItemBox>
        </ContentsBox>
       </SectionBox>
    </Element>
  )
}

export default DevWorks;