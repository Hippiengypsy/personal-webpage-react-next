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
                        <div className='my-2 font-bold'>Overview</div>
                        <hr />
                        <div>A todo list app for demonstrating CRUD functions.</div>
                        <div>Designed with a minimalist UI to make it simple for users to keep track of their tasks.</div>
                        <div className='my-2 font-bold'>Process</div>
                        <hr />
                        <li>Structured folder and component hierarchy</li>
                        <li>Created form</li>
                        <li>Styled layouts with Tailwind CSS</li>
                        <li>Created a redux slice for onClick functions to create, toggle, delete list items and clear the list</li>
                        <li>Created type/interface with typescript for the redux slice</li>
                        <li>Testing and debugging</li>
                        <div className='my-2 font-bold'>Libraries / Packages used</div>
                        <hr />
                        <li>JS library/framework: React.js Next.js based on Typescript</li>
                        <li>CSS: Tailwind CSS</li>
                        <li>State Management: Redux-Toolkit</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MinimalistTodoListApp;