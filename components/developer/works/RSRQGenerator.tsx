import ContentsBox from '@components/common/box/ContentsBox'
import ItemBox from '@components/common/box/ItemBox'
import SectionBox from '@components/common/box/SectionBox'
import React from 'react'

type Props = {}

const RSRQGenerator = (props: Props) => {
  return (
    <div className="w-full h-full">
        <ContentsBox>
            <ItemBox boxType='box-item-head' className='text-3xl md:text-4xl'>
                Ron Swanson random quotes generator
            </ItemBox>
            <div>
                <div>
                    <div className='flex justify-center'>
                        <img src="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6325cf0c395bc80009a807b1/screenshot_2022-09-17-13-44-35-0000.png" />
                    </div>
                    <div className='flex justify-center my-2'>
                        <a
                            href='https://dev-cy-lee-rsquotesgenerator.netlify.app/'
                            target='blank'
                        >
                            <button className='border-2 border-black dark:border-white rounded-xl p-2'>Live Demo</button>
                        </a>
                    </div>
                </div>
                <div className='mt-10'>
                    <div>use open source API</div>
                    <div>Javascript library/framework: React.js Next.js based on Typescript</div>
                    <div>CSS: Tailwind CSS</div>
                    <div>Other Packages: Axios</div>
                    <div>Feedback for myself?</div>
                    <li>Nice and easy starter for learning open source API</li>
                    <li>fetch vs axios?</li>
                </div>
            </div>
        </ContentsBox>
    </div>

    )
}

export default RSRQGenerator;