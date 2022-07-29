import clsx from 'clsx'
import React from 'react'

type SectionBoxProps = {
    readonly children?: React.ReactNode;
    readonly className?: React.ReactNode;
}

const SectionBox = (props: SectionBoxProps) => {
    const { children, className } = props
  return (
    <div className={clsx('h-screen bg-gray-900 border-violet-500 border-4 hover:bg-slate-500 flex justify-between', className)}>
        {children}
    </div>
  )
}

export default SectionBox;