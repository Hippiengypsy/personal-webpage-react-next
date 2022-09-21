import Button from '@components/common/box/Button'
import ContentsBox from '@components/common/box/ContentsBox'
import ItemBox from '@components/common/box/ItemBox'
import React from 'react'

type Props = {}

const MinimalistTodoListApp = (props: Props) => {
    return (
        <div className="w-full h-full">
            <ContentsBox>
                <ItemBox boxType='box-item-head' className='text-3xl md:text-4xl'>
                    Minimalist Todo List App
                </ItemBox>
                <div>
                    <div>
                        <div className='flex justify-center'>
                            <img src='https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/63162bf767cd5712d20f7763/screenshot_2022-09-05-17-04-56-0000.png' />
                        </div>
                        <div className='flex justify-center my-2'>
                            <a
                                href='https://dev-cy-lee-todolist.netlify.app/'
                                target='blank'
                            >
                                <Button text='Live Demo' />
                            </a>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div>CRUD function</div>
                        <div>React.js Next.js Typescript Redux-Toolkit Tailwind CSS</div>
                    </div>
                </div>
            </ContentsBox>
        </div>
    )
}

export default MinimalistTodoListApp;