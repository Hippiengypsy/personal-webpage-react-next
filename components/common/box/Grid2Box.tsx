import React from 'react'
import clsx from "clsx";

type Grid2BoxProps = {
  readonly children?: React.ReactNode;
  readonly className?: React.ReactNode;
}

const Grid2Box = (props: Grid2BoxProps) => {
    const { children, className } = props
  return (
    <div className={clsx('grid grid-cols-1 max-w-6xl my-auto sm:p-6 md:grid-cols-2 lg:p-8 border-2', className)}>
        {children}
    </div>
  )
}

export default Grid2Box;