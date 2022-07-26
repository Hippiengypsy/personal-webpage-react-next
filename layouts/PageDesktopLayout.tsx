import NavBar from '@components/common/navBar/NavBar';
import React from 'react'

type PageDesktopLayoutProps = {
    readonly children?: React.ReactNode;
}

const PageDesktopLayout = (props: PageDesktopLayoutProps) => {
    const {children} = props;
  return (
    <div>
        <NavBar />
        {children}
    </div>
  )
}

export default PageDesktopLayout;