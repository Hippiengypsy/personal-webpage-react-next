import clsx from 'clsx'
import React from 'react'

type SectionBoxProps = {
    readonly children?: React.ReactNode;
    readonly className?: React.ReactNode;
}

const SectionBox = (props: SectionBoxProps) => {
    const { children, className } = props
  return (
    <div className={clsx('relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 ', className)}>
        {children}
    </div>
  )
}

export default SectionBox;

// sm:items-center sm:pt-0