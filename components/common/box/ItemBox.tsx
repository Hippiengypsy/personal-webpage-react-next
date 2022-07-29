import React from 'react'
import clsx from "clsx";

type ItemBoxProps = {
  readonly children?: React.ReactNode;
  readonly className?: React.ReactNode;
}

const ItemBox = (props: ItemBoxProps) => {
    const { children, className } = props
  return (
    <div className={clsx('p-6 m-2 bg-gray-100 dark:bg-gray-800 border-2 ', className)}>
        {children}
    </div>
  )
}

export default ItemBox;