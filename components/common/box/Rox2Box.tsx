import React from 'react'
import clsx from "clsx";

type Rox2BoxProps = {
  readonly children?: React.ReactNode;
  readonly className?: React.ReactNode;
}

const Rox2Box = (props: Rox2BoxProps) => {
    const { children, className } = props
  return (
    <div className={clsx('grid grid-rows-1 max-w-6xl my-auto sm:p-6 md:grid-rows-2 lg:p-8 border-2', className)}>
        {children}
    </div>
  )
}

export default Rox2Box;