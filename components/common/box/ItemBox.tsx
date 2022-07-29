import React from 'react'
import clsx from "clsx";

type ItemBoxProps = {
  readonly children?: React.ReactNode;
  readonly className?: React.ReactNode;
}

const ItemBox = (props: ItemBoxProps) => {
    const { children, className } = props
  return (
    <div className={clsx('border-2 overflow-auto ', className)}>
        {children}
    </div>
  )
}

export default ItemBox;