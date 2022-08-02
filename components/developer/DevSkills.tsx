import Col2Box from '@components/common/box/Col2Box';
import ItemBox from '@components/common/box/ItemBox';
import SectionBox from '@components/common/box/SectionBox';
import React from 'react'
import { Element } from 'react-scroll';

type Props = {}

const DevSkills = (props: Props) => {
  return (
    <Element name="devSkills">
      <SectionBox className="section-2 flex">
        {/* <Col2Box>
          <ItemBox>
            <li>Javacsript</li>
            <li>React</li>
            <li>NextJS</li>
            <li>Typescript</li>
            <li>Redux-Toolkit</li>
            <li>Bootstrap</li>
            <li>TailwindCSS</li>
            <li>SASS</li>
            <li>GIT</li>
            </ItemBox>
            <ItemBox>
            <img src='https://www.business2community.com/wp-content/uploads/2015/10/digital-skills2.jpg.jpg' />
            <div>my dev skills with graphic animation</div>
            </ItemBox>
          </Col2Box> */}
          <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
              <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
                My Skills
              </h2>
              <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                <div className='w-auto h-56'>
                  <img className='w-full h-full hover:text-gray-900 dark:hover:text-white' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png" alt=""  />
                </div>
                <div className='w-auto h-56'>
                  <img className='w-full h-full hover:text-gray-900 dark:hover:text-white' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/397px-Javascript-shield.svg.png?20180912181046' alt="" />
                </div>
                <div className='w-auto h-56'>
                  <img className='w-full h-full hover:text-gray-900 dark:hover:text-white' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png" alt="" />
                </div>
                <div className='w-auto h-56'>
                  <img className='w-full h-full hover:text-gray-900 dark:hover:text-white' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/121px-React-icon.svg.png" alt="" />
                </div>
                <div className='w-auto h-56'>
                  <img className='w-full h-full hover:text-gray-900 dark:hover:text-white' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/207px-Nextjs-logo.svg.png?20190307203525" alt="" />
                </div>
                <div className='w-auto h-56'>
                  <img className='w-full h-full hover:text-gray-900 dark:hover:text-white' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/64px-Typescript_logo_2020.svg.png" alt="" />
                </div>
                <div className='w-auto h-56'>
                  <img className='w-full h-full hover:text-gray-900 dark:hover:text-white' src="https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage.jpg" alt="" />
                </div>
                <div className='w-auto h-56'>
                  <img className='w-full h-full hover:text-gray-900 dark:hover:text-white' src="https://www.brcline.com/wp-content/uploads/2016/01/bootstrap-logo-300x240.png" alt="" />
                </div>
                <div className='w-auto h-56'>
                  <img className='w-full h-full hover:text-gray-900 dark:hover:text-white' src="https://mlbaavqoemsp.i.optimole.com/RVoz4hs-gPqb-jQk/w:608/h:343/q:90/https://patch.marketing/wp-content/uploads/2021/09/tailwind.png" alt="" />
                </div>
                <div className='w-auto h-56'>
                  <img className='w-full h-full hover:text-gray-900 dark:hover:text-white' src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" alt="" />
                </div>
                <div className='w-auto h-56'>
                  <img className='w-full h-full hover:text-gray-900 dark:hover:text-white' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1024px-Git-logo.svg.png" alt="" />
                </div>
                <div className='w-auto h-56'>
                  <img className='w-full h-full hover:text-gray-900 dark:hover:text-white' src="https://www.pngfind.com/pngs/m/61-614478_source-tree-logo-png-transparent-png.png" alt="" />
                </div>
              </div>
          </div>
      </SectionBox>
    </Element>
  )
}

export default DevSkills;