import React from 'react'
import clsx from "clsx";

type Grid2BoxProps = {
  readonly children?: React.ReactNode;
  readonly className?: React.ReactNode;
}

const Grid2Box = (props: Grid2BoxProps) => {
    const { children, className } = props
  return (
    <div className={clsx('border-2 grid grid-cols-2 line min-w-full', className)}>
        {children}
    </div>
  )
}

export default Grid2Box;