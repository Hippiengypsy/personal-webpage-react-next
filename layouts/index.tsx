import React from 'react'

type PageLayoutIndexProps = {
    readonly children?: React.ReactNode;
}

const PageLayoutIndex = (props: PageLayoutIndexProps) => {
    const {children} = props;
  return (
    <div>
        {children}
    </div>
  )
}

export default PageLayoutIndex;