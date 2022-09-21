import Button from '@components/common/box/Button'
import ContentsBox from '@components/common/box/ContentsBox'
import ItemBox from '@components/common/box/ItemBox'
import React from 'react'

type Props = {}

const MinimalistWeatherApp = (props: Props) => {
  return (
    <div className="w-full h-full">
        <ContentsBox>
            <ItemBox boxType='box-item-head' className='text-3xl md:text-4xl'>
            Minimalist Weather App
            </ItemBox>
            <div>
                <div>
                    <div className='flex justify-center'>
                    <img src='https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6326f71c0a7e3c0008dbd468/screenshot_2022-09-18-10-48-07-0000.png' />
                    </div>
                    <div className='flex justify-center my-2'>
                        <a
                            href='https://dev-cy-lee-weatherapp.netlify.app/'
                            target='blank'
                        >
                            <Button text='Live Demo' />
                        </a>
                    </div>
                </div>
                <div className='mt-10'>
                    <div>use open source API</div>
                    <div>Javascript library/framework: React.js Next.js based on Typescript</div>
                    <div>CSS: Tailwind CSS</div>
                    <div>Other Packages: Axios</div>
                    <div>Feedback for myself?</div>
                    <li>It was a nice experience to make types/interfaces for the data.</li>
                    <li>I've made custom calcultator for converting fahrenheit to celsius.</li>
                </div>
            </div>
        </ContentsBox>
    </div>

    )
}

export default MinimalistWeatherApp;