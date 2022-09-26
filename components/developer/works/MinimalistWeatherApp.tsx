import Button from '@components/common/box/Button'
import ContentsBox from '@components/common/box/ContentsBox'
import ItemBox from '@components/common/box/ItemBox'
import React from 'react'

type Props = {}

const MinimalistWeatherApp = (props: Props) => {
  return (
    <div className="w-full h-full">
        <div className='h-full w-full px-6 sm:px-10 md:px-12'>
            <ItemBox boxType='box-item-head' className='text-3xl md:text-4xl'>
            Minimalist Weather App
            </ItemBox>
            <div>
                <div>
                    <div className='flex justify-center'>
                    <img src='/img/gif/weather.gif' />
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
                <div className='my-10'>
                    <div className='my-2 font-bold'>What library / package used?</div>
                    <hr />
                    <li>JS library/framework: React.js Next.js based on Typescript</li>
                    <li>CSS: Tailwind CSS</li>
                    <li>Other Packages: Axios</li>
                    <li>Open source API: openweathermap</li>
                    <div className='my-2 font-bold'>How it's working?</div>
                    <hr />
                    <li>Fetch the data from API by using Axios and custom type/interface on typescript</li>
                    <li>Convert data by custom fahrenheit to celsius calcultator</li>
                    <li>Map the data</li>
                </div>
            </div>
        </div>
    </div>

    )
}

export default MinimalistWeatherApp;