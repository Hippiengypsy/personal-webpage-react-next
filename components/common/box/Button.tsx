import React from 'react'

type ButtonProps = {
    readonly text: string;
}

const Button = (props: ButtonProps) => {
    const { text } = props;
  return (
    <button className='border-2 border-black dark:border-white rounded-xl p-2'>{text}</button>
    )
}
export default Button;