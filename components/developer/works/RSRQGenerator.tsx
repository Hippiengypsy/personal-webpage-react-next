import Button from '@components/common/box/Button'
import ContentsBox from '@components/common/box/ContentsBox'
import ItemBox from '@components/common/box/ItemBox'
import React from 'react'

type Props = {}

const RSRQGenerator = (props: Props) => {
  return (
    <div className="w-full h-full">
        <div className='h-full w-full px-6 sm:px-10 md:px-12'>
            <ItemBox boxType='box-item-head' className='text-3xl md:text-4xl'>
                Ron Swanson random quotes generator
            </ItemBox>
            <div>
                <div>
                    <div className='flex justify-center'>
                        <img src="/img/gif/rsrq.gif" />
                    </div>
                    <div className='flex justify-center my-2'>
                        <a
                            href='https://dev-cy-lee-rsquotesgenerator.netlify.app/'
                            target='blank'
                        >
                            <Button text='Live Demo' />
                        </a>
                    </div>
                </div>
                <div className='my-10'>
                    <div className='my-2 font-bold'>Overview</div>
                    <hr />
                    <div>A fun quote generator app using open source API.</div>
                    <div>Users can simply click the button to get a quote from "Parks and Recreation" legend Ron Swanson.</div>
                    <div>As a fan of lagavulin, it feels good.</div>
                    <div className='my-2 font-bold'>Process</div>
                    <hr />
                    <li>Structured folder and component hierarchy</li>
                    <li>Created page structure</li>
                    <li>Styled layouts with Tailwind CSS</li>
                    <li>Used axios and "Ron Swanson quotes" API for fetching data</li>
                    <li>Developed function to fetch and map data onClick</li>
                    <li>Developed function to change the button text onClick</li>
                    <li>Testing and debugging</li>
                    <div className='my-2 font-bold'>Libraries / Packages used</div>
                    <hr />
                    <li>JS library/framework: React.js Next.js based on Typescript</li>
                    <li>CSS: Tailwind CSS</li>
                    <li>Other Packages: Axios</li>
                    <li>Open source API: Ron Swanson quotes API</li>
                </div>
            </div>
        </div>
    </div>

    )
}

export default RSRQGenerator;