import SectionBox from '@components/common/box/SectionBox';
import React from 'react'
import { Element } from 'react-scroll';

type Props = {}

const DevIntro = (props: Props) => {
  return (
    <Element name="devIntro">
        <SectionBox className="bg-grain01">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                  <h1 className="max-w-2xl mb-4 text-4xl text-right uppercase font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
                  Helping people turn their ideas into a reality 
                  </h1>
                  <div className="max-w-2xl mb-6 font-light my-40 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    <p>I'm Chang Yeol Lee, a front end developer based in Scotland. I'm currently looking to join a passionate and dynamic team.</p>
                  </div>
              </div>
              <div className="hidden opacity-80 lg:mt-0 lg:col-span-5 lg:flex lg:ml-10">
                  <img className='opacity-90' src="/img/me.jpg" alt="dreams" />
              </div>
          </div>
        </SectionBox>
    </Element>
  )
}

export default DevIntro;