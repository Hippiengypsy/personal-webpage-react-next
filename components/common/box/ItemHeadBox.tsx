import React from 'react'
import clsx from "clsx";

type ItemHeadBoxProps = {
  readonly children?: React.ReactNode;
  readonly className?: React.ReactNode;
}

const ItemHeadBox = (props: ItemHeadBoxProps) => {
    const { children, className } = props
  return (
    <div className={clsx('box-item box-item-head', className)}>
        {children}
    </div>
  )
}

export default ItemHeadBox;