import React from 'react'
import clsx from "clsx";

type ItemColBoxProps = {
  readonly children?: React.ReactNode;
  readonly className?: React.ReactNode;
  readonly colNum: 'box-item-col2' | 'box-item-col3' | 'box-item-col4';
}

const ItemColBox = (props: ItemColBoxProps) => {
    const { children, className, colNum } = props
  return (
    <div className={clsx(colNum, 'box-item', className)}>
        {children}
    </div>
  )
}

export default ItemColBox;