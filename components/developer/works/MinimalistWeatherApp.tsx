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
                    <div className='my-2 font-bold'>Overview</div>
                    <hr />
                    <div>A weather app using open source API.</div>
                    <div>Users can search location to bring up weather data for that area.</div>
                    <div className='my-2 font-bold'>Process</div>
                    <hr />
                    <li>Structured folder and component hierarchy</li>
                    <li>Created form</li>
                    <li>Styled layouts with Tailwind CSS</li>
                    <li>Used axios and "openweathermap" API for fetching data</li>
                    <li>Hid API keys in environment variables and added .env on gitignore</li>
                    <li>Created type/interface with typescript for the fetched data</li>
                    <li>Created custom Fahrenheit to Celsius converter for temperature data</li>
                    <li>Testing and debugging</li>
                    <div className='my-2 font-bold'>Libraries / Packages used</div>
                    <hr />
                    <li>JS library/framework: React.js Next.js based on Typescript</li>
                    <li>CSS: Tailwind CSS</li>
                    <li>Other Packages: Axios</li>
                    <li>Open source API: openweathermap</li>
                </div>
            </div>
        </div>
    </div>

    )
}

export default MinimalistWeatherApp;