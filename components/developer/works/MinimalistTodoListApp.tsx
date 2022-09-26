import Button from '@components/common/box/Button'
import ContentsBox from '@components/common/box/ContentsBox'
import ItemBox from '@components/common/box/ItemBox'
import React from 'react'

type Props = {}

const MinimalistTodoListApp = (props: Props) => {
    return (
        <div className="w-full h-full">
            <div className="h-full w-full px-6 sm:px-10 md:px-12">
                <ItemBox boxType='box-item-head' className='text-3xl md:text-4xl'>
                    Minimalist Todo List App
                </ItemBox>
                <div>
                    <div>
                        <div className='flex justify-center'>
                            <img src='/img/gif/todo.gif' />
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
                    <div className='my-10'>
                        <div className='my-2 font-bold'>What library / package used?</div>
                        <hr />
                        <li>JS library/framework: React.js Next.js based on Typescript</li>
                        <li>CSS: Tailwind CSS</li>
                        <li>State Management: Redux-Toolkit</li>
                        <div className='my-2 font-bold'>How it's working?</div>
                        <hr />
                        <li>Send "id", "text", "completed" data to redux slice when form onSubmit</li>
                        <li>Toggle completed icon onClicked</li>
                        <li>Delete the item when icon onClicked</li>
                        <li>Clear the list when button onClicked</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MinimalistTodoListApp;