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
                    <div className='my-2 font-bold'>What library / package used?</div>
                    <hr />
                    <li>JS library/framework: React.js Next.js based on Typescript</li>
                    <li>CSS: Tailwind CSS</li>
                    <li>Other Packages: Axios</li>
                    <li>Open source API: Ron Swanson quotes API</li>
                    <div className='my-2 font-bold'>How it's working?</div>
                    <hr />
                    <li>Fetch the data from API by using Axios</li>
                    <li>Change the text when button onClick</li>
                    <li>Map the data</li>
                </div>
            </div>
        </div>
    </div>

    )
}

export default RSRQGenerator;