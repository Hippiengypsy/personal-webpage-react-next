import React from 'react'
import clsx from "clsx";

type ContentsBoxProps = {
  readonly children?: React.ReactNode;
  readonly className?: React.ReactNode;
}

const ContentsBox = (props: ContentsBoxProps) => {
    const { children, className } = props
  return (
    <div className={clsx('text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight', className)}>
        {children}
    </div>
  )
}

export default ContentsBox;
