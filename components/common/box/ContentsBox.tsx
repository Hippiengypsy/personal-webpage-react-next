import React from 'react'
import clsx from "clsx";

type ContentsBoxProps = {
  readonly children?: React.ReactNode;
  readonly className?: React.ReactNode;
}

const ContentsBox = (props: ContentsBoxProps) => {
    const { children, className } = props
  return (
    <div className={clsx('border-2 mx-20 my-40 h-1/2 overflow-auto ', className)}>
        {children}
    </div>
  )
}

export default ContentsBox;
